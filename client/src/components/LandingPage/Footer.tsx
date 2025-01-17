import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="container mx-auto px-5 md:px-32 py-8">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8">
          {/* WellnessVista Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="font-semibold text-xl pb-4">WellnessVista</h1>
            <p className="text-sm">
              Our team of dedicated doctors, each specializing in unique fields such as orthopedics, cardiology, pediatrics, neurology, dermatology, and more.
            </p>
          </div>

          {/* About Us Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="font-medium text-xl pb-4">About Us</h1>
            <nav className="flex flex-col gap-2">
              <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                About
              </Link>
              <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                Services
              </Link>
              <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                Doctors
              </Link>
            </nav>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="font-medium text-xl pb-4">Services</h1>
            <nav className="flex flex-col gap-2">
              <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                Lab Test
              </Link>
              <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                Health Check
              </Link>
              <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
                Heart Health
              </Link>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="font-medium text-xl pb-4">Contact Us</h1>
            <nav className="flex flex-col gap-2">
              <a href="mailto:support@care.com" className="hover:text-hoverColor transition-all cursor-pointer">
                support@care.com
              </a>
              <a href="tel:+123-456-7890" className="hover:text-hoverColor transition-all cursor-pointer">
                +123-456-7890
              </a>
              <p className="text-sm">
                123 Elm Street, Suite 456 Springfield, IL 62701 United States
              </p>
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-4 border-t border-gray-600 mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} developed by
            <span className="text-hoverColor"> WebSmiths</span> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
