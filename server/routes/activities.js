// server/routes/activities.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { addActivitySession, getUserActivity } = require('../controllers/activityController');

router.post('/', authenticateUser, addActivitySession);
router.get('/', authenticateUser, getUserActivity);

module.exports = router;
