import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
import axios from 'axios';
import manali from '../images/ManaliPackage.png';

const Package = () => {

  const { contextState } = useAuth();
  const { authToken } = contextState;
  const [packages, setPackages] = useState([]);
  console.log(packages, '66666+');
  console.log(authToken, '66666+');
  const navigate = useNavigate()


  const PackageLists = async () => {
    try {
      // Fetch packages from the API
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}package/packages/`, {
        headers: {
          Authorization: `Bearer ${authToken.access}`,
        },
      });
      setPackages(response.data); // Assuming API response contains the list of packages
    } catch (err) {
      console.error(err.message);

    }
  };

  useEffect(() => {
    console.log('useEffect running');
    PackageLists();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            onClick={() => navigate(`/package/${pkg.id}`)}
          >
            <img
              src={manali} // Adjust based on your API response
              alt={pkg.name}
              className="h-96 w-full object-cover"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;

