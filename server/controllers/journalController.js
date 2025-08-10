const Journal = require('../models/Journal');

// 📌 Create a new journal entry
const createJournalEntry = async (req, res) => {
  try {
    const { content, mood } = req.body;

    const newEntry = new Journal({
      user: req.user.id,
      content,
      mood,
    });

    await newEntry.save();
    res.status(201).json({ message: 'Journal entry saved', entry: newEntry });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// 📌 Get all journal entries of the logged-in user
const getUserJournals = async (req, res) => {
  try {
    const entries = await Journal.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// 📌 (Optional) Delete a journal entry
const deleteJournalEntry = async (req, res) => {
  try {
    const entry = await Journal.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!entry) {
      return res.status(404).json({ message: 'Journal entry not found or unauthorized' });
    }

    res.status(200).json({ message: 'Journal entry deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  createJournalEntry,
  getUserJournals,
  deleteJournalEntry,
};
