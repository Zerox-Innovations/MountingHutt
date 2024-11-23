import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>

      <div className="min-h-screen flex flex-col">
        {/* Blue Background Section */}
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white flex flex-col justify-center items-center py-16 h-80 rounded-b-3xl">
          <h2 className="text-3xl font-serif font-semibold">Contact Us</h2>
          <p className="text-lg mt-2">For any queries, please do contact our team</p>
        </div>

        {/* White Background Section */}
        <div className="bg-white flex-grow pt-32">
          <div className="container mx-auto px-6 lg:px-20 relative">
            {/* Contact Box */}
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 max-w-2xl mx-auto -mt-48">
              
              {/* Contact Information */}
              <div className="lg:w-1/2 text-sm">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="font-semibold">Mouting Hutt Pvt Ltd</p>
                <p className="mt-2 text-gray-600">
                  789 Willowbrook Lane, Suite 12B, Silver Pines Business District,
                  Rivertown Heights, States of America
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-1">For General queries</h4>
                  <p className="text-blue-600 hover:underline">info@moutinghutt.com</p>
                  <p className="mt-1 text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+44 20 7946 0958</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-1">For Trip related queries</h4>
                  <p className="text-gray-600">+61 3 9123 4567</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-1/2">
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <form className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <textarea
                    placeholder="Your message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-24 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-blue-800 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
