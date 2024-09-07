const User = require('../models/user.model'); // Assuming User model is in the models directory
const  uploadOnCloudinary  = require('../config/cloudinaryConfig'); // Assuming this is a custom utility for Cloudinary
const { generateToken, verifyToken } = require('../utilies/JWT'); // Assuming you have a utility for token generation
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
const  sendEmail  = require('../utilies/sendEmail');
const {registerValidation,loginValidation} = require('../utilies/Validator')
const {generateOTP,verifyOTP,storeOTP,storeAccountVerificationOTP} = require('../utilies/otpGenerator')
const {loginSchema} = require('../utilies/Validator')

// Controller for registering a new user
const registerUser = async (req, res) => {
  const { email, password, name ,userType} = req.body;
  if(!email || !password || !name) return res.status(400).send("All fields are required");

  try {
    // Validate the user input
    const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
 const checkingUser = await User.findOne({ email });
 if(checkingUser) return res.status(400).send("User already exists");

    // Create a new user with the provided details
    const user = new User({
      name,
      password,
      userType,
      email,
    });

    // Save the user to the database
    await user.save();

    // Generate an authentication token
    const generatedToken = generateToken(user._id);

    // Set the token as a cookie
    res.cookie('token', generatedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
    });

    if(userType == "patient" || userType == null){

    try {
        
    const { otp, secret } = generateOTP()
    storeAccountVerificationOTP(user._id,otp)
    sendEmail(user.email,otp,'verify')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }}
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generatedToken
    });

  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};

const verifyUser = async (req, res) => {
  const {otp,email} = req.body
if(!otp || !email){
  res.status(400).json({ error: 'Please provide otp and email' });
}
  try {
  verifyOTP(email,otp,res,'accountVerification')

 } catch (error) {
  res.status(500).json({ error: error.message });
 }
  
}
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  
  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.details[0].message });
  }

  try { 
    const user = await User.findOne({ email });
    if (!user) {  
      res.status(401).json({ error: 'Invalid email or password' });}
      if (user && (await bcrypt.compare(password, user.password))) {
        const generatedToken = generateToken(user._id);
        
        // Set the token as a cookie
        res.cookie('token', generatedToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600000, // 1 hour
        });
        const data = await User.findById(user._id).select("email name profileImg userType");
        
        res.status(200).json({
          data,
          token: generatedToken,
  });
    } 
    else{
      return res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = verifyToken(token)
    console.log(decoded);
    if(decoded){
      res.cookie('token', '', { httpOnly: true, expires: new Date(0) }); // Set the expiration to a past date
    
    res.status(200).send('Logout successful');
    }
    else{
      return res.status(401).json({ error: 'noone logged in ' });

    }
  } catch (error) {
    res.status(404).json({message:"Error in logging out seems like noone is logged in "})
  }
}
const getAllUsers = async(req,res)=>{
  try {
    const users = await User.find()
    res.status(200).send(users);
  } catch (error) {
   return res.status(401).json({ error: `Error while getting the users` });
  }
}
const deleteUser = async(req,res)=>{
  const id = req.params.id
  console.log(id);
  
  try {
    const token = req.cookies.token;
  const decoded = verifyToken(token)
  if(!decoded){
    
    return res.status(401).json({ error: `Start using twitter by signing up ! authetication error` });
  }
  const user = await User.findById(decoded.id).select("userType")
  console.log(user.userType);
  
  if( user.userType=='admin'){
 const user = await User.findByIdAndDelete({_id:id})
      res.status(200).send(user);
    }
    else{
  return res.status(401).json({ error: `login as admin to delete the user` });
}
  }
   catch (error) {
   return res.status(401).json({ error: `Error while deleting the users` });
  }
}
const otpRequest = async(req,res)=>{
  const {email} = req.body
  const { otp, secret } = generateOTP();
  const user = await User.findOne({email:email})
  storeOTP(user._id,otp)
  sendEmail(email,otp,"reset")
  res.status(200).json({message:"successful generated otp"})
}
const verifyResetOTP = async(req,res)=>{
  try {
    const { email, submittedOtp } = req.body;
    const user = await User.find({email:email})
      verifyOTP(user[0]._id,submittedOtp,res,"resetPassword")
      // console.log(user);
      
  } catch (error) {
    return res.status(500).json('Error verifying OTP: ' + error.message);
    
  }

}
const resetPassword = async(req,res)=>{
    try {
      const {email,password,ConfirmPassword} = req.body
      const userEmail = await User.find({email:email})
      const user = await User.findById(userEmail[0]._id)
      if(!userEmail){
        return res.status(404).json({Error:"No user Found"})
      }
      if(userEmail[0].otpEvent){
      if(password==ConfirmPassword ){
        user.password = password
        // const updatedUser = await User.findByIdAndUpdate(userEmail[0]._id,{password:password})
        user.otpEvent = false
       await user.save()
        res.status(200).json({Message:"Successfully updated the password",Doc:user})
      }
      else{
        res.status(404).json({Error:"Password Should match"})
  
      }}
      else{
        res.status(404).json({Error:"First verify your OTP"})
  
      }
    } catch (error) {
      res.status(404).json({error:error.message})
      
    }
  }

module.exports = {
  registerUser,
  resetPassword,
  otpRequest,
  verifyResetOTP,
  verifyUser,
  loginUser,
  logoutUser,
  getAllUsers,
  deleteUser
};
