require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const journalRoutes = require('./routes/journals');
const moodRoutes = require('./routes/moods');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));

app.get('/', (req, res) => {
  res.send('✅ Server is up and running');
});

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/moods', moodRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
