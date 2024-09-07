const express = require("express");
const { createDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor, getDoctorAppointments, respondToAppointment } = require('../controller/doctor.controller');
const router = express.Router();

router.post('/doctor/register', createDoctor);
router.get('/doctors', getDoctors);
router.get('/doctor/:id', getDoctorById);
router.put('/doctor/update/:id', updateDoctor);
router.delete('/doctor/delete/:id', deleteDoctor);
router.get('/doctor/:id/appointments', getDoctorAppointments);
router.post('/doctor/appointment/respond', respondToAppointment);

module.exports = router;
