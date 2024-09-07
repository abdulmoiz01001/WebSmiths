// src/Doctors.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/NavBar2";

const AllDoctorsComp = () => {
  const data = [
    {
      userId: "1",
      img: "/src/assets/img/doc1.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      userId: "2",
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      userId: "3",
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      userId: "4",
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      userId: "5",
      img: "/src/assets/img/doc5.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      userId: "6",
      img: "/src/assets/img/doc6.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  return (
    <>
    
    <Navbar2/>
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl mt-10 font-semibold">Our Doctors</h1>
        <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.</p>
      </div>
      <div className="grid grid-cols-1 xsm:gri-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        {data.map((doctor) => (
          <Link to={`/${doctor.userId}`} key={doctor.userId}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={doctor.img} alt={doctor.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h1 className="font-semibold text-xl">{doctor.name}</h1>
                <h3 className="text-md text-gray-600">{doctor.specialties}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  
  );
};

export default AllDoctorsComp;
