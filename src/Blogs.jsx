import React from 'react';
import blog1 from '../src/Assets/blog1.png';
import blog2 from '../src/Assets/blog2.png';
import blogIcon from '../src/Assets/blogIcon.png';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Blogs = () => {
  const stories = [
    {
      image: blog1,
      title: 'Discover the serenity of the Himalayas.',
      description: 'Explore the serene landscapes and hidden hiking trails of Himachal Pradesh...',
    },
    {
      image: blog2,
      title: 'Experience Nature at its Best.',
      description: 'Reconnect with nature by staying at our eco-friendly cottages amidst lush greenery...',
    },
    {
      image: blog1,
      title: 'Your Perfect Mountain Escape.',
      description: 'Immerse yourself in the tranquility of the mountains with our handcrafted experiences...',
    },
    {
      image: blog2,
      title: 'Hiking Adventures Await.',
      description: 'Discover the thrill of adventure with our guided hiking tours across the scenic Himalayas...',
    },
    {
      image: blog1,
      title: 'A Getaway Like No Other.',
      description: 'Relax and rejuvenate in our picturesque cottages designed for your comfort...',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="bg-gradient-to-b from-blue-700 to-blue-950 p-6 sm:p-10 flex justify-center pt-20 md:pt-24">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 md:mb-0">
              Read all <br /> the Mounting Hutt <br /> stories here
            </h2>
            <img
              src={blogIcon}
              alt="Blog Icon"
              className="w-64 sm:w-80 h-auto object-cover"
            />
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {stories.map((story, index) => (
              <div
                key={index}
                className="max-w-xs mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={story.image}
                  alt="Story"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    {story.description}
                  </p>
                  <button className="bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800 transition duration-200">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
