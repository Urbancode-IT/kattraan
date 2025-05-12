// helpers/linodeStorage.js
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types"); // npm install mime-types

const s3 = new S3Client({
  endpoint: process.env.LINODE_ENDPOINT,
  region: process.env.LINODE_REGION,
  credentials: {
    accessKeyId: process.env.LINODE_ACCESS_KEY_ID,
    secretAccessKey: process.env.LINODE_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

async function uploadMediaToLinode(filePath) {
  // 1. Read into a buffer (so we know exact length)
  const fileContent = fs.readFileSync(filePath);
  const key = `${Date.now()}-${path.basename(filePath)}`;
  const contentType = mime.lookup(filePath) || "application/octet-stream";

  // 2. Send with explicit ContentLength
  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.LINODE_BUCKET,
      Key: key,
      Body: fileContent,
      ACL: "public-read",
      ContentType: contentType,
      ContentLength: fileContent.length,
    })
  );

  // 3. Remove temp file
  fs.unlinkSync(filePath);

  // 4. Return key & URL
  return {
    key,
    url: `${process.env.LINODE_BASE_URL}/${encodeURIComponent(key)}`,
  };
}

async function deleteMediaFromLinode(key) {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: process.env.LINODE_BUCKET,
      Key: key,
    })
  );
}

module.exports = { uploadMediaToLinode, deleteMediaFromLinode };
