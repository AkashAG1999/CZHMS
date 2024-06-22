import * as React from 'react';
import axios from 'axios';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Layout from './Layout';

function randomID(len) {
  let result = '';
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const [showPopup, setShowPopup] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedUser, setSelectedUser] = React.useState(null);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await axios.get('http://localhost:8080/api/v1/user/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('API Response:', response.data); // Add this line to log the response
      if (response.data.success) {
        setUsers(response.data.data); // Adjust based on your API response structure
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

  let myMeeting = async (element) => {
    // Generate Kit Token
    const appID = 1057413900;
    const serverSecret = "7b2e7f0752aaac1167e029dd171b2bbc";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // Start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  const handleVideoCall = () => {
    setShowPopup(true);
    // Additional logic to initiate the video call can be added here
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Layout>
      <div className="flex h-screen">
        {/* User List */}
        <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Users</h2>
          {loading ? (
            <p className="text-blue-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {users.map(user => (
                <li
                  key={user._id}
                  className={`p-2 border-b cursor-pointer ${selectedUser?._id === user._id ? 'bg-blue-100' : ''}`}
                  onClick={() => handleUserSelect(user)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-700">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedUser ? (
            <>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                <h2 className="text-lg font-semibold mb-4">{selectedUser.name}</h2>
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-md">Message from {selectedUser.name}</div>
                  <div className="p-4 bg-white rounded-lg shadow-md self-end">Your message</div>
                  {/* Add more messages as needed */}
                </div>
              </div>
              <div className="p-4 bg-gray-200 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 p-2 border rounded-lg"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleVideoCall}
                >
                  Video Call
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 bg-gray-100">
              <p className="text-gray-500">Select a user to start chatting</p>
            </div>
          )}
        </div>
      </div>

      {/* Video Call Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Waiting for connection...</h2>
            <div
              className="myCallContainer"
              ref={myMeeting}
              style={{ width: '400px', height: '300px' }}
            ></div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
