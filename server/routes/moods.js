const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { addMood, getTodayAverageMood, getMonthlyMoodEntries } = require('../controllers/moodController');

router.post('/', authenticateUser, addMood);
router.get('/today', authenticateUser, getTodayAverageMood);
router.get('/monthly', authenticateUser, getMonthlyMoodEntries);
module.exports = router;
