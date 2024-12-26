import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../Assets/Login-bg.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const Signup = () => {

  const navigate = useNavigate();
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForms({
      ...forms,
      [name]: value,
    })
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Send signup request
      const response = await axios.post(
        `${process.env.REACT_APP_URL_SERVER}accounts/register/`,
        forms,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);

      // Extract token (if provided in response)
      const { token } = response.data;

      // Store token in localStorage if available
      if (token) {
        localStorage.setItem("authToken", JSON.stringify(token));
        toast.success("Signup Successful");
        console.log("kkkkkkkkkk");
        
        navigate('/home'); // Redirect to home
      } else {
        toast.error("Signup Successful but no token returned");
      }
    } catch (error) {
      console.error(error.response || error);
      toast.error("Signup Failed: " + (error.response?.data?.detail || error.message));
    }
  };



  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Signup Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Signup Container */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row-reverse bg-white shadow-lg rounded-lg overflow-hidden relative z-10">
        {/* Right Side - Blue Section */}
        <div className="hidden md:flex md:w-1/3 bg-gradient-to-b from-blue-950 to-blue-700 p-8 md:p-10 text-white">
          <h2 className="font-bold text-3xl mb-4">Signup</h2>
          <p className="text-base">
            Are you planning a quick getaway? Then you are at the right door.
          </p>
        </div>

        {/* Left Side - Form Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-6 sm:p-8">
          {/* Mobile Header */}
          <div className="block md:hidden w-full mb-6">
            <h2 className="text-blue-950 font-bold text-3xl mb-2">Signup</h2>
            <p className="text-gray-600 text-base">
              Are you planning a quick getaway? Then you are at the right door.
            </p>
          </div>

          <form
            onSubmit={handleSignup}
            className="w-full max-w-md space-y-4"
          >
            {/* Full Name */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                name="name"
                value={forms.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:border-blue-700"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                value={forms.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:border-blue-700"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                name="phone"
                value={forms.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:border-blue-700"
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                value={forms.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:border-blue-700"
              />
            </div>

            {/* Signup Button */}
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Sign Up
              </button>
              <p className="text-gray-600 text-sm mt-4">
                Already have an account?{' '}
                <span
                  className="text-blue-950 hover:text-blue-700 cursor-pointer font-medium"
                  onClick={() => navigate('/login')}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
