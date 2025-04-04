const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../../models/User");
const Role = require("../../models/Role");
require("dotenv").config();

// ✅ Register User (default: learner)
const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { userName, userEmail, password } = req.body;

    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const learnerRole = await Role.findOne({ roleName: "learner" });
    if (!learnerRole) {
      return res
        .status(500)
        .json({ success: false, message: "Learner role not found in DB" });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      userName,
      userEmail,
      roles: [learnerRole._id],
      password: hashPassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully as a learner!",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

// ✅ Login User (for learner/instructor/admin)
const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    if (!userEmail || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    const checkUser = await User.findOne({ userEmail }).populate("roles");
    if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        roles: checkUser.roles.map((role) => role.roleName),
      },
      process.env.JWT_SECRET,
      { expiresIn: "90m" }
    );

    const refreshToken = jwt.sign(
      { _id: checkUser._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    checkUser.refreshToken = refreshToken;
    await checkUser.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        accessToken,
        refreshToken,
        user: {
          _id: checkUser._id,
          userName: checkUser.userName,
          userEmail: checkUser.userEmail,
          roles: checkUser.roles.map((role) => role.roleName),
        },
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

<<<<<<< HEAD
// ✅ Refresh Access Token
const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res
        .status(400)
        .json({ success: false, message: "Refresh token is required" });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const checkUser = await User.findById(decoded._id).populate("roles");

    if (!checkUser || checkUser.refreshToken !== refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid refresh token" });
    }

    const newAccessToken = jwt.sign(
      {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        roles: checkUser.roles.map((role) => role.roleName),
      },
      process.env.JWT_SECRET,
      { expiresIn: "120m" }
    );

    res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

// ✅ Become Instructor API
const becomeInstructor = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;

    if (!userEmail || !password || !userName) {
      return res.status(400).json({
        success: false,
        message: "Email, username, and password are required",
      });
    }

    const user = await User.findOne({ userEmail });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.userName !== userName) {
      return res.status(401).json({
        success: false,
        message: "Username does not match",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const instructorRole = await Role.findOne({ roleName: "instructor" });
    if (!instructorRole) {
      return res
        .status(404)
        .json({ success: false, message: "Instructor role not found" });
    }

    const alreadyInstructor = user.roles.some(
      (roleId) => roleId.toString() === instructorRole._id.toString()
    );

    if (alreadyInstructor) {
      return res
        .status(200)
        .json({ success: true, message: "You are already an instructor" });
    }

    user.roles.push(instructorRole._id);
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "You are now an instructor" });
  } catch (error) {
    console.error("Error in becomeInstructor:", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
  becomeInstructor,
};
=======
module.exports = { registerUser, loginUser };
>>>>>>> be1ef7f612d10f00a8223d344a430ea204dcc3e8
