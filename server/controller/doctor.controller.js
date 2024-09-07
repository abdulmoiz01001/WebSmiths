const Doctor = require('../models/doctor.model'); // Assuming Doctor model is in the models directory
const uploadOnCloudinary = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const fs = require('fs');
const path = require('path');
const User = require('../models/user.model');
// Define the controller methods for doctors

const createDoctor = async (req, res) => {
    try {
        const { email,gender, clinicName, specialization,address,timing, phone } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        const filePath = req.file.path;
        if (!filePath) {
            return res.status(400).json({ error: 'Profile image is required' });
        }

        // Upload the profile image to Cloudinary
        // Check if the patient already exists
        const ifDoctoralreadyExist = await Doctor.findOne({ userId: user._id });

        if (user && !ifDoctoralreadyExist) {
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
            const doctor = new Doctor({userId,
                email,gender, clinicName, specialization,address,timing,profileImg, phone,name:user.name
            });

            await doctor.save()
            console.log(Doctor);

            // Send success response
            res.status(201).json({ message: 'Doctor created successfully', doctor });
        } else {
            res.status(400).json({ error: 'Doctor already exists or user not found' });
        }
    
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
}
};

const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
};

const getDoctorById = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).send("ID is required");
    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).send("ID is required");
    try {
        const doctor = await Doctor.findByIdAndDelete(id);
        if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(400).json(error);
    }
};

const bookAppointment = async (req, res) => {
    // Your logic here
};

const getDoctorAppointments = async (req, res) => {
    // Your logic here
};

module.exports = { createDoctor, getDoctors, getDoctorById, deleteDoctor, bookAppointment, getDoctorAppointments };
