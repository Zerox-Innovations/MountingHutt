import React from 'react';



const Location = ({ name, description, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Location;
