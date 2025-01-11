import React, { useEffect, useState } from 'react';
import manalibg from '../images/mounteverest.jpg';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from './Context/AuthContext';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const PkgDetails = () => {
  const { id } = useParams(); // Get the package ID from the URL
  const { contextState } = useAuth();
  const { authToken } = contextState;

  const [packageDetails, setPackageDetails] = useState(null); // State to store package details
  const navigate = useNavigate();

  // Fetch package details when component mounts
  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_SERVER}package/packages/${id}`,
          {
            headers: {
              Authorization: `Bearer ${authToken.access}`,
            },
          }
        );
        setPackageDetails(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPackageDetails(); // Call the function to fetch data
  }, [id]);

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {packageDetails ? (
        <>
          {/* Background Section */}
          <div className="relative h-[85vh]">
            <img
              src={manalibg} // Using the dynamic banner image URL
              alt="Manali Background"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Price Card */}
            <div className="absolute bottom-10 right-10 bg-white p-6 rounded-lg shadow-lg w-60">
              <h3 className="text-5xl text-center font-bold text-gray-800">
                ₹{packageDetails.price}
              </h3>
              <button
                className="mt-2 w-full bg-blue-950 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                onClick={() => navigate(`/booking/${id}`)}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-10 md:ml-36 mb-2">
            <h2 className="text-5xl font-bold">{packageDetails.title}</h2>
            <div className="flex space-x-4 mt-5">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none capitalize">
                <CallIcon /> Call us
              </button>
              <button className="px-3 py-1 bg-green-500 text-white rounded-xl focus:outline-none">
                <WhatsAppIcon /> Say HI
              </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
              {/* Left Column */}
              <div className="md:col-span-2 flex flex-col">
                {/* Package Description */}
                <div className="mb-6">
                  <p className="text-gray-700">{packageDetails.description}</p>
                </div>

                {/* Itinerary */}
                <h3 className="text-2xl font-semibold mb-4">Itinerary</h3>
                {packageDetails.day_details &&
                  packageDetails.day_details.map((day, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-4">
                        <strong className="text-xl">Day {index + 1}:</strong>
                        <hr className="flex-grow border-t-2 border-gray-300 ml-4" />
                      </div>
                      <p className="text-gray-700 mb-4">{day.description}</p>
                    </div>
                  ))}
              </div>

              {/* Right Column */}
              <div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
                  <h3 className="text-2xl font-semibold mb-4">
                    Have Questions? Contact us.
                  </h3>
                  <form className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
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
        </>
      ) : (
        <div className="p-10">Loading...</div>
      )}
      <Footer />
    </div>
  );
};

export default PkgDetails;
