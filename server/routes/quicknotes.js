// server/routes/quicknotes.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { addQuickNote, getUserQuickNotes } = require('../controllers/quickNoteController');

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-' + Math.round(Math.random()*1e9) + ext);
  }
});
const upload = multer({ storage });

router.post('/', authenticateUser, upload.single('image'), addQuickNote);
router.get('/', authenticateUser, getUserQuickNotes);

module.exports = router;
