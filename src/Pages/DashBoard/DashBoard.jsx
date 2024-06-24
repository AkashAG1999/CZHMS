import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/user/getUserData',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      if (res.data.success) {
        setUserData(res.data.data);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      setError('Error fetching user data');
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Welcome Message */}
        <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-2">
            Welcome, {userData.name}
          </h1>
          <p className="text-gray-600">Here’s a quick overview of your account:</p>
        </div>

        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Role:</strong> {userData.isAdmin ? 'Admin' : 'User'}</p>
          </div>

          {/* Recent Activities */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Logged in</li>
              <li>Viewed dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
