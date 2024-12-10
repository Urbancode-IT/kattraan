// server/src/controllers/profileController.js

const { uploadToBunny } = require("../../utils/bunnyUploader");
const User = require("../../models/User");

exports.uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileName = `${req.user._id}-${Date.now()}-${req.file.originalname}`;
    const imageUrl = await uploadToBunny(req.file.buffer, fileName);

    await User.findByIdAndUpdate(
      req.user._id,
      { profile_image: imageUrl },
      { new: true }
    );

    res
      .status(200)
      .json({
        message: "Image uploaded successfully",
        profile_image: imageUrl,
      });
  } catch (error) {
    console.error("Error uploading profile image:", error.message);
    res.status(500).json({ message: "Error uploading profile image" });
  }
};
