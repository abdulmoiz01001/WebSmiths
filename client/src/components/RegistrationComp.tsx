import React, { useState } from "react";
import UserForm from "../components/UserFormComp";
import DoctorForm from "../components/DoctorForm";
import PatientForm from "../components/PatientForm";
import PersonalInfoForm from "../components/PersonalInfoFormComp";
import UserTypeForm from "../components/UserTypeFormComp";
import RegistrationSuccess from "../components/RegistrationSuccessComp";
import { useNavigate } from "react-router-dom";

const RegistrationComp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    image: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    qualifications: '',  // Doctor specific
    experience: '',       // Doctor specific
    specialization: '',   // Doctor specific
    diagnosis: '',        // Patient specific
    symptoms: '',         // Patient specific
    treatmentPlan: '',    // Patient specific
    role: '',             // Doctor or Patient
  });

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = () => {
    console.log('Form Submitted', formData);
    nextStep();
  };

  const steps = [
    { label: "User Type", component: <UserTypeForm nextStep={nextStep} setFormData={setFormData} formData={formData} /> },
    { label: "User Details", component: <UserForm prevStep={prevStep} nextStep={nextStep} setFormData={setFormData} formData={formData} /> },
    {
      label: formData.role === 'doctor' ? 'Doctor Information' : 'Patient Diagnosis',
      component:
        formData.role === 'doctor' ?
        <DoctorForm nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} /> :
        <PatientForm nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} />
    },
    { label: "Personal Info", component: <PersonalInfoForm nextStep={submitForm} prevStep={prevStep} setFormData={setFormData} formData={formData} /> },
    { label: "Registration Success", component: <RegistrationSuccess formData={formData} /> }
  ];

  const progressWidth = `${(currentStep / steps.length) * 100}%`;

  const isStepCompleted = (stepIndex: any) => {
    return currentStep > stepIndex + 1;
  };

  return (
    <div className="w-[80vw] mt-10 md:w-[90vw] mx-auto">
      {/* Step Indicator */}
      <div className="relative flex w-full items-center justify-between mb-8">
        <div className="absolute top-1/2 left-0 transform -translate-y-4 w-full h-1 bg-gray-200">
          <div
            className="h-1 bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: progressWidth }}
          ></div>
        </div>
        {steps.map((step, index) => (
          <div key={index} className="flex-1 relative z-10">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mx-auto transition-all duration-500 ease-out ${
                currentStep === index + 1 || isStepCompleted(index)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {isStepCompleted(index) ? <span className="text-white text-xl">✓</span> : index + 1}
            </div>
            <div className="mt-2 text-sm text-center font-medium">
              {step.label}
            </div>
          </div>
        ))}
      </div>

      {/* Form Sections */}
      <div className="p-4 xxs:min-h-[100vh] rounded-lg flex items-center justify-between">
        {steps[currentStep - 1].component as React.ReactNode}
        <div className="w-[50%] h-full md:hidden sm:hidden xs:hidden xxs:hidden flex justify-center items-center">
          <img
            src="https://www.parklanepracticeswindon.nhs.uk/wp-content/uploads/sites/557/2019/09/pt_info_pic_357510480.jpg"
            alt="user"
            className="w-1/2 h-1/2 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationComp;
