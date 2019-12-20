const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const eventSchema = new mongoose.Schema({
  name: String,
  leagueName: ObjectID,
  date: Date,
  teams: Array,
  eventStats: Array,
  winner: Object
});

module.exports = mongoose.model("Event", eventSchema);
