const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../../models/User");
const Role = require("../../models/Role");
require("dotenv").config();

// =======================
// ✅ Register User
// =======================
const registerUser = async (req, res) => {
  try {
    const { userName, userEmail, password, roles } = req.body;

    if (!userName || !userEmail || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required",
      });
    }

    const existingUser = await User.findOne({
      userEmail: userEmail.toLowerCase(),
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // Default to 'learner' if no roles provided
    const providedRoles = roles?.length > 0 ? roles : [1];

    // Find matching Role ObjectIds
    const validRoles = await Role.find({ roleId: { $in: providedRoles } });

    if (validRoles.length !== providedRoles.length) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid role(s)" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      userEmail: userEmail.toLowerCase(),
      password: hashedPassword,
      roles: validRoles.map((role) => role._id),
    });

    await newUser.save();

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Register Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// =======================
// ✅ Login User
// =======================
const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    if (!userEmail || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password required" });
    }

    const user = await User.findOne({
      userEmail: userEmail.toLowerCase(),
    }).populate("roles");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const roleIds = user.roles.map((role) => role.roleId); // e.g., [1, 2]

    const accessToken = jwt.sign(
      { user_id: user._id, role_id: roleIds },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    const refreshToken = jwt.sign(
      { user_id: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    user.refreshToken = hashedRefreshToken;
    await user.save();

    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // set true in production
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({ success: true, message: "Login successful", accessToken });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// ===========================
// ✅ Refresh Access Token
// ===========================
const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "No refresh token" });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.user_id).populate("roles");

    if (!user || !user.refreshToken) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const isValid = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!isValid) {
      return res
        .status(403)
        .json({ success: false, message: "Token mismatch" });
    }

    const roleIds = user.roles.map((role) => role.roleId);

    const newAccessToken = jwt.sign(
      { user_id: user._id, role_id: roleIds },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    return res.status(200).json({ success: true, accessToken: newAccessToken });
  } catch (error) {
    console.error("Token Refresh Error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

// ===========================
// ✅ Become Instructor
// ===========================
const becomeInstructor = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;

    const user = await User.findOne({ userEmail: userEmail.toLowerCase() });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    if (user.userName !== userName) {
      return res
        .status(401)
        .json({ success: false, message: "Username mismatch" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });

    const instructorRole = await Role.findOne({ roleName: "instructor" });
    if (!instructorRole)
      return res
        .status(404)
        .json({ success: false, message: "Role not found" });

    const alreadyAdded = user.roles.some(
      (r) => r.toString() === instructorRole._id.toString()
    );
    if (alreadyAdded)
      return res
        .status(200)
        .json({ success: true, message: "Already an instructor" });

    user.roles.push(instructorRole._id);
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Upgraded to instructor" });
  } catch (error) {
    console.error("Become Instructor Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// ===========================
// ✅ Logout User
// ===========================
const logoutUser = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .clearCookie("refreshToken")
        .status(200)
        .json({ success: true, message: "Logged out" });

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.user_id);
    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
  becomeInstructor,
  logoutUser,
};
