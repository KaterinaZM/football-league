const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const leagueSchema = new mongoose.Schema({
  leagueName: String,
  creator: ObjectID,
  startDate: Date,
  endDate: Date,
  users: Array,
  teams: Array,
  events: Array,
  leagueStats: Array
});

module.exports = mongoose.model("League", leagueSchema);
