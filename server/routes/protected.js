const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware'); // import middleware

// 🔐 Protected route
router.get('/dashboard', authenticateUser, (req, res) => {
  res.json({ message: `Hello, ${req.user.email}! This is a protected route.` });
});

module.exports = router;
