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

  return (
    <Layout>
      <div className="flex h-screen shadow-xl rounded-lg border">
        <div className={`w-full md:w-1/4 bg-white border-r shadow-xl p-4 overflow-y-auto ${selectedUser ? 'hidden md:block' : ''}`}>
          <h2 className="text-lg text-black font-semibold mb-4">Peoples</h2>
          {loading ? (
            <p className="text-blue-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul className="space-y-2 mt-4">
              {users.map((user) => (
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
                    <div key={index} className={`flex ${msg.sender === admin._id ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-4 rounded-lg shadow-md ${msg.sender === admin._id ? 'bg-NavBg text-white' : 'bg-white text-gray-800'}`}
                        style={{
                          borderRadius: msg.sender === admin?._id ? '20px 20px 1px 20px' : '20px 20px 20px 1px',
                        }}>
                        <p className="text-xs text-gray-500 mb-1">
                          {msg.sender === admin._id ? 'You' : selectedUser ? selectedUser.name : 'User'} &rarr; {msg.sender === admin._id ? selectedUser.name : 'You'}
                        </p>
                        <p className="mb-0">{renderMessageContent(msg.message)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-white flex items-center">
                <input
                  type="text"
                  ref={messageInputRef}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
                />
                <button
                  className="bg-TopNavBg text-white px-4 py-2 rounded-r-full hover:bg-NavBg flex items-center"
                  onClick={sendMessage}>
                  <FaPaperPlane className="mr-2" /> Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-lg text-gray-600">Select a user to start chatting</p>
            </div>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <p className="text-lg font-semibold mb-4">Send Meeting Invitation</p>
            <p className="mb-4">Are you sure you want to send a meeting invitation to {selectedUser?.name}?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-TopNavBg text-white px-4 py-2 rounded-full hover:bg-Hover focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleInvite}>
                Invite
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default AdminChat;
