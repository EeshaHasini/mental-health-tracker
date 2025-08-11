const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { addMood, getTodayAverageMood, getMonthlyMoodEntries ,getWeeklyMoodEntries } = require('../controllers/moodController');

router.post('/', authenticateUser, addMood);
router.get('/today', authenticateUser, getTodayAverageMood);
router.get('/monthly', authenticateUser, getMonthlyMoodEntries);
router.get("/weekly", authenticateUser, getWeeklyMoodEntries); // 👈 for chart
module.exports = router;
