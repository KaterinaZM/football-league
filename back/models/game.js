const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date: Date,
  time: Date,
  teams: Array,
});

module.exports = mongoose.model('Game', gameSchema);