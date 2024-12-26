import React, { useEffect, useState } from 'react';
import manalibg from '../images/mounteverest.jpg';
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PkgDetails = () => {
  const { id } = useParams(); // Get the package ID from the URL
  const [packageDetails, setPackageDetails] = useState(null); // State to store package details

  // Fetch package details when component mounts
  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        // Make API call to get package details
        const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}packages/package/${id}`);

        setPackageDetails(response.data);
      } catch (err) {
        console.log((err));
      }
    };

    fetchPackageDetails(); // Call the function to fetch data
  }, [id]); // Dependency array to refetch if `id` changes

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Increased Background Image Height */}
      <div className="relative h-[85vh]">
        <img
          src={manalibg}
          alt="Manali Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Below the Image */}
      <div className="p-10 md:ml-36">
        <h2 className="text-5xl font-bold">Manali Package</h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {/* Left Column: Itinerary Details */}
          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Itinerary</h3>

            <div className="flex items-center mb-4">
              <strong className="text-xl">Day 1:</strong>
              <hr className="flex-grow border-t-2 border-gray-300 ml-4" />
            </div>
            <p className="text-gray-700 mb-4">
              Arrival in Manali. Explore local sights like Mall Road and Hadimba Temple. <br />
              Arrival in Manali. Explore local sights like Mall Road and Hadimba Temple. <br />
              Arrival in Manali. Explore local sights like Mall Road and Hadimba Temple. <br />
            </p>

            <div className="flex items-center mb-4">
              <strong className="text-xl">Day 2:</strong>
              <hr className="flex-grow border-t-2 border-gray-300 ml-4" />
            </div>
            <p className="text-gray-700 mb-4">
              Rohtang Pass excursion and Snow activities. <br />
              Rohtang Pass excursion and Snow activities. <br />
              Rohtang Pass excursion and Snow activities. <br />
            </p>

            <div className="flex items-center mb-4">
              <strong className="text-xl">Day 3:</strong>
              <hr className="flex-grow border-t-2 border-gray-300 ml-4" />
            </div>
            <p className="text-gray-700 mb-4">
              Visit Solang Valley for Paragliding and other adventure activities. <br />
              Visit Solang Valley for Paragliding and other adventure activities. <br />
              Visit Solang Valley for Paragliding and other adventure activities. <br />
            </p>

            <div className="flex items-center mb-4">
              <strong className="text-xl">Day 4:</strong>
              <hr className="flex-grow border-t-2 border-gray-300 ml-4" />
            </div>
            <p className="text-gray-700 mb-4">
              Departure.
            </p>
          </div>

          {/* Right Column: Enquiry Form */}
          <div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Have Questions? contact us.</h3>
            <form className="flex flex-col flex-grow">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default PkgDetails;
