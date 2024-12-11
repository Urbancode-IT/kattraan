// server/src/utils/bunnyVideoUploader.js

const axios = require("axios");

const BUNNY_VIDEO_LIBRARY_ID = "your_video_library_id";
const BUNNY_API_KEY = "5e110918-04ee-4d3d-a476-038dc6620debe1d3d6bc-dd20-4c5d-972f-d34c0721c485";
const BUNNY_VIDEO_URL = `https://video.bunnycdn.com/library/${BUNNY_VIDEO_LIBRARY_ID}/videos`;

async function uploadVideoToBunny(videoPath, videoName) {
  try {
    const videoContent = fs.readFileSync(videoPath);
    const response = await axios.post(BUNNY_VIDEO_URL, videoContent, {
      headers: {
        AccessKey: BUNNY_API_KEY,
        "Content-Type": "application/octet-stream",
      },
      params: {
        title: videoName,
      },
    });
    return response.data.guid; // Return the video ID from Bunny.net for later retrieval
  } catch (error) {
    console.error("Error uploading video to Bunny.net:", error.message);
    throw error;
  }
}

module.exports = { uploadVideoToBunny };
