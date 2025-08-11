// server/routes/progress.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { getProgress } = require('../controllers/progressController');

router.get('/', authenticateUser, getProgress);

module.exports = router;
