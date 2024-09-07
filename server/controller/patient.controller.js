const User = require('../models/user.model'); // Assuming User model is in the models directory
const  uploadOnCloudinary  = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utilies/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const  sendEmail  = require('../utilies/sendEmail');
const {registerValidation,loginValidation} = require('../utilies/Validator')
const {generateOTP,verifyOTP,storeOTP,storeAccountVerificationOTP} = require('../utilies/otpGenerator')

const createPatient = async (req, res) => {
    const {email,dob,gender,contactInfo} = req.body

    if(!email){ 
        res.status(400).json({ error: 'Please provide email' });
    }

}
const getPatients = async (req, res) => {}
const getPatientById = async (req, res) => {}
const updatePatient = async (req, res) => {}
const deletePatient = async (req, res) => {}
const bookAppointment = async (req, res) => {}
const getPatientAppointments = async (req, res) => {}

module.exports = { createPatient, getPatients, getPatientById, updatePatient, deletePatient, bookAppointment, getPatientAppointments } 
