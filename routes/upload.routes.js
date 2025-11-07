// routes/upload.routes.js
const express = require('express');
const fs = require('fs');
const upload = require('../config/multer.config');
const cloudinary = require('../config/cloudinary');
const router = express.Router();

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'drive_uploads',
      resource_type: 'auto',
    });

    if (req.file.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(200).json({
      message: 'File uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Upload failed', error });
  }
});

module.exports = router;
