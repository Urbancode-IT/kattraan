const jwt = require("jsonwebtoken");

// Generate Access Token
exports.generateAccessToken = (user, version = 0) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      tokenVersion: version, // Allows invalidation when tokenVersion changes
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" } // Short-lived token
  );
};

// Generate Refresh Token
exports.generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "30d" } // Long-lived token
  );
};
