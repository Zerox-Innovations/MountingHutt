import React, { useState } from 'react';
import bgImage from '../Assets/Login-bg.png';
import TourismSection from './Tourism';
import TourPackagesSection from './TourPackagesSection';
import Testimonial from './Testimonial';
import Blog from './BlogCard';
import Navbar from './Navbar';
import Footer from './Footer';
import Experience from './Experience';


const Home = () => {



  return (
    <div>
      <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Extraordinary natural and cultural charm
          </h1>
          <p className="text-lg lg:text-xl text-white mb-8">
            Exploring Indonesia is an unforgettable adventure.
          </p>
          <button className="bg-slate-50 bg-opacity-75 text-black font-bold font-serif py-3 px-8 rounded-xl hover:bg-gray-200 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
      <TourismSection />
      {/* <Experience/> */}
      <TourPackagesSection />
      <Testimonial />
      <Blog />
      <Footer />
    </div>

  );
};

export default Home;
