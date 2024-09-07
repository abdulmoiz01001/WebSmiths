const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Make sure to add your Stripe secret key
const User = require('../models/user.model'); // Assuming User model is in the models directory
const Appointment = require('../models/appointment.model'); // Assuming you have the Appointment model
const Patient = require('../models/patient.model');
const Doctor = require('../models/doctor.model');
const uploadOnCloudinary = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utilies/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const moment = require('moment');
const sendEmail = require('../utilies/sendEmail');
const { registerValidation, loginValidation } = require('../utilies/Validator')
const { generateOTP, verifyOTP, storeOTP, storeAccountVerificationOTP } = require('../utilies/otpGenerator')
const fs = require('fs');
const path = require('path');

const createPatient = async (req, res) => {
    try {
      const { email, age, dob, gender, phone } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      const filePath = req.file?.path;
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
      
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting temp file:', err);
            } else {
              console.log('Temp file deleted successfully');
            }
          });
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

const bookAppointment = async (req, res) => {
  try {
    const {  doctorId, dateTime, payment } = req.body;
    // console.log(patientId, doctorId, dateTime, payment);
    
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'Authentication token is missing' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: 'Authentication error' });
    }
    const patientId = decoded.id;
    // Check if the patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Check if the doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

      const paymentIntent = await stripe.paymentIntents.create({
        amount:Math.round(payment.amount * 100),
        currency:payment.currency || 'USD',
        automatic_payment_methods: {
          enabled: true,
          allow_redirects: 'never', // Optional: Disable redirects
        },
      });
  
      if (payment.method === 'cash') {
      // Cash payment logic
      paymentStatus = 'pending'; // Payment will be collected at the time of the appointment
    } 

    // Create the appointment
    const appointment = new Appointment({
      patientId,
      doctorId,
      dateTime,
      status: 'scheduled',

      payment: {
        amount: payment.amount,
        currency: payment.currency || 'USD',
        method: payment.method,
        status: "pending",
        paymentGateway: payment.method === 'card' ? 'Stripe' : 'Cash'
      }
    });

    // Save the appointment
    await appointment.save();
    const doctorToSent = await Doctor.findById(doctorId);
    doctorToSent.notifications.push({
      type: 'new-appointment',
      message: `${patient.name} has booked an appointment with you.`,
      sender: patient._id,
      
    })
    // Send success response
    res.status(201).json({ message: 'Appointment booked successfully', appointment , client_secret:paymentIntent.client_secret });

  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getPatientAppointments = async (req, res) => {
  try {
    const { patientId } = req.params;

    // Check if the patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Find all appointments for this patient
    const appointments = await Appointment.find({ patientId }).populate('doctorId', 'name specialization');

    // If no appointments found, return a message
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found for this patient' });
    }

    // Send a success response with the appointments
    res.status(200).json({ appointments });
  } catch (error) {
    console.error('Error fetching patient appointments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = { createPatient, getPatients, getPatientById, deletePatient, bookAppointment, getPatientAppointments } 
