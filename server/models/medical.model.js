const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalRecordSchema = new mongoose.Schema({
  patientId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },  // Reference to the patient
  doctorId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true 
  },  // Reference to the doctor
  appointmentId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Appointment', 
    required: true 
  },  // Reference to the appointment
  diagnosis: { 
    type: String, 
    required: true 
  },  // The diagnosis made by the doctor
  prescription: { 
    type: String, 
    required: true 
  },  // Medications or treatments prescribed
  notes: { 
    type: String 
  },  // Any additional notes from the doctor
  followUp: {
    type: Boolean,
    default: false
  },  // Indicates whether a follow-up is required
  followUpDate: { 
    type: Date 
  }  // Follow-up appointment date, if needed
}, { timestamps: true });

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;
