const { ref } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'pwdUser', 
    required: true 
  },  // Refers to the user who is the doctor
  name: { type: String, required: true },
  profileImg: { type: String },
  notifications:[{
    sender:{
    type: Schema.Types.ObjectId, ref:'pwdUser'},
    type:{type:String},
    message:{type:String},
    date:{type:Date,default:Date.now}}],
  timing: { type: String },
  specialization: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    phone: { type: String, required: true },
    address: { type: String },
  
  clinicName: { type: String },
  appointments: [{
    type: Schema.Types.ObjectId, 
    ref: 'Appointment'  // Assuming an Appointment model exists
  }],
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
