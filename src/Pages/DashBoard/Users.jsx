import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';

const Users = () => {


    const getUserData = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/v1/user/getUserData', {}, {
                headers: {
                    Authorization: "Bearer" + localStorage.getItem("token"),
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUserData()
    }, [])


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

    return (
        <Layout>
            <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
                <h2 className="text-2xl font-semibold mb-4">Users</h2>
                {loading ? (
                    <p className="text-blue-500">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {users.map(user => (
                            <div key={user._id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
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
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Users;
