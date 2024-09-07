const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    resetOTP: { type: String },
    otpExpires: { type: Date },
    otpEvent: { type: Boolean, default: false },
    accountVerificationOTP:{type:String},
    accountVerificated:{type:Boolean,default:false},
  
  userType: {
    type: String,
    enum: ['doctor ', 'patient', 'admin'],
    default: 'patient',
  },
  dateJoined: { type: Date, default: Date.now },
  password: { type: String, required: true }
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
  });

const User = mongoose.model('pwdUser', userSchema);

module.exports = User;
