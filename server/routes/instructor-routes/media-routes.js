const express = require("express");
const multer = require("multer");
const {
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
    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

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
    res.status(500).json({ success: false, message: "Error deleting file" });
  }
});

module.exports = router;
