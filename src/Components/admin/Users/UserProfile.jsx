import React, { useState } from 'react';
import Navbar from '../../Navbar';
import { Box, Tabs, Tab, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import UserProfileCrud from './UserProfileCrud';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BookingHistory from './BookingHistory';
import Footer from '../../Footer';
import { useTheme } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const UserProfile = () => {
  const [value, setValue] = useState(0); // Track the selected tab
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md')); // Check for medium screen or smaller

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the tab when selected
  };

  const { contextState } = useAuth();
  const navigate = useNavigate();
  const { logout } = contextState;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <div style={{ minHeight: '50vh', backgroundColor: 'gray' }}>
        <Navbar />
        <div
          style={{
            minHeight: 'calc(50vh)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1 className="text-white">My Account</h1>
        </div>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: isMediumOrSmaller ? 'column' : 'row', // Change direction based on screen size
          height: 'auto',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <Tabs
          orientation={isMediumOrSmaller ? 'horizontal' : 'vertical'} // Switch orientation
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Responsive tabs"
          sx={{
            borderRight: isMediumOrSmaller ? 0 : 1,
            borderBottom: isMediumOrSmaller ? 1 : 0,
            borderColor: 'divider',
            width: isMediumOrSmaller ? '100%' : 'auto', // Full width for horizontal tabs
          }}
        >
          <Tab label="My Profile" {...a11yProps(0)} />
          <Tab label="Booking History" {...a11yProps(1)} />
          <Tab label="Logout" {...a11yProps(2)} />
        </Tabs>

        <Box sx={{ width: '100%', paddingLeft: isMediumOrSmaller ? 0 : 3 }}>
          <TabPanel value={value} index={0}>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 rounded-lg max-w-7xl overflow-auto h-full">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">My Profile</h3>
              <UserProfileCrud />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg max-w-7xl overflow-auto h-full">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Booking History</h3>
              <BookingHistory />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={handleLogout}
            >
              Log out
            </button>
          </TabPanel>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default UserProfile;
