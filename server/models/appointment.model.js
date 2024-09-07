const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
  patientId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },  // Reference to the patient who booked the appointment
  doctorId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true 
  },  // Reference to the doctor
  dateTime: { 
    type: Date, 
    required: true 
  },  // Date and time of the appointment
  status: { 
    type: String, 
    enum: ['scheduled', 'completed', 'cancelled'], 
    default: 'scheduled' 
  },  // Appointment status
  
  // Payment Information
  payment: {
    amount: { type: Number, required: true },  // Total cost of the appointment
    currency: { type: String, default: 'USD' },  // Currency of the payment, default USD
    method: { 
      type: String, 
      enum: ['card', 'cash', 'insurance', 'debit card', 'mobile payment'], 
      required: true 
    },  // Payment method used by the patient
    status: { 
      type: String, 
      enum: ['pending', 'paid', 'failed'], 
      default: 'pending' 
    },  // Payment status
    transactionId: { type: String },  // ID from payment gateway (e.g., Stripe, PayPal)
    paymentDate: { type: Date, default: Date.now },  // Date the payment was made
    paymentGateway: { 
      type: String, 
      enum: ['Stripe', 'PayPal', 'Cash', 'Insurance'], 
      required: true 
    }  // The service used for processing payments
  },

  medicalRecordId: { 
    type: Schema.Types.ObjectId, 
    ref: 'MedicalRecord'  // Reference to medical records from this appointment
  }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
