const express = require("express");
const { createDoctor, getDoctors, getDoctorById, deleteDoctor, getDoctorAppointments } = require('../controller/doctor.controller');
const router = express.Router();
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

router.post('/doctor/register', upload.single('profileImg'),createDoctor);
router.get('/doctors', getDoctors);
router.get('/doctor/:id', getDoctorById);
// router.put('/doctor/update/:id', updateDoctor);
router.delete('/doctor/delete/:id', deleteDoctor);
router.get('/doctor/:id/appointments', getDoctorAppointments);
// router.post('/doctor/appointment/respond', respondToAppointment);

module.exports = router;
