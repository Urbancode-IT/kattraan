const express = require("express");
const { body } = require("express-validator");
const rateLimit = require("express-rate-limit");
const {
  registerUser,
  loginUser,
  refreshAccessToken,
  becomeInstructor,
  logoutUser,
  requestPasswordReset, resetPassword 
} = require("../../controllers/auth-controller/index");

const authenticateMiddleware = require("../../middleware/auth-middleware");

const router = express.Router();

// Strong validation middleware for registration
const validateRegister = [
  body("userName").notEmpty().withMessage("Username is required"),
  body("userEmail").isEmail().withMessage("Valid email required"),
  body("password")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/).withMessage("Password must contain an uppercase letter")
    .matches(/[a-z]/).withMessage("Password must contain a lowercase letter")
    .matches(/[0-9]/).withMessage("Password must contain a number")
    .matches(/[^A-Za-z0-9]/).withMessage("Password must contain a special character"),
];

// Rate limiter to prevent login abuse
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many login attempts. Please try again later.",
});

// Routes
router.post("/register", validateRegister, registerUser);
router.post("/login", loginLimiter, loginUser);
router.post("/refresh", refreshAccessToken);
router.post("/become-instructor", becomeInstructor);
router.post("/logout", logoutUser);
router.post("/forgot-password", requestPasswordReset);
router.post("/reset-password", resetPassword);


// Protected route to check authentication
router.get("/check-auth", authenticateMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: { user },
  });
});

module.exports = router;
