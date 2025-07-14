const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controllers/users-controller/users-controller");

const authenticateMiddleware = require("../../middleware/auth-middleware");

// List all users
router.get("/",authenticateMiddleware, getUsers);

// Get single user
router.get("/:id",authenticateMiddleware, getUserById);

// Edit user
router.put("/:id",authenticateMiddleware, updateUser);

// “Soft” delete user
router.delete("/:id", authenticateMiddleware, deleteUser);

module.exports = router;
