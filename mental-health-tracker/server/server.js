require('dotenv').config();

const cors = require("cors");
<<<<<<< HEAD
const app = express();
=======
>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)
app.use(cors());

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const journalRoutes = require('./routes/journals');
const moodRoutes = require('./routes/moods');
<<<<<<< HEAD
const cors = require("cors");

<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
=======
const app = express();
app.use(cors());
>>>>>>> 0a19a0ade053e079a651071c271b7981cb27ec07

const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
=======

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)
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
