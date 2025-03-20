const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  roleName: { 
    type: String, 
    required: true, 
    enum: ['learner', 'instructor', 'admin'],  // Allowed roles
    unique: true 
  },
  description: { type: String, required: true },  // Role description
});

module.exports = mongoose.model("Role", RoleSchema);
