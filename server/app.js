require('dotenv').config()
const mongoose = require("mongoose")
const express = require('express');
const cookieParser = require("cookie-parser");
const UserRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const patientRoutes = require('./routes/patient.routes');
const doctorRoutes = require('./routes/doctor.routes');
const cors = require('cors');
const expressLayout = require("express-ejs-layouts");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || process.env.OTHER_PORT;
const MONGODB_URI = process.env.MONGO_URI;



// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error('Could not connect to MongoDB..', err));
app.use(express.static('public'));
app.use(cookieParser());
const corsOptions = {
    origin: [ 'http://localhost:5173'],
    credentials: true
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp'); // If COEP is necessary, otherwise omit or adjust
  next();
});



app.use(expressLayout);
app.set("layout", './layout/main');
app.set('view engine', "ejs");

app.use("/api", UserRoutes);
app.use('/api',patientRoutes)
app.use("/api", doctorRoutes);
// app.use("/api", doctorRoutes);



app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})