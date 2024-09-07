import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = ({ formData }: { formData: any }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full p-8 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold text-center text-green-500">Registration Successful!</h2>
      <p className="text-lg text-gray-600 text-center">
        {formData.role === 'doctor'
          ? "Thank you for registering as a doctor! Your details are under verification. You will receive an email once the verification process is complete."
          : "Thank you for registering as a patient! You will receive an email with further instructions."}
      </p>
      
      <p className="text-lg text-gray-600 text-center">
        Please wait for an email confirmation regarding your verification status.
      </p>
      
      <button
        onClick={goToHome}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default RegistrationSuccess;
