import React from 'react';
import activity1 from '../Assets/activity1.jpg';
import activity2 from '../Assets/activity2.jpg';
import activity3 from '../Assets/activity3.jpeg';

const ThingsToDo = () => {
  const activities = [
    { id: 1, image: activity1, title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, image: activity2, title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 3, image: activity3, title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, image: activity1, title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 5, image: activity2, title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 6, image: activity3, title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-blue-950 px-4 py-12">
      {/* Section Header aligned to the left */}
      <div className="w-full max-w-7xl mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-left mb-10">
        <span className="inline-block underline decoration-4"> Thing </span>s To Do
        </h2>
        <p className="text-white text-3xl font-semibold mt-2 text-left">Explore a variety of activities to make the most of your stay:</p>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {activities.map(activity => (
          <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={activity.image}
              alt={activity.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
              <p className="text-gray-600 mt-2">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
