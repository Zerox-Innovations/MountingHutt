import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext(null);

export const AuthProvider = ({ children}) => {
  
  // const [authToken,setAuthToken] = useState(()=>localStorage.getItem('authToken')?JSON.parse(localStorage.getItem('authToken')):null)
  // const [user,setUser] = useState(()=>localStorage.getItem('authToken')?jwtDecode(localStorage.getItem('authToken')):null)
  
  // Initialize authToken from localStorage, defaulting to null
  const [packages, setPackages] = useState([]);
   const [authToken, setAuthToken] = useState(() => {
    const token = localStorage.getItem('authToken');
    return token ? JSON.parse(token) : null;
  });

  // Decode user information if authToken exists, otherwise null
  const [user, setUser] = useState(() => {
    try {
      const token = localStorage.getItem('authToken');
      return token ? jwtDecode(token) : null;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  });

  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const updateFormData = (data) => {
    setFormData((prevData) => {
      const newData = { ...prevData, ...data };
      console.log('Updated formData in context:', newData); // Ensure context is being updated
      return newData;
    });
  };
  
  
              

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };


  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}package/packages/`, {
        headers: {
          Authorization: `Bearer ${authToken.access}`,
        },
      });
      setPackages(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  
  const contextState = {
    authToken:authToken,
    setUser:setUser,
    setAuthToken:setAuthToken,
    user:user,
    logout:logout,
    fetchPackages:fetchPackages,
    packages:packages,
    formData:formData,
    updateFormData:updateFormData
  };

    return (
      <AuthContext.Provider value={{ contextState }}>
        {children}
      </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);


