const Mood = require('../models/Mood');

const moodScore = {
  delighted: 5,
  happy: 4,
  calm: 3,
  sad: 2,
  angry: 1,
};

const addMood = async (req, res) => {
  try {
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
      return res.status(200).json({ averageMood: null, averageScore: null, entriesToday: 0 });
    }

    const totalScore = moods.reduce((sum, entry) => sum + moodScore[entry.mood], 0);
    const avgScore = totalScore / moods.length;

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

const getMonthlyMoodEntries = async (req, res) => {
  try {
    const { month, year } = req.query;

    if (!month || !year) {
      return res.status(400).json({ message: 'Month and year are required' });
    }

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59, 999);
    const daysInMonth = endDate.getDate();

    const moods = await Mood.find({
      user: req.user.id,
      timestamp: { $gte: startDate, $lte: endDate },
    });

    const moodByDay = {};
    moods.forEach(entry => {
      const day = entry.timestamp.getDate();
      if (!moodByDay[day]) moodByDay[day] = [];
      moodByDay[day].push(entry.mood);
    });

    const moodCalendar = [];
    for (let day = 1; day <= daysInMonth; day++) {
      if (!moodByDay[day]) {
        moodCalendar.push({ day, mood: 'none', averageScore: null });
      } else {
        const moodsForDay = moodByDay[day];
        const totalScore = moodsForDay.reduce((sum, m) => sum + moodScore[m], 0);
        const avgScore = totalScore / moodsForDay.length;

        const closestMood = Object.keys(moodScore).reduce((prev, curr) =>
          Math.abs(moodScore[curr] - avgScore) < Math.abs(moodScore[prev] - avgScore) ? curr : prev
        );

        moodCalendar.push({ day, mood: closestMood, averageScore: avgScore.toFixed(2) });
      }
    }

    res.status(200).json({ moodCalendar });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  addMood,
  getTodayAverageMood,
  getMonthlyMoodEntries, 
};
