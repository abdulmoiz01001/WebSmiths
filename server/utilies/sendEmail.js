const nodemailer = require('nodemailer');

async function sendEmail(to, otp,purpose) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  if(purpose=='reset'){
    let mailOptions = {
      from: '',
      to: to,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is ${otp}`
    };
    await transporter.sendMail(mailOptions);
  }
  else if(purpose=='verify'){
    let mailOptions = {
      from: '',
      to: to,
      subject: 'Account Verification OTP',
      text: `Your OTP for account verification is ${otp}`
    };
    await transporter.sendMail(mailOptions);
  }

}

module.exports = sendEmail