import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const UserDetail = () => {
  const { user_id } = useParams(); // Get user_id from URL params
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { contextState } = useAuth();
  const { authToken } = contextState;

  const UserDetailView = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}admins/users/${user_id}/`,{
        headers: {
          Authorization: `Bearer ${authToken.access}`, // Include the token in the headers
        },
      });
      setUserDetail(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch user details.');
      setLoading(false);
    }
  };

  useEffect(() => {
    UserDetailView();
  }, [user_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      {userDetail && (
        <div className="p-4 border rounded-lg bg-gray-100">
          <p><strong>Name:</strong> {userDetail.name}</p>
          <p><strong>Email:</strong> {userDetail.email}</p>
          <p><strong>Phone:</strong> {userDetail.phone}</p>
          <p><strong>Gender:</strong> {userDetail.gender}</p>
          {/* Add more fields as per your API response */}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
