const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema({
  leagueName: String,
  startDate: Date,
  endDate: Date,
  users: Array,
  teams: Array
});

module.exports = mongoose.model("League", leagueSchema);
