import React from 'react';
import ServiceBg from '../Assets/service-bg.png'
import ThingsToDo from './ThingsTodo';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Service = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-10 left-0 right-0 z-10">
        <Navbar />
      </div>
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-12 px-6 lg:px-20">
       <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl text-white font-semibold text-center mb-4">OUR SERVICES</h2>
          <p className="text-center text-white text-lg mb-16">
            Trip services help plan and book travel for a hassle-free experience.
          </p>

          <h1 className="text-5xl text-white font-bold mb-20">
             <span>South Indian </span> and Himachali Delicacies
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl text-white font-semibold mb-4">Nourish Your Soul with Authentic Cuisine</h4>
              <p className="text-lg text-white mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
              <button onClick={()=> navigate('/food')} className="bg-black text-white py-2 px-6 rounded-lg">View More</button>
            </div>

            <div className="flex justify-center">
              <img
                src={ServiceBg}
                alt="Girl enjoying food"
                className="rounded-xl shadow-lg w-96 h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
      <ThingsToDo />
      <Footer/>
    </div>
  )
}

export default Service
