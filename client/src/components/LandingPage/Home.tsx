import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="path_to_hospital_image.jpg" // Replace with your image path
          alt="Hospital"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-4">
          Transforming Healthcare Management
        </h1>
        <p className="text-lg md:text-xl text-center mb-6">
          Streamline hospital operations, enhance patient care, and improve efficiency with our comprehensive management system.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/schedule-demo"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Schedule a Demo
          </Link>
          <Link
            to="/get-started"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
