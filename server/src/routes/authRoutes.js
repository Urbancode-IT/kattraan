const express = require("express");
const {
  signup,
  login,
  refreshToken,
  logout,
} = require("../controllers/auth/authController");
const { validateSignup } = require("../middlewares/validators");

const router = express.Router();

// User Signup
router.post("/signup", validateSignup, signup);

// User Login
router.post("/login", login);

// Refresh Access Token
router.post("/refresh-token", refreshToken);

// User Logout
router.post("/logout", logout);

module.exports = router;
