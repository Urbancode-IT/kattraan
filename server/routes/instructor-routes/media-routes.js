const express = require("express");
const multer = require("multer");
const {
<<<<<<< HEAD
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadMediaToCloudinary(req.file.path);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);

=======
  uploadMediaToLinode,
  deleteMediaFromLinode,
} = require("../../helpers/linodeStorage");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Single file
router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file provided" });
  }
  try {
    const { key, url } = await uploadMediaToLinode(req.file.path);
    res.json({ success: true, data: { key, url } });
  } catch (e) {
    console.error("Upload error:", e);
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

<<<<<<< HEAD
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Assest Id is required",
      });
    }

    await deleteMediaFromCloudinary(id);

    res.status(200).json({
      success: true,
      message: "Assest deleted successfully from cloudinary",
    });
  } catch (e) {
    console.log(e);

=======
// Bulk
router.post("/bulk-upload", upload.array("files", 10), async (req, res) => {
  if (!req.files || !req.files.length) {
    return res
      .status(400)
      .json({ success: false, message: "No files provided" });
  }
  try {
    const uploads = await Promise.all(
      req.files.map((f) => uploadMediaToLinode(f.path))
    );
    res.json({ success: true, data: uploads });
  } catch (e) {
    console.error("Bulk upload error:", e);
    res.status(500).json({ success: false, message: "Bulk upload failed" });
  }
});

// Delete
router.delete("/delete/:key", async (req, res) => {
  const key = decodeURIComponent(req.params.key);
  if (!key) {
    return res
      .status(400)
      .json({ success: false, message: "Asset key is required" });
  }
  try {
    await deleteMediaFromLinode(key);
    res.json({ success: true, message: "Asset deleted", key });
  } catch (e) {
    console.error("Delete error:", e);
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
    res.status(500).json({ success: false, message: "Error deleting file" });
  }
});

<<<<<<< HEAD
router.post("/bulk-upload", upload.array("files", 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map((fileItem) =>
      uploadMediaToCloudinary(fileItem.path)
    );

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (event) {
    console.log(event);

    res
      .status(500)
      .json({ success: false, message: "Error in bulk uploading files" });
  }
});

=======
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
module.exports = router;
