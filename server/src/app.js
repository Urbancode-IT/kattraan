const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json()); // Parses JSON bodies

// Routes
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error: ", err);
  res.status(err.status || 500).json({ message: err.message || "Internal server error" });
});

module.exports = app;
