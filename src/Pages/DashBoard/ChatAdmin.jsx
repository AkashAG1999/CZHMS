import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';
import Layout from './Layout';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io('http://localhost:8080');

function AdminChat() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const messageInputRef = useRef(null);
  const admin = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchUsers();
    const storedSelectedUser = localStorage.getItem('selectedUser');
    if (storedSelectedUser) {
      handleUserSelect(JSON.parse(storedSelectedUser));
    }

    socket.on('receiveMessage', handleMessage);

    return () => {
      socket.off('receiveMessage', handleMessage);
    };
  }, []);

  useEffect(() => {
    const updateLastSeen = () => {
      localStorage.setItem('adminLastSeen', new Date().toISOString());
    };

    updateLastSeen();
    const interval = setInterval(updateLastSeen, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/v1/user/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setUsers(response.data.data);
        if (!localStorage.getItem('selectedUser') && response.data.data.length > 0) {
          handleUserSelect(response.data.data[0]);
        }
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error fetching users');
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserSelect = async (user) => {
    setSelectedUser(user);
    localStorage.setItem('selectedUser', JSON.stringify(user));
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/getMessages/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setMessages(response.data.messages);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error fetching messages. Please try again later.');
      console.error('Error fetching messages:', error);
    }
  };

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (!message.trim() || !admin || !selectedUser) return;

    const newMessage = {
      sender: admin?._id,
      receiver: selectedUser?._id,
      message,
      timestamp: new Date().toISOString(),
    };

    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    messageInputRef.current.value = '';
  };

  const handleInvite = () => {
    const roomID = generateRandomID(5);
    const meetingURL = `${window.location.protocol}//${window.location.host}/cz/meetings/meeting-room?roomID=${roomID}`;
    socket.emit('initiateVideoCall', { from: admin._id, to: selectedUser._id, roomID });

    // Automatically send meeting link to selected user
    const message = `Hey ${selectedUser.name}, join the meeting here: ${meetingURL}`;
    const newMessage = {
      sender: admin?._id,
      receiver: selectedUser?._id,
      message,
      timestamp: new Date().toISOString(),
    };

    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Open meeting URL in a new tab
    window.open(meetingURL, '_blank');
    setShowPopup(false);
  };

  const generateRandomID = (len) => {
    let result = '';
    const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
    const maxPos = chars.length;
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  };

  const renderMessageContent = (content) => {
    // Regex to detect URLs in the message content
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    return parts.map((part, index) =>
      urlRegex.test(part) ? (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {part}
        </a>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex h-screen shadow-xl rounded-lg border">
        <div className={`w-full md:w-1/4 bg-white border-r shadow-xl p-4 overflow-y-auto ${selectedUser ? 'hidden md:block' : ''}`}>
          <div className="mb-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-TopNavBg text-sm font-semibold">
                  {admin?.name?.charAt(0)}
                </div>
              </div>
              <div>
                <div className="text-lg font-medium">{admin?.name}</div>
                <div className="text-xs">{admin?.email}</div>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none"
            />
            
          </div>
          {loading ? (
            <p className="text-blue-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul className="space-y-2 mt-4">
              <h2 className="text-lg text-black font-semibold mb-4">Peoples</h2>
              {filteredUsers.map((user) => (
                <li
                  key={user._id}
                  className={`cursor-pointer p-2 rounded-full ${selectedUser && selectedUser._id === user._id ? 'bg-NavBg text-white' : 'hover:bg-Hover'}`}
                  onClick={() => handleUserSelect(user)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-TopNavBg text-sm font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-medium">{user.name}</div>
                      <div className="text-xs">{user.email}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={`flex-1 flex flex-col bg-gray-100 ${!selectedUser ? 'hidden md:flex' : ''}`}>
          {selectedUser ? (
            <>
              <div className="p-4 bg-TopNavBg flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">{selectedUser.name}</h2>
                <button
                  className="md:hidden bg-white text-xs text-black rounded-3xl px-2 p-2"
                  onClick={() => setSelectedUser(null)}
                >
                  Back
                </button>
                <button
                  className="bg-white text-xs text-black rounded-3xl px-2 p-2 ml-2"
                  onClick={() => setShowPopup(true)}
                >
                  Invite to Meeting
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex flex-col space-y-4">
                {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === admin?._id ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs p-4 rounded-lg shadow-md ${msg.sender === admin?._id ? 'bg-NavBg text-white' : 'bg-white text-gray-800'}`}
                  style={{
                    borderRadius: msg.sender === admin?._id ? '20px 20px 1px 20px' : '20px 20px 20px 1px',
                  }}
                >
                  <p className="text-xs text-gray-500 mb-1">
                    {msg.sender === admin?._id ? 'You' : selectedUser ? selectedUser.name : 'User'} &rarr; {msg.sender === admin?._id ? selectedUser.name : 'You'}
                  </p>
                  {renderMessageContent(msg.message)}
                </div>
              </div>
            ))}

                </div>
              </div>
              <div className="p-4 bg-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    ref={messageInputRef}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none"
                  />
                  <button
                    className="bg-NavBg text-white rounded-full p-2"
                    onClick={sendMessage}
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-lg text-gray-500">
              Select a user to start a conversation
            </div>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Start Video Call</h2>
            <p>Do you want to invite {selectedUser.name} to a video call?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-gray-200 text-black px-4 py-2 rounded"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-NavBg text-white px-4 py-2 rounded"
                onClick={handleInvite}
              >
                Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default AdminChat;
