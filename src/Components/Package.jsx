import React from 'react';

const TourPackage = ({ imageUrl, days, price, title }) => {
  return (
    <div className="relative overflow-hidden w-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out bg-white">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-96 object-cover rounded-t-lg" />
      
      {/* Days Label */}
      <div className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-2 py-1 rounded">
        {days}
      </div>
      
      {/* Rating Label */}
      <div className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded flex items-center">
        <span>4.9</span>
        <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 6.82 21l1.18-6.86-5-4.87 6.91-1.01L12 2z" />
        </svg>
      </div>
      {/* Transparent Box */}
      <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-75 text-white p-3 rounded-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-lg font-bold">${price}</p>
      </div>
    </div>
  );
};

export default TourPackage;

