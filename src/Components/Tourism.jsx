import React from 'react';
import Location from './Location';  // Import the Location component
import img1 from '../Assets/dalhousie.png';
import img2 from '../Assets/shimla.png';
import img3 from '../Assets/Chail.png';
import img4 from '../Assets/Manali.png';

const locations = [
  {
    name: 'Dalhousie',
    description: 'Town in Himachal Pradesh',
    image: img1,
  },
  {
    name: 'Shimla',
    description: 'Shri Hanuman Temple',
    image: img2,
  },
  {
    name: 'Chail',
    description: 'Kali Tibba Temple',
    image: img3,
  },
  {
    name: 'Manali',
    description: 'Town in Himachal Pradesh',
    image: img4,
  },
];

const TourismSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 py-12 px-6 lg:px-20">
      {/* Section Header */}
      <div className="mb-10 text-white">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-300">Best location</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">Himachal Tourism</h1>
          <p className="text-gray-300 text-lg lg:text-xl">
            Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people.
          </p>
        </div>
      </div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {locations.map((location, index) => (
          <Location
            key={index}
            name={location.name}
            description={location.description}
            image={location.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TourismSection;
