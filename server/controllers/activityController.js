// server/controllers/activityController.js
const ActivitySession = require('../models/ActivitySession');

const addActivitySession = async (req, res) => {
  try {
    const userId = req.user.id;
    const { activity, durationMinutes } = req.body;
    if (!activity || !durationMinutes) {
      return res.status(400).json({ message: 'activity and durationMinutes required' });
    }
    const session = new ActivitySession({
      user: userId,
      activity,
      durationMinutes
    });
    await session.save();
    res.status(201).json({ message: 'Activity session saved', session });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving activity', error: err.message });
  }
};

const getUserActivity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { from, to } = req.query; // optional dates: ISO strings
    const filter = { user: userId };
    if (from || to) filter.timestamp = {};
    if (from) filter.timestamp.$gte = new Date(from);
    if (to) filter.timestamp.$lte = new Date(to);

    const sessions = await ActivitySession.find(filter).sort({ timestamp: -1 });
    res.json({ sessions });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching activities', error: err.message });
  }
};

module.exports = { addActivitySession, getUserActivity };
