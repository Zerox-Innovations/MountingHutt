import React from 'react';
import TourPackage from '../Components/Package';
import groupTrip from '../Assets/group-tour.jpeg';
import javaTrip from '../Assets/java-tour.jpg';
import soloTrip from '../Assets/solo-trip.webp';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    imageUrl: groupTrip,
    days: '7 Days',
    price: '285',
    title: 'Bali Tour Package',
    dateRange: '23 August - 29 August',
  },
  {
    imageUrl: javaTrip,
    days: '5 Days',
    price: '218',
    title: 'Java Tour Package',
    dateRange: '23 August - 27 August',
  },
  {
    imageUrl: soloTrip,
    days: '3 Days',
    price: '163',
    title: 'Solo Tour Package',
    dateRange: '23 August - 25 August',
  },
  {
    imageUrl: soloTrip,
    days: '7 Days',
    price: '180',
    title: 'Manali Package',
    dateRange: '23 August - 25 August',
  },
];

const TourPackagesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-16 px-6 lg:px-20">
      {/* Section Header */}
      <div className="mb-12 text-white">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-300 uppercase tracking-wider">
          Tour Packages
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Tourist Packages
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl max-w-lg">
            Explore breathtaking destinations with our curated packages that offer the perfect mix of comfort and adventure.
          </p>
        </div>
      </div>

      {/* Tour Package Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((tour, index) => (
          <div
            className="transform hover:scale-105 transition-transform duration-300"
            key={index}
          >
            <TourPackage
              imageUrl={tour.imageUrl}
              days={tour.days}
              price={tour.price}
              title={tour.title}
              dateRange={tour.dateRange}
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate('/packages')}
          className="bg-blue-600 text-white font-semibold py-3 px-10 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400">
          View More Packages
        </button>
      </div>
    </div>
  );
};

export default TourPackagesSection;
