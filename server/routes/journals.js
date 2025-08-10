const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const {
  createJournalEntry,
  getUserJournals,
  deleteJournalEntry
} = require('../controllers/journalController');

// 🔒 Routes require authentication
router.post('/', authenticateUser, createJournalEntry);
router.get('/', authenticateUser, getUserJournals);
router.delete('/:id', authenticateUser, deleteJournalEntry);

module.exports = router;
