import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';


const Packages = () => {

  const { contextState } = useAuth();
  const { authToken } = contextState;
  const [packages, setPackages] = useState([]);
  console.log(packages, '66666+');
  const navigate = useNavigate()


  const PackageList = async () => {
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
    PackageList();
  }, []);


  return (
    <>
      <div>
        <div className='p-2 flex justify-between'>
          <div>
            <h4 className='text-3xl font-bold'>Packages</h4>
          </div>
          <div>
            <button className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium text-sm rounded-lg shadow-md transition duration-300 ease-in-out"
            onClick={()=> navigate('/adminpackages/new')}>
              Add Package
            </button>
          </div>
        </div>
        <div className="w-full max-h-[500px] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (

              <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/14161885/pexels-photo-14161885.png?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                  alt="Package 1"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-2 left-0 w-full bg-opacity-50 py-2 px-4">
                  <h3 className="text-white font-bold text-2xl">{pkg.title}</h3>
                </div>
              </div>
            ))}

            {/* Card 2
            <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/28845064/pexels-photo-28845064/free-photo-of-scenic-view-of-spiti-valley-s-majestic-mountains.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Package 2"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-0 w-full bg-opacity-50 py-2 px-4">
                <h3 className="text-white font-bold text-2xl">Shimla Package</h3>
              </div>
            </div>

            <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1130717/pexels-photo-1130717.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Package 3"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-0 w-full bg-opacity-50 py-2 px-4">
                <h3 className="text-white font-bold text-2xl">kasol</h3>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Packages