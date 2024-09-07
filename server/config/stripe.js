const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Store your secret key in environment variables

module.exports = stripe;