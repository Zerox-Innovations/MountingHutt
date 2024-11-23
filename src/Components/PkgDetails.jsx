import React from 'react';
import pkg1 from '../Assets/pkg1.png';
import pkg2 from '../Assets/pkg2.png';
import pkg3 from '../Assets/pkg3.png';
import pkg4 from '../Assets/pkg4.png';
import pkg5 from '../Assets/pkg5.png';
import Navbar from './Navbar';
import Footer from './Footer';

const PkgDetails = () => {
  const packages = [
    {
      image: pkg1,
      title: 'Lorem Ipsum is simply',
      duration: '3 days/2 nights',
      rating: 4.5,
      price: '₹4999/-',
    },
    {
      image: pkg2,
      title: 'Lorem Ipsum is simply',
      duration: '3 days/2 nights',
      rating: 4.5,
      price: '₹6999/-',
    },
    {
      image: pkg3,
      title: 'Lorem Ipsum is simply',
      duration: '3 days/2 nights',
      rating: 4.5,
      price: '₹8999/-',
    },
    {
      image: pkg4,
      title: 'Lorem Ipsum is simply',
      duration: '3 days/2 nights',
      rating: 4.5,
      price: '₹5999/-',
    },
    {
      image: pkg5,
      title: 'Lorem Ipsum is simply',
      duration: '3 days/2 nights',
      rating: 4.5,
      price: '₹7999/-',
    },
  ];

  return (
    <div>
      <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white py-16">
        <h2 className="text-4xl font-serif font-semibold text-center mb-4">Tour Packages</h2>
        <p className="text-center text-lg mb-12">
          Trip packages combine lodging, activities, and transport for an easy, all-in-one travel experience.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {packages.map((pkg, index) => (
            <div key={index} className="w-full sm:w-72 md:w-80 bg-gray-100 text-black rounded-lg shadow-lg overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <h3 className="text-lg font-bold">{pkg.title}</h3>
                <p className="text-sm text-gray-600">{pkg.duration}</p>
                <div className="flex items-center my-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-2 text-sm font-semibold">{pkg.rating} stars</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Indulge in the beauty of Himachal Pradesh
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                  Day 1:
                  <li>Pickup and breakfast</li>
                  <li>Hallan Village Visit</li>
                  <li>Lunch</li>
                  <li>Day Hike in Jungle</li>
                  <li>Evening Tea and Sunset</li>
                  <li>Bonfire with music</li>
                  Day 2:
                  <li>Breakfast</li>
                  <li>River Trek</li>
                  <li>Naggar Castle Visit</li>
                  <li>Bonfire with music at Jumanji Homestay</li>
                  <li>Dinner</li>
                  Day 3:
                  <li>Breakfast</li>
                  <li>Mall Road</li>
                  <li>Hadimba Temple Visit</li>
                  <li>Traditional Himachali Dress Photography</li>
                  <li>Vashisht Hot Springs, Solang Valley</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">From: {pkg.price}</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-200">
                    CALL NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PkgDetails;
