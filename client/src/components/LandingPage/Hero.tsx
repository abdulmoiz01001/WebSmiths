import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section style={{ backgroundColor: '#36ae9a' }} className="relative text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src="path_to_hospital_image.jpg" // Replace with your image path
          alt="Hospital"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:px-12 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Revolutionizing Patient Management
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Enhance the efficiency of your healthcare operations with our state-of-the-art patient management system. Improve patient care, streamline processes, and optimize your practice's performance.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <motion.span
            className="text-lg md:text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            Seamless Integration, Superior Care
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
