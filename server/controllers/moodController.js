const Mood = require('../models/Mood');

const moodScore = {
  delighted: 5,
  happy: 4,
  calm: 3,
  sad: 2,
  angry: 1,
};

const addMood = async (req, res) => {
    console.log('Authenticated user:', req.user);
  try {
    console.log('Authenticated user:', req.user);
    const { mood } = req.body;
    const newMood = new Mood({
      user: req.user.id,
      mood,
    });
    await newMood.save();
    res.status(201).json({ message: 'Mood entry saved', mood: newMood });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getTodayAverageMood = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const moods = await Mood.find({
      user: req.user.id,
      timestamp: { $gte: today },
    });

    if (moods.length === 0) {
      return res.status(200).json({ averageMood: null, count: 0 });
    }

    const totalScore = moods.reduce((sum, entry) => sum + moodScore[entry.mood], 0);
    const avgScore = totalScore / moods.length;

    // Get closest mood label based on average score
    const closestMood = Object.keys(moodScore).reduce((prev, curr) =>
      Math.abs(moodScore[curr] - avgScore) < Math.abs(moodScore[prev] - avgScore) ? curr : prev
    );

    res.status(200).json({
      averageMood: closestMood,
      averageScore: avgScore.toFixed(2),
      entriesToday: moods.length,
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  addMood,
  getTodayAverageMood,
};
