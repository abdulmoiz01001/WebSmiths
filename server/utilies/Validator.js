const Joi = require('joi');

// Define the schema for user validation
const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
     'string.empty': 'Oops! You forgot to enter your email address.',
      'string.email': 'Hmm, that doesn’t look like a valid email. Try again!',
      'any.required': 'Email is required',
    }),
  password: Joi.string().min(6).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')).required().messages({
    'string.empty': 'Please enter your password.',
     'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.',
    'string.min': 'Your password must be at least 6 characters long.',
    'any.required': 'Password is required',
}),
});

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required().messages({
      'string.empty': 'Oops! You forgot to enter your name.',
       'string.min': 'Your name must be at least 3 characters long.',
       'string.max': 'Your name must be at most 255 characters long.',
       'any.required': 'Name is required',
    }),
    email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
      'string.empty': 'Oops! You forgot to enter your email address.',
       'string.email': 'Hmm, that doesn’t look like a valid email. Try again!',
       'any.required': 'Email is required',
     }),
   password: Joi.string().min(6).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')).required().messages({
     'string.empty': 'Please enter your password.',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.',
     'string.min': 'Your password must be at least 6 characters long.',
     'any.required': 'Password is required',
 }),
    userType: Joi.string().valid('doctor', 'patient', 'admin').optional()  // Optional field, defaults to 'patient'
  });
  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
      'string.empty': 'Oops! You forgot to enter your email address.',
       'string.email': 'Hmm, that doesn’t look like a valid email. Try again!',
       'any.required': 'Email is required',
     }),
   password: Joi.string().min(6).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')).required().messages({
     'string.empty': 'Please enter your password.',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.',
     'string.min': 'Your password must be at least 6 characters long.',
     'any.required': 'Password is required',
 }),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };

