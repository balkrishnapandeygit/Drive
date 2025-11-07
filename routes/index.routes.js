
const express = require('express');
const upload = require('../config/multer.config');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/home', (req, res) => res.render('home'));

router.post('/upload-file', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const fileInfo = {
      originalname: req.file.originalname,
      mimeType: req.file.mimetype,
      url: req.file.path || req.file.secure_url,
      filename: req.file.filename || req.file.public_id,
    };

    res.json({ message: 'File uploaded', file: fileInfo });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
});

module.exports = router;
