const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  roleId: {
    type: Number,
    required: true,
    unique: true, // ensures no duplicate numeric role IDs
  },
  roleName: {
    type: String,
    required: true,
    enum: ["learner", "instructor", "admin"],
    unique: true,
  },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Role", RoleSchema);
