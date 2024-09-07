require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const UserRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const patientRoutes = require('./routes/patient.routes');
const doctorRoutes = require('./routes/doctor.routes');
const cors = require('cors');
const expressLayout = require('express-ejs-layouts');
const http = require('http'); // Required for socket.io
const socketIo = require('socket.io'); // Importing socket.io

// Initialize Express app
const app = express();
app.use(express.json());

const PORT = process.env.PORT || process.env.OTHER_PORT;
const MONGODB_URI = process.env.MONGO_URI;

// Create HTTP server manually (required for socket.io)
const server = http.createServer(app);

// Initialize Socket.IO on the server
const io = socketIo(server, {
  cors: {
    origin: ['http://localhost:5173'],
    credentials: true
  }
});

// MongoDB connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB..', err));

app.use(express.static('public'));
app.use(cookieParser());

const corsOptions = {
  origin: ['http://localhost:5173'],
  credentials: true
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// Routes
app.use('/api', UserRoutes);
app.use('/api', patientRoutes);
app.use('/api', doctorRoutes);
const users = {};

// Socket.IO event handling
io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  // You can define custom events here for notifications, etc.
  socket.on('register', (uid) => {
    users[uid] = socket.id;
    console.log(`User registered with UID: ${uid} and Socket ID: ${socket.id}`);
  });

  // Send a real-time notification (e.g., appointment booked)
  socket.on('new-appointment', (data) => {
    console.log('New appointment event received:', data);

    // Emit the notification to a specific room (e.g., doctor's room)
    io.to(data.doctorId).emit('new-appointment-notification', {
      message: `New appointment with ${data.patientName}`,
    });
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
