const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { addMood, getTodayAverageMood } = require('../controllers/moodController');

router.post('/', authenticateUser, addMood);
router.get('/today', authenticateUser, getTodayAverageMood);

module.exports = router;
