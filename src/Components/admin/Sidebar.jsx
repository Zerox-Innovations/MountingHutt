import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useAuth } from '../Context/AuthContext';

const Sidebar = () => {

  const { contextState } = useAuth();
  const { user, logout, authToken } = contextState;
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="flex flex-col h-full">
          {/* Brand / Logo */}
          <div className="flex items-center justify-center h-20 border-b">
            <h4 className="text-xl font-bold text-indigo-600">MountingHutt</h4>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {/* Dashboard Link */}
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 rounded-lg hover:text-white hover:bg-indigo-600 group no-underline"
            >
              <DashboardIcon style={{ color: 'inherit' }} />
              <span>Dashboard</span>
            </a>

            {/* Customers Link */}
            <a
              href="/customers"
              className="flex items-center gap-3 px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 rounded-lg hover:text-white hover:bg-indigo-600 group no-underline"
            >
              <BookmarkBorderIcon style={{ color: 'inherit' }} />
              <span>Bookings</span>
            </a>
            <a
              href="/customers"
              className="flex items-center gap-3 px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 rounded-lg hover:text-white hover:bg-indigo-600 group no-underline"
            >
              <PeopleAltIcon style={{ color: 'inherit' }} />
              <span>Customers</span>
            </a>

            {/* Packages Link */}
            <a
              href="/adminpackages"
              className="flex items-center gap-3 px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 rounded-lg hover:text-white hover:bg-indigo-600 group no-underline"
            >
              <LocalMallIcon style={{ color: 'inherit' }} />
              <span>Packages</span>
            </a>
            <a
              href="/adminpackages"
              className="flex items-center gap-3 px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 rounded-lg hover:text-white hover:bg-indigo-600 group no-underline"
            >
              <LogoutIcon style={{ color: 'inherit' }} />
              <span onClick={handleLogout}>Log Out</span>
            </a>
          </nav>

        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-20 flex items-center justify-between px-4 bg-white border-b">
          <h2 className="text-lg font-medium text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium text-sm rounded-lg shadow-md transition duration-300 ease-in-out">
              Go to Website <LoginIcon className="ml-2" />
            </button>
            {/* Notifications Icon */}
            <button className="p-2 text-gray-600 transition rounded-full hover:bg-gray-100">
              <span className="sr-only">Notifications</span>
              <NotificationsIcon fontSize="large" />
            </button>

            {/* Profile Icon */}
            <Avatar sx={{ bgcolor: "#9CA3AF", color: "white", fontSize: "1.0rem" }}>
              A
            </Avatar>
          </div>
        </header>

        {/* Main Dashboard Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet /> {/* Child routes will be rendered here */}
        </main>
      </div>
    </div>
  )
}

export default Sidebar
