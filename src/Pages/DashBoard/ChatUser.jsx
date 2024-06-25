import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa';
import Layout from './Layout';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import moment from 'moment';

const socket = io('http://localhost:8080');

function UserChat() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const messageInputRef = useRef(null);
  const [adminLastSeen, setAdminLastSeen] = useState(null);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchAdmin();
    fetchMessages();

    socket.on('receiveMessage', handleMessage);

    return () => {
      socket.off('receiveMessage', handleMessage);
    };
  }, []);

  const fetchAdmin = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/v1/user/admin', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setAdmin(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error fetching admin');
      console.error('Error fetching admin:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/v1/user/getMessages/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setMessages(response.data.messages);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error fetching messages');
      console.error('Error fetching messages:', error);
    }
  };

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (!message.trim() || !user || !admin) return;

    const newMessage = {
      sender: user._id,
      receiver: admin._id,
      message,
      timestamp: new Date().toISOString(),
    };

    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    messageInputRef.current.value = '';
  };

  const isAdminOnline = () => {
    if (!adminLastSeen) return false;
    return moment().diff(adminLastSeen, 'seconds') < 10;
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen bg-gray-100 border shadow-xl">
        <div className="flex justify-between items-center p-4 bg-NavBg text-white shadow-md">
          {loading ? (
            <p className="text-lg">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : admin ? (
            <div>
              <h2 className="text-lg font-semibold">{admin.name}</h2>
              <p className="text-xs mt-1">
                {isAdminOnline() ? 'Online' : `Last seen: ${adminLastSeen ? moment(adminLastSeen).fromNow() : 'Offline'}`}
              </p>
            </div>
          ) : (
            <p className="text-lg">No admin available</p>
          )}
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === user._id ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-4 rounded-lg shadow-md ${msg.sender === user._id ? 'bg-NavBg text-white' : 'bg-white text-gray-800'}`} style={{
                  borderRadius: msg.sender === user._id ? '20px 20px 1px 20px' : '20px 20px 20px 1px',
                }}>
                <p className="text-xs text-gray-500 mb-1">
                  {msg.sender === user._id ? 'You' : admin ? admin.name : 'Admin'} &rarr; {msg.sender === user._id ? 'Admin' : 'You'}
                </p>
                <p className="mb-0">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white flex items-center space-x-4 border-t shadow-md">
          <input ref={messageInputRef} type="text" placeholder="Type your message..." className="flex-1 p-2 border rounded-full" />
          <button className="bg-NavBg text-white px-4 py-2 rounded hover:bg-TopNavBg flex items-center"><FaPaperclip /></button>
          <button className="bg-NavBg text-white px-4 py-2 rounded hover:bg-TopNavBg flex items-center" onClick={sendMessage}><FaPaperPlane /></button>
        </div>
      </div>
    </Layout>
  );
}

export default UserChat;
