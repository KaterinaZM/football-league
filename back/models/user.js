const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  teams: Array,
});

userSchema.statics.getUserByName = async function (username) {
  return await this.findOne({ username });
}
module.exports = mongoose.model('User', userSchema);
