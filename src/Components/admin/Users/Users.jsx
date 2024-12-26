import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { contextState } = useAuth();
  const { authToken } = contextState;
  const [customers, setCustomers] = useState([]);
  console.log(customers, '555555');
  const navigate = useNavigate()

  const UsersList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}admins/users`, {
        headers: {
          Authorization: `Bearer ${authToken.access}`, // Include the token in the headers
        },
      });
      const data = response.data;
      setCustomers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    UsersList();
  }, []);

  const handleRowClick = (userId) => {
    navigate(`/customers/${userId}`); // Navigate to user details page
  };
  

  return (
    <div className="p-2">
      <div className="mb-3 flex justify-between items-center">
        <h4 className="text-3xl font-bold text-gray-800">Customers</h4>
        <TextField
          variant="outlined"
          placeholder="Search customers..."
          size="small"
          className='rounded-lg'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'gray' }} />
              </InputAdornment>
            ),
          }}
          style={{ width: '300px' }} // Adjust width as needed
        />
      </div>

      <div className="w-full max-h-[500px] overflow-y-auto overflow-x-auto">
        {customers && customers.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#4A90E2' }}>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>SL.No</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Email Address</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Gender</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((user, index) => (
                <TableRow
                  key={user.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#F9FAFB' : 'white', // Alternating row colors
                  }}
                  onClick={() => handleRowClick(user.id)} 
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography className="text-gray-600 text-center">No Customers available</Typography>
        )}
      </div>
    </div>
  );
};

export default Users;
