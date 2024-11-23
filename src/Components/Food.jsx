import React from 'react';
import BF1 from '../Assets/BF1.webp';
import Bf2 from '../Assets/Bf2.webp';
import Bf3 from '../Assets/Bf3.webp';
import Lunch1 from '../Assets/Lunch1.webp';
import Lunch2 from '../Assets/Lunch2.jpg';
import Dnr1 from '../Assets/Dnr1.webp';
import Dnr2 from '../Assets/Dnr2.webp';
import Navbar from './Navbar';
import Footer from './Footer';

const meals = {
  breakfast: [
    { name: 'Mooli Paratha', image: BF1 },
    { name: 'Aloo Paratha', image: Bf2 },
    { name: 'Paneer Basachilla', image: Bf3 },
  ],
  lunch: [
    { name: 'Aloo Matar with Rice', image: Lunch1 },
    { name: 'Dal and Rice', image: Lunch2 },
    { name: 'Buttered Corn Rice', image: Lunch1 },
    { name: 'Lorem Ipsum', image: Lunch2 },
  ],
  dinner: [
    { name: 'Cauliflower Sabji with Roti', image: Dnr1 },
    { name: 'Baigan ka Bharta', image: Dnr2 },
    { name: 'Lorem Ipsum', image: Dnr1 },
    { name: 'Lorem Ipsum', image: Dnr2 },
    { name: 'Lorem Ipsum', image: Dnr1 },
  ],
};

const MealSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-1">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-black">
          <img src={item.image} alt={item.name} className="w-full h-28 object-cover" />
          <p className="p-2 text-center font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Food = () => {
  return (

    <div>
       <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>
    <div className="pt-20 bg-gradient-to-b from-blue-700 to-blue-950 text-white py-16">
        
      <h2 className="text-3xl font-serif font-semibold text-center mb-10">
        From Dawn to Dusk: Breakfast, Lunch, and Dinner Delights
      </h2>
      
      <div className="max-w-5xl mx-auto px-4">
        <MealSection title="Breakfast" items={meals.breakfast} />
        <MealSection title="Lunch" items={meals.lunch} />
        <MealSection title="Dinner" items={meals.dinner} />
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
};

export default Food;
