const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  username: String,
  team: String || ""
});

module.exports = mongoose.model("Player", playerSchema);
