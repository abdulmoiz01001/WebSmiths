const User = require('../models/user.model'); // Assuming User model is in the models directory
const Patient = require('../models/patient.model'); 
const uploadOnCloudinary = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utilies/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const sendEmail = require('../utilies/sendEmail');
const { registerValidation, loginValidation } = require('../utilies/Validator')
const { generateOTP, verifyOTP, storeOTP, storeAccountVerificationOTP } = require('../utilies/otpGenerator')

const createPatient = async (req, res) => {
    const { email, dob, gender, contactInfo } = req.body
    const filePath = req.file.path;

    if (!email || !dob || !gender || !contactInfo) {
        res.status(400).json({ error: 'Please provide email, dob, gender, and contactInfo (phone, address)' });
    }
    const user = await User.findOne({ email })
    const ifPatientalreadyExist = await Patient.findOne({ email })
    if (user && !ifPatientalreadyExist) {
        const userId = user._id

        try {
            // Check if profile image is provided
            if (!filePath) {
                return res.status(400).json({ error: 'Profile image is required' });
            }

            // Upload the profile image to Cloudinary
            const result = await uploadOnCloudinary(filePath);
            if (!result) {
                return res.status(500).json({ error: 'Failed to upload image' });
            }

            const profileImg = result.secure_url;

            const patient = await Patient.create({
                userId,
                profileImg,
                dob,
                gender,
                contactInfo
            });
            await patient.save();

            res.status(201).json({message:"Patient created successfully" ,patient });
        } catch (error) {
            console.error(error);
        }
    }
    else{
        res.status(400).json({ error: 'Patient already exist' });
    }
}
const getPatients = async (req, res) => { }
const getPatientById = async (req, res) => { }
const updatePatient = async (req, res) => { }
const deletePatient = async (req, res) => { }
const bookAppointment = async (req, res) => { }
const getPatientAppointments = async (req, res) => { }

module.exports = { createPatient, getPatients, getPatientById, updatePatient, deletePatient, bookAppointment, getPatientAppointments } 
