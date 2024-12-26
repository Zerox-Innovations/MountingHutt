import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { contextState } = useAuth();
  const { authToken } = contextState;
  const navigate = useNavigate()
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DashboardView = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}admins/dashboard`, {
        headers: {
          Authorization: `Bearer ${authToken.access}`,
        },
      });
      setDashboard(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    DashboardView();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          className="relative flex flex-col justify-between p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          style={{ height: '170px' }}
        >
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <h5 className="font-medium text-lg">Total Bookings</h5>
              <h1 className="text-5xl font-extrabold mt-2">
                {dashboard?.total_bookings || 0}
              </h1>
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-between p-6 bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          style={{ height: '170px' }}
          onClick={()=> navigate('adminpackages')}
        >
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <h5 className="font-medium text-lg">Total Packages</h5>
              <h1 className="text-5xl font-extrabold mt-2">
                {dashboard?.total_packages || 0}
              </h1>
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-between p-6 bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          style={{ height: '170px' }}
          onClick={()=> navigate('customers')}
        >
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <h5 className="font-medium text-lg">Total Users</h5>
              <h1 className="text-5xl font-extrabold mt-2">
                {dashboard?.total_users || 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
