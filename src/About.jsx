import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import about from './images/about.png';

function About() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-16 min-h-screen text-white p-8 justify-center text-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mt-20 px-4">
          <h1 className="text-6xl font-bold mb-16 text-black text-left">
            The secret behind our <br /> success.
          </h1>

          {/* Content Section with Image on the Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Content Section */}
            <div className="text-left md:w-1/2 mb-4 md:mb-0 space-y-6">
              <p className="text-lg leading-relaxed text-gray-500">
                Being passionate travel lovers, we were fascinated by the idea that the biggest luxury in this world is nature. That was when Tentgram was born. From that realization, we started building a travel community that co-exists with nature with the aim of bringing the ineffable beauty of nature to every travel lovers out there.
              </p>
              <p className="text-lg leading-relaxed text-gray-500">
                Tentgram is an outdoor recreational center that provides overnight stays with outdoor experiences at an affordable budget package.
              </p>
              <p className="text-lg leading-relaxed text-gray-500">
                We think Tentgram is an ideal weekend getaway choice for you because we offer outdoor experiences that give you so much essence of that place by including the best activity at the location that takes you through the heart and soul of the place, which we believe is the best souvenir you can get in any journey.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center md:w-1/2">
              <img
                src={about}
                alt="Illustration"
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>

          </div>
        </div>

        {/* Footer Section */}
        {/* <div className="border-t border-gray-300 pt-12 mt-20 grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] text-center md:text-left"> */}
          {/* Safe Locations */}
          {/* <div>
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">📍</span>
              <strong>Safest Locations</strong>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              All the services listed in telegram are handpicked by our team and verified. We guarantee you complete protection for your money and life.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300"></div>

          {/* 24/7 Call Support */}
          {/* <div>
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
          </div> */}

          {/* Divider */}
          {/* <div className="hidden md:block w-px bg-gray-300"></div> */}

          {/* Email Queries */}
          {/* <div>
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">✉️</span>
              <strong>Email your Queries</strong>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Our email team will reply to your any kind of queries and doubts. Email any time and day, we are always happy to help.
            </p>
            <p className="text-sm text-blue-300 mt-2">info@mountinghut.com</p>
          </div> */} 
        {/* </div> */}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
