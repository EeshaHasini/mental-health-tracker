require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect('mongodb+srv://EeshaHasini:eesha2007@cluster0.mupjk3x.mongodb.net/ekamind?retryWrites=true&w=majority&appName=Cluster0', {

})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));

app.get('/', (req, res) => {
  res.send('✅ Server is up');
});

app.use('/api/auth', authRoutes);
console.log('✅ authRoutes loaded');

const protectedRoutes = require('./routes/protected');
app.use('/api', protectedRoutes);

const journalRoutes = require('./routes/journals');
app.use('/api/journals', journalRoutes);

const moodRoutes = require('./routes/moods');
app.use('/api/moods', moodRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
