const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  friends: Array,
  leagues: Array,
  // stats - объект с ключами: games, wins, goals, etc. Эти ключи будут изменяться по мере завершения игр.
  stats: Array
});

userSchema.statics.getUserByName = async function(username) {
  return await this.findOne({ username });
};
module.exports = mongoose.model("User", userSchema);
