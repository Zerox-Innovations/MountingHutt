import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import blue_logo from '../images/blue_logo.png'
import { useAuth } from './Context/AuthContext';
import { Avatar } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { contextState } = useAuth();
  const { user } = contextState;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAvatarClick = () => {
    navigate('/profile');
  };

  // Check if the current path is "/about"
  const isAboutPage = location.pathname === '/about';
  // Check if it's the homepage ("/")
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 px-8 flex items-center justify-between transition-all duration-300 ${
        isScrolled || isAboutPage ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
      }`}
      style={{ height: '85px' }}
    >

      {/* Logo */}
      <div className="font-bold text-xl flex items-center ml-6">
        <img
          src={blue_logo}
          alt="Logo"
          className="w-20 h-20"
          // style={{
          //   filter: isScrolled
          //     ? 'invert(1) sepia(1) saturate(200%) hue-rotate(180deg)'
          //     : 'none',
          //   transition: 'filter 0.3s ease-in-out',
          // }}
        />
        <h1
          className="text-3xl cursor-pointer"
          onClick={() => navigate('/')}
        >
          MountingHutt
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <button
            className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-500 transition`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-500 transition`}
            onClick={() => navigate('/packages')}
          >
            Packages
          </button>
        </li>
        <li>
          <button
            className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-500 transition`}
            onClick={() => navigate('/services')}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-500 transition`}
            onClick={() => navigate('/blog')}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-500 transition`}
            onClick={() => navigate('/about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-500 transition`}
            onClick={() => navigate('/contact')}
          >
            Contact
          </button>
        </li>
        <li>
          {user?.user_id ? (
            <Avatar
              style={{ cursor: 'pointer', backgroundColor: '#007BFF' }}
              onClick={handleAvatarClick}
            >
              {user.user_id}
            </Avatar>
          ) : (
            <a
              href="/login"
              className={`py-2 px-4 rounded-full transition ${isScrolled
                  ? 'bg-gray-100 text-black hover:bg-gray-200'
                  : 'bg-slate-100 bg-opacity-40 text-white hover:bg-cyan-700 hover:text-black'
                }`}
            >
              Login / Signup
            </a>
          )}
        </li>
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-blue-700 text-white md:hidden z-50 transition-all">
          <ul className="flex flex-col items-center space-y-4 py-6 mt-2 ">
            <li>
              <button
                className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-300 transition`}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/');
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-300 transition`}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/packages');
                }}
              >
                Packages
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-300 transition`}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/services');
                }}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-300 transition`}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/blog');
                }}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-300 transition`}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/about');
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${isHomePage ? 'text-white' : 'text-black'} hover:text-blue-300 transition`}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/contact');
                }}
              >
                Contact
              </button>
            </li>
            <li>
              {user?.user_id ? (
                <Avatar
                  style={{ cursor: 'pointer', backgroundColor: '#007BFF' }}
                  onClick={handleAvatarClick}
                >
                  {user.user_id}
                </Avatar>
              ) : (
                <a
                  href="/login"
                  className="hover:bg-cyan-700 hover:text-black bg-slate-100 bg-opacity-40 text-white py-2 px-4 rounded-full"
                >
                  Login / Signup
                </a>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
