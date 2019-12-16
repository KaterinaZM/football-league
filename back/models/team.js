const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  title: String,
  players: Array,
  
});

module.exports = mongoose.model('Team', teamSchema);