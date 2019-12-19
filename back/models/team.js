const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  players: Array,
  
});

module.exports = mongoose.model('Team', teamSchema);