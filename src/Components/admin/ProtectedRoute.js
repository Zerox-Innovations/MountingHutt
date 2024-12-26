// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element }) => {
//   // Get the auth token or check if the user is logged in
//   const authToken = JSON.parse(localStorage.getItem('authToken')); 
//   console.log(authToken,'555555555');
  
//   const role = authToken ? authToken.role : null; // Assuming the role is saved in the token

//   // If the user is not logged in or not an admin, redirect to login page
//   if (!authToken || role !== 'admin') {
//     return <Navigate to="/login" replace />;
//   }

//   // If the user is authorized, render the requested element
//   return element;
// };

// export default ProtectedRoute;
