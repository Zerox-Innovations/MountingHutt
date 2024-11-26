import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change at 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="text-white fixed w-full top-0 left-0 z-50 m-0 px-8 flex items-center justify-between transition-all duration-300"
      style={{ height: '85px' }}
    >
      {/* Mobile Logo in Curved Box */}
      <div className="md:hidden flex justify-center items-center rounded-xl bg-blue-950 py-2 px-6">
        <h1
          className="text-xl font-extrabold font-serif cursor-pointer"
          onClick={() => navigate('/')}
        >
          MountingHutt
        </h1>
      </div>

      {/* Desktop Logo (Hidden on Mobile) */}
      <div className="hidden md:block font-bold text-xl flex-1">
        <h1
          className="text-2xl font-extrabold font-serif cursor-pointer pl-10"
          onClick={() => navigate('/')}
        >
          MountingHutt
        </h1>
      </div>

      {/* Hamburger Menu (visible on mobile) */}
      <div className="md:hidden">
        <div className="flex justify-center items-center rounded-xl bg-blue-950 py-2 px-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-white"
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
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between flex-1">
        <div
          className={`flex items-center space-x-6 py-2 px-4 rounded-full transition ${
            isScrolled
              ? 'bg-gray-100 text-black hover:bg-gray-200'
              : 'bg-slate-100 bg-opacity-40 text-white hover:text-black'
          }`}
        >
          {['Home', 'Packages', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              className={`font-semibold hover:text-blue-900 transition`}
              onClick={() => {
                if (item === 'Home') {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth', // Ensures a smooth scrolling animation
                  });
                }
                navigate(`/${item.toLowerCase()}`);
              }}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="flex space-x-4">
          <a
            href="/"
            className={`py-2 px-4 rounded-full transition ${
              isScrolled
                ? 'bg-gray-100 text-black hover:bg-gray-200'
                : 'bg-slate-100 bg-opacity-40 text-white hover:text-black'
            }`}
          >
            Login / Signup
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="absolute top-16 left-0 w-full bg-blue-950 text-white md:hidden z-50">
            <div className="flex flex-col items-center space-y-4 py-4">
            {['Home', 'Packages', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              className={`font-semibold hover:text-blue-900 transition`}
              onClick={() => {
                if (item === 'Home') {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth', // Ensures a smooth scrolling animation
                  });
                }
                navigate(`/${item.toLowerCase()}`);
              }}
            >
              {item}
            </button>
          ))}

              <a
                href="/"
                className="hover:bg-cyan-700 hover:text-black bg-slate-100 bg-opacity-40 text-white py-2 px-4 rounded-full"
              >
                Login / Signup
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
