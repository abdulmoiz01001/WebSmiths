const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new mongoose.Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },  // Refers to the user who is the patient
  profileImg:{
    type: String,
    required: true
  },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  contactInfo: {
    phone: { type: String, required: true },
    address: { type: String }
  },
  medicalRecords: [{
    type: Schema.Types.ObjectId, 
    ref: 'MedicalRecord'  // Assuming a MedicalRecord model exists
  }],
  appointments: [{
    type: Schema.Types.ObjectId, 
    ref: 'Appointment'  // Refers to appointments associated with the patient
  }],
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
