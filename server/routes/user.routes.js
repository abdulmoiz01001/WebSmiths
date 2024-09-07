const express = require("express")
const {registerUser,verifyUser,loginUser,logoutUser,getAllUsers,deleteUser,otpRequest,verifyResetOTP,resetPassword} = require('../controller/user.controller')
const uploadOnCloudinary = require("../config/cloudinaryConfig")
const router = express.Router()

router.post('/auth/register',registerUser)
router.post('/auth/verification',verifyUser)
router.post('/auth/login',loginUser)
router.post('/auth/logout',logoutUser)
router.get('/users',getAllUsers)
router.delete('/users/delete/:id',deleteUser)
router.post('/otp/request',otpRequest)
router.post('/otp/verify',verifyResetOTP)
router.post('/users/reset/currentpassword',resetPassword)
module.exports = router 