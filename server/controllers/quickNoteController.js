const QuickNote = require('../models/QuickNote');

const addQuickNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const text = req.body.text || '';
    let imageUrl = null;

    if (req.file) {
      imageUrl = '/uploads/' + req.file.filename;
    }
    const note = new QuickNote({ user: userId, text, imageUrl });
    await note.save();
    res.status(201).json({ message: 'Quick note saved', note });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving quick note', error: err.message });
  }
};

const getUserQuickNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await QuickNote.find({ user: userId }).sort({ createdAt: -1 });
    res.json({ notes });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching quick notes', error: err.message });
  }
};

module.exports = { 
    addQuickNote, 
    getUserQuickNotes
};
