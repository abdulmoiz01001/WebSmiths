const User = require('../models/user.model'); // Assuming User model is in the models directory
const Patient = require('../models/patient.model'); 
const uploadOnCloudinary = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utilies/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const moment = require('moment');
const sendEmail = require('../utilies/sendEmail');
const { registerValidation, loginValidation } = require('../utilies/Validator')
const { generateOTP, verifyOTP, storeOTP, storeAccountVerificationOTP } = require('../utilies/otpGenerator')

const createPatient = async (req, res) => {
    try {
      const { email, age, dob, gender, phone } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      const filePath = req.file.path;
      if (!filePath) {
        return res.status(400).json({ error: 'Profile image is required' });
      }
  
      // Upload the profile image to Cloudinary
      // Check if the patient already exists
      const ifPatientalreadyExist = await Patient.findOne({ userId: user._id });
      
      if (user && !ifPatientalreadyExist) {
          const result = await uploadOnCloudinary(filePath);
          if (!result) {
            return res.status(500).json({ error: 'Failed to upload image' });
          }
      
          const profileImg = result.secure_url;
      
        const userId = user._id;
  
        // Create and save the patient
        const patient = new Patient({
          userId,
          age,
          profileImg,
          dob,
          gender,
          phone
        });
  
        await patient.save();
        console.log(patient);
  
        // Send success response
        res.status(201).json({ message: 'Patient created successfully', patient });
      } else {
        res.status(400).json({ error: 'Patient already exists or user not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
const getPatients = async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
 }
const getPatientById = async (req, res) => { 
    const id = req.params.id
  if(!id) return res.status(400).send("ID is required")
    try {
        
        const patient = await Patient.findById(id)
        res.status(200).json(patient)
    } catch (error) {
        res.status(400).json(error)
    }
}
const deletePatient = async (req, res) => {
    const id = req.params.id
if(!id) return res.status(400).send("ID is required")
    try {
        const patient = await Patient.findByIdAndDelete(id)
        res.status(200).json(patient)
    } catch (error) {
        res.status(400).json(error)
    }
 }
const bookAppointment = async (req, res) => { }
const getPatientAppointments = async (req, res) => { }

module.exports = { createPatient, getPatients, getPatientById, deletePatient, bookAppointment, getPatientAppointments } 
