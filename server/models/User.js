const mongoose = require('mongoose');
const crypto = require("crypto");
// Define User Schema
const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
  },
  password: { 
    type: String, 
    required: true, 
  },
  roles: [{ 
    type: Number,  // Now storing roleId like 1, 2, 3
    required: true
  }],
  refreshToken: { 
    type: String, 
    default: null, 
  },
  resetPasswordToken: { type: String, default: null },
  resetPasswordExpires: { type: Date, default: null },
});

module.exports = mongoose.model('User', UserSchema);
