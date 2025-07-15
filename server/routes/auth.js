const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController'); // ✅ correct

// POST /auth/register
router.post('/register', registerUser);

// POST /auth/login
router.post('/login', loginUser);

module.exports = router;
