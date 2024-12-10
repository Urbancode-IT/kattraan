const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/tokenGenerator");

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create a new user
    const user = await User.create({ fullname, email, password, role });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Validate password
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate tokens
    const accessToken = generateAccessToken(user, user.tokenVersion);
    const refreshToken = generateRefreshToken(user);

    // Return tokens
    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    console.error("Error in login controller:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
    console.log("Login request received:", req.body);

  }
};

// Refresh Token Controller
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token is required" });
    }

    const tokenRecord = await Token.findOne({ refreshToken });
    if (!tokenRecord || tokenRecord.expiresAt < Date.now()) {
      return res
        .status(401)
        .json({ message: "Invalid or expired refresh token" });
    }

    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      async (err, decoded) => {
        if (err)
          return res.status(401).json({ message: "Invalid refresh token" });

        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({ message: "User not found" });

        const newAccessToken = generateAccessToken(user, user.tokenVersion);
        res.status(200).json({ accessToken: newAccessToken });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Logout Controller
exports.logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    // Remove the refresh token from the database
    await Token.deleteOne({ refreshToken });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
