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
    type: mongoose.Schema.Types.ObjectId,  // Use ObjectId to reference the Role model
    ref: 'Role', // Reference to the Role collection
  }],
  refreshToken: { 
    type: String, 
    default: null, 
  },
});

module.exports = mongoose.model('User', UserSchema);
