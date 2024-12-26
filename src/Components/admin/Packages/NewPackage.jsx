import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom'; // for navigation
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';

const NewPackage = () => {
  const navigate = useNavigate();
  const { contextState } = useAuth()
  const { authToken } = contextState;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    nights: 0,
    days: 0,
    price: 0,
    day_details: [{ dayNumber: 1, dayDescription: '' }]
  });

  // Handle changes to package details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle changes to day details
  const handleDayDetailChange = (index, e) => {
    const { name, value } = e.target;
    const newDayDetails = [...formData.day_details];
    newDayDetails[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      day_details: newDayDetails
    }));
  };

  // Add a new day detail input
  const addDayDetail = () => {
    setFormData((prevData) => ({
      ...prevData,
      day_details: [...prevData.day_details, { dayNumber: prevData.day_details.length + 1, dayDescription: '' }]
    }));
  };

  // Remove a day detail input
  const removeDayDetail = (index) => {
    const newDayDetails = formData.day_details.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      day_details: newDayDetails
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_SERVER}package/packages`, // Ensure the trailing slash
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken.access}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Package created successfully:', response.data);
    } catch (error) {
      console.error('Error creating package:', error.response?.data || error.message);
    }
  };
  


  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      {/* Back Button */}
      <div className='flex gap-4'>
        <div>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Create New Package</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Column - Package Title, Description, Nights, Days, Price */}
          <div className="space-y-4">
            {/* Package Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Package Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Package Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Package Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Nights */}
            <div>
              <label htmlFor="nights" className="block text-sm font-medium text-gray-700">
                Number of Nights
              </label>
              <input
                type="number"
                id="nights"
                name="nights"
                value={formData.nights}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Days */}
            <div>
              <label htmlFor="days" className="block text-sm font-medium text-gray-700">
                Number of Days
              </label>
              <input
                type="number"
                id="days"
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Right Column - Day Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Day Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {formData.day_details.map((day, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  {/* Day Number */}
                  <input
                    type="number"
                    name="dayNumber"
                    value={day.dayNumber}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  {/* Day Description */}
                  <textarea
                    name="dayDescription"
                    value={day.dayDescription}
                    onChange={(e) => handleDayDetailChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder={`Description for day ${day.dayNumber}`}
                    required
                  />
                  {/* Remove Day Detail Button */}
                  <button
                    type="button"
                    onClick={() => removeDayDetail(index)}
                    className="p-2 bg-red-600 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addDayDetail}
              className="mt-2 p-2 bg-blue-600 text-white rounded-md"
            >
              Add Day Detail
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-semibold rounded-md"
          >
            Submit Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPackage;
