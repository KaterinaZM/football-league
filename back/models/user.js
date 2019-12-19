const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  friends: Array,
  leagues: Array,
  // stats - объект с ключами: games, wins, goals, etc. Эти ключи будут изменяться по мере завершения игр.
  stats: Object,
  currentLeague: ObjectID
});

userSchema.statics.getUserByName = async function(username) {
  return await this.findOne({ username });
};
module.exports = mongoose.model("User", userSchema);
