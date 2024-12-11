const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ties the token to a specific user
    },
    refreshToken: {
      type: String,
      required: true, // Stores the refresh token string
    },
    ipAddress: {
      type: String, // Stores the IP address of the device
      default: null,
    },
    userAgent: {
      type: String, // Stores information about the user's device/browser
      default: null,
    },
    expiresAt: {
      type: Date,
      required: true, // Determines when the refresh token becomes invalid
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Index for quick lookup of valid tokens
TokenSchema.index({ userId: 1, refreshToken: 1 });

const Token = mongoose.model("Token", TokenSchema);
module.exports = Token;
