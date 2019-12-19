const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const leagueSchema = new mongoose.Schema({
  leagueName: String,
  creator: ObjectID,
  startDate: Date,
  endDate: Date,
  totalUsers: Number,
  usersHistory: Array,
  users: Array,
  teams: Array,
  events: Array,
  leagueStats: Array,
  started: Boolean
});

module.exports = mongoose.model("League", leagueSchema);
