import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const UserProfileCrud = () => {
  const [getView, setGetView] = useState([]);
  const { contextState } = useAuth();
  const { authToken } = contextState;
  console.log("getView", getView);


  // Separate refs for each input field
  const nameRef = useRef();
  const phoneRef = useRef();
  const genderRef = useRef();

  const fetchUserData = async (e) => {
    e?.preventDefault(); // Prevent default if event exists

    const genderValue = genderRef.current?.value;

    // If gender is empty, don't send it in the request
    const data = {
      name: nameRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      gender: genderValue !== "" ? genderValue : undefined,  // Only send if a valid gender is selected
    };

    try {
      const response = await axios({
        url: `${process.env.REACT_APP_URL_SERVER}accounts/profile/`,
        method: !e ? 'GET' : 'PUT',
        headers: {
          Authorization: `Bearer ${authToken.access}`,
        },
        data: !e ? null : data, // Send the data only for PUT request
      });

      const responseData = response.data;
      if (response.status === 200 && !e) {
        setGetView([responseData]);
      } else if (response.status === 200) {
        toast.success('Updated successfully');
      }
    } catch (err) {
      console.log(err.message || 'An error occurred');
    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(e); // This will trigger the PUT request with updated data
  };

  return (
    <>
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
      onSubmit={handleSubmit}
    >
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Full Name
        </label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Enter your full name"
          defaultValue={getView[0]?.name || ''}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={getView[0]?.email || ''}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled
        />
      </div>
  
      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Phone Number
        </label>
        <input
          ref={phoneRef}
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          defaultValue={getView[0]?.phone || ''}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Gender
        </label>
        <select
          ref={genderRef}
          name="gender"
          value={getView[0]?.gender || ''}
          onChange={(e) => console.log(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
  
      {/* Submit Button */}
      <div className="col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto p-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Update Profile
        </button>
      </div>
    </form>
  </>
  
  );
};

export default UserProfileCrud;
