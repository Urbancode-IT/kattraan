// server/src/routes/userRoutes.js

const express = require("express");
const { signup, login } = require("../controllers/auth/authController");
const { uploadProfileImage } = require("../controllers/auth/profileController");
const { protect } = require("../middlewares/authMiddleware");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post(
  "/profile/upload-image",
  protect,
  upload.single("profile_image"),
  uploadProfileImage
);

module.exports = router;
