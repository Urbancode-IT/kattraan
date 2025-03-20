const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require("../../models/User"); 
const Role = require("../../models/Role"); 
require('dotenv').config();

const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { userName, userEmail, password, roles } = req.body;

    // Check if roles are provided
    if (!roles || roles.length === 0) {
      return res.status(400).json({ success: false, message: 'Roles must be provided' });
    }

    // Find roles in the database by their role names
    const foundRoles = await Role.find({ roleName: { $in: roles } });

    // If any roles are not found, return an error
    if (foundRoles.length !== roles.length) {
      return res.status(400).json({ success: false, message: 'Invalid roles provided' });
    }

    const existingUser = await User.findOne({ $or: [{ userEmail }, { userName }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User name or email already exists' });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    // Create a new user with the found role IDs
    const newUser = new User({
      userName,
      userEmail,
      roles: foundRoles.map(role => role._id), // Store role ObjectIds, not role names
      password: hashPassword,
    });

    await newUser.save();

    return res.status(201).json({ success: true, message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
};




const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    if (!userEmail || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Check if user exists
    const checkUser = await User.findOne({ userEmail }).populate('roles');
    if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Generate the access token
    const accessToken = jwt.sign(
      {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        roles: checkUser.roles.map(role => role.roleName),  // Use role names here
      },
      process.env.JWT_SECRET,
      { expiresIn: "90m" } // Set your access token expiration time here (e.g., 120 minutes)
    );

    // Generate the refresh token
    const refreshToken = jwt.sign(
      { _id: checkUser._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" } // Set your refresh token expiration time here (e.g., 30 days)
    );

    // Save the refresh token in the user document
    checkUser.refreshToken = refreshToken;  // Assign the refresh token to the user document
    await checkUser.save();  // Save the updated user document with the refresh token

    // Send response with tokens and user data
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        accessToken,
        refreshToken,
        user: {
          _id: checkUser._id,
          userName: checkUser.userName,
          userEmail: checkUser.userEmail,
          roles: checkUser.roles.map(role => role.roleName),  // Include role names in the response
        },
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
  }
};

// Function to refresh the access token
const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ success: false, message: "Refresh token is required" });
    }

    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Find the user by the decoded _id (from refresh token)
    const checkUser = await User.findById(decoded._id);
    if (!checkUser || checkUser.refreshToken !== refreshToken) {
      return res.status(401).json({ success: false, message: "Invalid refresh token" });
    }

    // Generate a new access token
    const newAccessToken = jwt.sign(
      {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        roles: checkUser.roles.map(role => role.roleName),  // Use role names here
      },
      process.env.JWT_SECRET,
      { expiresIn: "120m" } // Set your access token expiration time here (e.g., 120 minutes)
    );

    // Send the new access token in the response
    res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
  }
};





module.exports = { registerUser, loginUser,refreshAccessToken };
