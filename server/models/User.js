const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('User', UserSchema);
