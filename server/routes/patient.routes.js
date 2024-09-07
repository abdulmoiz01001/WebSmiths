const express = require("express");
const { createPatient, getPatients, getPatientById, deletePatient, bookAppointment, getPatientAppointments } = require('../controller/patient.controller');
const router = express.Router();
const uploadOnCloudinary  = require('../config/cloudinaryConfig');'// Assuming this is a custom utility for Cloudinary'
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage });
  
router.post('/patient/register', upload.single('profileImg'),createPatient);
router.get('/patients', getPatients);
router.get('/patient/:id', getPatientById);
router.delete('/patient/delete/:id', deletePatient);
router.post('/patient/appointment/book', bookAppointment);
router.get('/patient/:id/appointments', getPatientAppointments);

module.exports = router;
