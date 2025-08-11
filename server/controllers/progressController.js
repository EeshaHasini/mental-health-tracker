// server/controllers/progressController.js
const Journal = require('../models/Journal'); // your existing model
const QuickNote = require('../models/QuickNote');
const ActivitySession = require('../models/ActivitySession');
const Mood = require('../models/Mood');

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}

function daysBetween(a, b) {
  return Math.floor((startOfDay(b) - startOfDay(a)) / (1000*60*60*24));
}

const getProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { month, year } = req.query; // optional month/year for calendar view

    // 1) Journals (you already have journals)
    const journals = await Journal.find({ user: userId }).sort({ createdAt: -1 });

    // 2) QuickNotes
    const quickNotes = await QuickNote.find({ user: userId }).sort({ createdAt: -1 });

    // 3) Activity aggregated - total minutes per day (or per activity)
    const activityAgg = await ActivitySession.aggregate([
      { $match: { user: require('mongoose').Types.ObjectId(userId) } },
      { $group: {
          _id: {
            date: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } },
            activity: "$activity"
          },
          totalMinutes: { $sum: "$durationMinutes" },
          count: { $sum: 1 }
      }},
      { $sort: { "_id.date": -1 } }
    ]);

    // convert aggregation to friendly structure
    const activitiesByDate = {};
    activityAgg.forEach(a => {
      const date = a._id.date;
      if (!activitiesByDate[date]) activitiesByDate[date] = [];
      activitiesByDate[date].push({
        activity: a._id.activity,
        totalMinutes: a.totalMinutes,
        sessions: a.count
      });
    });

    // 4) Weekly mood averages (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    sevenDaysAgo.setHours(0,0,0,0);

    const recentMoods = await Mood.find({
      user: userId,
      timestamp: { $gte: sevenDaysAgo }
    });

    // convert mood labels to scores (same mapping as you use)
    const moodScore = { delighted:5, happy:4, calm:3, sad:2, angry:1 };

    const moodByDate = {};
    recentMoods.forEach(m => {
      const dateKey = m.timestamp.toISOString().split('T')[0];
      if (!moodByDate[dateKey]) moodByDate[dateKey] = [];
      moodByDate[dateKey].push(m.mood);
    });

    const weekly = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const k = d.toISOString().split('T')[0];
      const list = moodByDate[k] || [];
      if (list.length === 0) {
        weekly.push({ date: k, averageScore: null, averageMood: null, entries: 0 });
      } else {
        const total = list.reduce((s, lab) => s + (moodScore[lab]||0), 0);
        const avg = total / list.length;
        // find closest mood label
        const closest = Object.keys(moodScore).reduce((prev, curr) =>
          Math.abs(moodScore[curr]-avg) < Math.abs(moodScore[prev]-avg) ? curr : prev
        );
        weekly.push({ date: k, averageScore: +avg.toFixed(2), averageMood: closest, entries: list.length });
      }
    }

    // 5) Streak: count consecutive days up to today having at least one mood entry
    // get last 30 days of mood dates
    const last30 = new Date();
    last30.setDate(last30.getDate() - 30);
    const moods30 = await Mood.find({ user: userId, timestamp: { $gte: last30 } }).sort({ timestamp: -1 });
    const daysWithMood = new Set(moods30.map(m => startOfDay(m.timestamp).toISOString()));
    let streak = 0;
    let dayPointer = startOfDay(new Date());
    while (daysWithMood.has(dayPointer.toISOString())) {
      streak++;
      dayPointer.setDate(dayPointer.getDate() - 1);
    }

    res.json({
      journals,
      quickNotes,
      activitiesByDate,
      weeklyMood: weekly.reverse(), // from oldest to newest
      streak
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error building progress', error: err.message });
  }
};

module.exports = { getProgress };
