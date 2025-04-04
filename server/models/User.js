const mongoose = require('mongoose');

// Define User Schema
const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
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
=======
  userName: String,
  userEmail: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("User", UserSchema);
>>>>>>> be1ef7f612d10f00a8223d344a430ea204dcc3e8
