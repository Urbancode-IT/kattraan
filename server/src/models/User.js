const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the User Schema
const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"], // Strong email validation
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    role: {
      type: String,
      enum: ["general", "admin"],
      default: "general", // Default role is 'general'
    },
    profileImage: {
      type: String,
      default: "", // Path to profile image if needed
    },
    deleted: {
      type: Boolean,
      default: false, // Soft delete flag
    },
    tokenVersion: {
      type: Number,
      default: 0, // Used for token invalidation when passwords are updated
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Password hashing middleware
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12); // Strong hashing with 12 salt rounds
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Password comparison method
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Soft delete check
UserSchema.methods.isDeleted = function () {
  return this.deleted;
};

// Normalize email method (static)
UserSchema.statics.normalizeEmail = function (email) {
  return email.trim().toLowerCase();
};

// Add indexing for frequently queried fields
UserSchema.index({ email: 1, deleted: 1 }); // Combines email and soft delete flag for efficient querying

// Export the User model
const User = mongoose.model("User", UserSchema);
module.exports = User;
