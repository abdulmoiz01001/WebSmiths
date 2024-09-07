const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },  // Refers to the user who is the doctor
  specialization: { type: String, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    address: { type: String }
  },
  clinicName: { type: String },
  appointments: [{
    type: Schema.Types.ObjectId, 
    ref: 'Appointment'  // Assuming an Appointment model exists
  }],
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
