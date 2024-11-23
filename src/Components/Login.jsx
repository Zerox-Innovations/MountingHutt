import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../Assets/Login-bg.png';

const Login = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <img
        src={bgImage}
        alt="Login Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden relative z-10">
        {/* Left Side - Hidden on mobile (<768px) */}
        <div className="hidden md:flex md:flex-1">
          <div className="w-96 h-full bg-gradient-to-b from-blue-950 to-blue-700 flex flex-col p-8 md:p-10">
            <div className="text-left">
              <h2 className="text-white font-sans font-bold text-3xl mb-4 mt-5">
                Login
              </h2>
              <p className="font-sans font-semibold text-white text-base">
                Are you planning a quick getaway? <br />Then you are at the right door
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Full width on mobile */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-center px-4 sm:px-3 lg:px-4 mt-5 mb-5">
          {/* Mobile-only header */}
          <div className="block md:hidden w-full max-w-sm mx-auto mb-6">
            <div className="text-left">
              <h2 className="text-blue-950 font-sans font-bold text-3xl sm:text-3xl mt-5 mb-2">
                Login
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base">
                Are you planning a quick getaway? Then you are at the right door
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto">
            {/* Email Input */}
            <div className="mb-6 mt-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 text-sm sm:text-base leading-tight focus:outline-none focus:border-blue-700"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 text-sm sm:text-base leading-tight focus:outline-none focus:border-blue-700"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-sm sm:text-base"
                type="submit"
              >
                Login
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <h6 className="text-gray-600 text-sm">
                Forgot Password?{' '}
                <span className="text-blue-950 cursor-pointer hover:text-blue-700 font-medium">
                  Click here
                </span>
              </h6>
            </div>

            {/* Sign Up Section */}
            <div className="text-center mt-4">
              <h6 className="text-gray-600 text-sm">
                Don't have an account yet?
              </h6>
              <h6 className="text-blue-950 cursor-pointer hover:text-blue-700 font-medium text-sm">
                <Link to="/">Sign Up</Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;