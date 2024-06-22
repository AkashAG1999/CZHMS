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
      sender: admin._id,
      receiver: selectedUser._id,
      message,
      timestamp: new Date().toISOString(),
    };

    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    messageInputRef.current.value = '';
  };

  return (
    <Layout>
      <div className="flex h-screen shadow-xl rounded-lg border">
        <div className={`w-full md:w-1/4 bg-gray-700 p-4 overflow-y-auto ${selectedUser ? 'hidden md:block' : ''}`}>
          <h2 className="text-lg text-white font-semibold mb-4">Chats</h2>
          {loading ? (
            <p className="text-blue-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li
                  key={user._id}
                  className={`p-2 rounded-lg cursor-pointer transform transition-transform duration-200 hover:scale-105 ${selectedUser?._id === user._id ? 'bg-TopNavBg' : 'hover:bg-NavBg'
                    }`}
                  onClick={() => handleUserSelect(user)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-TopNavBg rounded-full flex items-center justify-center text-white text-lg font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-white">{user.name}</div>
                      <div className="text-sm text-gray-300">{user.email}</div>
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
                  className="md:hidden text-white"
                  onClick={() => setSelectedUser(null)}
                >
                  Back
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex flex-col space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === admin._id ? 'justify-end' : 'justify-start'}`}
                      
                    >
                      <div
                        className={`rounded-lg p-4 shadow-md ${msg.sender === admin._id ? 'bg-TopNavBg text-white' : 'bg-white text-gray-800'
                          }`}
                          style={{
                            borderRadius: msg.sender === admin._id ? '20px 20px 1px 20px' : '20px 20px 20px 1px',
                          }}
                      >
                        {msg.message}
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
                  onClick={sendMessage}
                >
                  <FaPaperPlane className="mr-2" /> Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg font-semibold text-gray-500">Select a user to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AdminChat;
