import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

// Mock data for demonstration
const mockDoctors = [
  {
    userId: "1",
    img: "/src/assets/img/doc1.jpg",
    name: "Dr. Serena Mitchell",
    specialization: "Orthopedic Surgeon",
    contactInfo: {
      phone: "+123-456-7890",
      address: "123 Elm St, Springfield, IL",
    },
    clinicName: "Wellness Clinic",
    appointments: [
      {
        date: "2024-09-15",
        time: "10:00 AM",
        patient: "John Doe",
      },
      {
        date: "2024-09-16",
        time: "02:00 PM",
        patient: "Jane Smith",
      },
    ],
  },
  {
    userId: "2",
    img: "/src/assets/img/doc2.jpg",
    name: "Dr. Julian Bennett",
    specialization: "Cardiologist",
    contactInfo: {
      phone: "+123-456-7890",
      address: "456 Maple Ave, Springfield, IL",
    },
    clinicName: "Heart Care Center",
    appointments: [
      {
        date: "2024-09-20",
        time: "11:00 AM",
        patient: "Alice Johnson",
      },
    ],
  },
  {
    userId: "3",
    img: "/src/assets/img/doc3.jpg",
    name: "Dr. Camila Rodriguez",
    specialization: "Pediatrician",
    contactInfo: {
      phone: "+123-456-7890",
      address: "789 Oak St, Springfield, IL",
    },
    clinicName: "Kids Health Clinic",
    appointments: [],
  },
  // Add more mock data as needed
];

const DoctorDescription = () => {
  const { id } = useParams(); // Get the doctor ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate
  const doctor = mockDoctors.find((doc) => doc.userId === id); // Find the doctor by ID

  if (!doctor) return <p>Doctor not found.</p>; // Handle case where doctor is not found

  const handleGetAppointment = () => {
    navigate("/payment"); // Navigate to the payment page
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6 md:p-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }} // Animation on exit
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
        {/* Doctor Image */}
        <motion.img
          src={doctor.img}
          alt={doctor.name}
          className="w-full md:w-64 h-full lg:w-64 xl:w-[520px] object-cover rounded-t-lg md:rounded-t-sm lg:rounded-l-lg lg:rounded-t-sm xl:rounded-t-sm 2xl:rounded-l-sm md:rounded-l-lg transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Doctor Details */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{doctor.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{doctor.specialization}</p>
          <p className="text-sm text-gray-600 mb-2">Phone: <span className="font-medium">{doctor.contactInfo.phone}</span></p>
          <p className="text-sm text-gray-600 mb-2">Address: <span className="font-medium">{doctor.contactInfo.address}</span></p>
          <p className="text-sm text-gray-600 mb-4">Clinic: <span className="font-medium">{doctor.clinicName}</span></p>
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          {doctor.appointments.length > 0 ? (
            <ul className="list-disc list-inside mb-4">
              {doctor.appointments.map((appointment, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {appointment.date} at {appointment.time} - Patient: {appointment.patient}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">No upcoming appointments.</p>
          )}
          <button
            onClick={handleGetAppointment}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Book Appointment
          </button>
          <Link to="/doctors" className="block mt-4 text-blue-500 hover:underline">
            Back to Doctors
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorDescription;
