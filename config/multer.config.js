
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'drive_uploads',
    resource_type: 'auto',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'pdf', 'txt', 'docx', 'mp4', 'mp3'],
  },
});

const upload = multer({ storage });
module.exports = upload;
