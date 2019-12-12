const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  title: String,
  participants: Array,
  games: Array,
});

module.exports = mongoose.model('Team', teamSchema);