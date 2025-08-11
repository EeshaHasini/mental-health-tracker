
const mongoose = require('mongoose');

const ActivitySessionSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true 
  },
  activity: { 
    type: String, 
    required: true 
  },
  durationMinutes: { 
    type: Number, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('ActivitySession', ActivitySessionSchema);
