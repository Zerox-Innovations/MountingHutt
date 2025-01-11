import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import blue_logo from '../images/blue_logo.png';

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo and About Section */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <img className="w-auto h-16 mr-2" src={blue_logo} alt="MountingHutt Logo" />
              <p className="text-2xl font-semibold text-gray-800">MountingHutt</p>
            </div>

            <p className="mt-4 text-gray-600">
              Mounting Hutt is a serene retreat that celebrates the tranquility and breathtaking beauty of Himachal's majestic landscapes.
            </p>

          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              {['About', 'Packages', 'Services', 'Blogs'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-base text-gray-800 transition-all duration-200 hover:text-blue-600 no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
            <ul className="mt-6 space-y-4">
              {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-base text-gray-800 transition-all duration-200 hover:text-blue-600 no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Newsletter Subscription */}
          <div className="col-span-2 lg:col-span-2">
            <p className='font-semibold'>Social Media</p>
            <div className="flex items-center space-x-4 mt-2 mb-3">
              <a
                href="https://facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition-all duration-200 hover:scale-110"
              >
                <FacebookIcon style={{ fontSize: '28px' }} />
              </a>
              <a
                href="https://www.instagram.com/mountinghutt?igsh=MWdtdzNzdjNnZ3o5Zg=="
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition-all duration-200 hover:scale-110"
              >
                <InstagramIcon style={{ fontSize: '28px' }} />
              </a>
              <a
                href="https://youtube.com"
                title="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 transition-all duration-200 hover:scale-110"
              >
                <YouTubeIcon style={{ fontSize: '28px' }} />
              </a>
            </div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to Newsletter
            </p>
            <form action="#" method="POST" className="mt-3">
              {/* <p className='font-semibold'>Newsletter</p> */}
              <p className='font-semibold'>Stay updated with MountingHutt</p>
              <div className="relative w-full max-w-sm mt-2">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full py-2 px-4 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute top-0 right-0 h-full px-4 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
