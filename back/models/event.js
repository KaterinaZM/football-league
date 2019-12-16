const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const eventSchema = new mongoose.Schema({
  leagueName: ObjectID,
  date: Date,
  teams: Array,
  eventStats: Array,
  winner: ObjectID
});

module.exports = mongoose.model("Event", eventSchema);
