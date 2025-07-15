// server.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // 👈 add your auth routes here

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // to parse incoming JSON

// Test route
app.get('/', (req, res) => {
  res.send('✅ Backend is up and running!');
});

// Mount routes
app.use('/auth', authRoutes); // e.g., POST /auth/register

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
