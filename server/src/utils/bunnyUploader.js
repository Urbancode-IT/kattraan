// server/src/utils/bunnyUploader.js

const axios = require("axios");

const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE;
const BUNNY_API_KEY = process.env.BUNNY_API_KEY;
const BUNNY_STORAGE_URL = `https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}/`;

async function uploadToBunny(fileBuffer, fileName) {
  try {
    const response = await axios.put(`${BUNNY_STORAGE_URL}${fileName}`, fileBuffer, {
      headers: {
        AccessKey: BUNNY_API_KEY,
        "Content-Type": "application/octet-stream",
      },
    });
    return `${BUNNY_STORAGE_URL}${fileName}`;
  } catch (error) {
    throw new Error("Error uploading to Bunny.net");
  }
}

module.exports = { uploadToBunny };
