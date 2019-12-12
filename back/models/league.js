const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  users: Array,
  teams: Array,
});

module.exports = mongoose.model('League', leagueSchema);