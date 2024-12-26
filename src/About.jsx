import React from 'react';
import blogbg from '../src/Assets/blogIcon.png';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function About() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-16 min-h-screen bg-blue-950 text-white p-8">
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mt-5">
          <h1 className="text-4xl font-bold mb-8">Lorem Ipsum is simply <br /> very dummy</h1>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
              <p className="text-lg mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <p className="text-lg mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={blogbg}
                alt="Illustration"
                className="w-full md:w-3/4 lg:w-5/6 xl:w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300 pt-6 mt-8 grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] text-center md:text-left">
          {/* Safe Locations */}
          <div>
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">📍</span>
              <strong>Safest Locations</strong>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              All the services listed in telegram are hand picked by our team and verified. We guarantee you complete protection for your money and life.
            </p>
            <a href="#" className="text-blue-300 underline text-sm mt-2 block">Check out our team</a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300"></div>

          {/* 24/7 Call Support */}
          <div>
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">📞</span>
              <strong>24/7 on call support</strong>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              We don’t run through a call center or a robot. You could call us any time and anyone from the team will clear your queries.
            </p>
            <p className="text-sm text-blue-300 mt-2">
              Number: +91 98765 43210, +44 20 7946 0958
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300"></div>

          {/* Email Queries */}
          <div>
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">✉️</span>
              <strong>Email your Queries</strong>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Our email team will reply to your any kind of queries and doubts. Email any time and day, we are always happy to help.
            </p>
            <p className="text-sm text-blue-300 mt-2">info@mountinghut.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
