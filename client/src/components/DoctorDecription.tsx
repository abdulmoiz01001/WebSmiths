import React from "react";
import { useParams, Link } from "react-router-dom";
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
  const doctor = mockDoctors.find((doc) => doc.userId === id); // Find the doctor by ID

  if (!doctor) return <p>Doctor not found.</p>; // Handle case where doctor is not found

  const handleGetAppointment = () => {
    alert(`Appointment booked with ${doctor.name}`);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-white text-black p-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }} // Animation on exit
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Doctor Image */}
        <motion.img
          src={doctor.img}
          alt={doctor.name}
          className="rounded-lg h-56 w-56 object-cover transform hover:scale-110 transition-transform duration-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        {/* Doctor Details */}
        <div className="text-left md:flex-1">
          <h1 className="text-4xl font-bold">{doctor.name}</h1>
          <p className="text-xl mt-2">{doctor.specialization}</p>
          <p className="mt-2">Phone: {doctor.contactInfo.phone}</p>
          <p>Address: {doctor.contactInfo.address}</p>
          <p>Clinic: {doctor.clinicName}</p>
          <h2 className="mt-4 text-2xl">Appointments</h2>
          {doctor.appointments.length > 0 ? (
            <ul className="list-disc ml-5 mt-2">
              {doctor.appointments.map((appointment, index) => (
                <li key={index}>
                  {appointment.date} at {appointment.time} - Patient: {appointment.patient}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming appointments.</p>
          )}
          <button
            onClick={handleGetAppointment}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Get Appointment
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
