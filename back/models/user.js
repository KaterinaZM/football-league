const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  teams: Array,
});

module.exports = mongoose.model('User', userSchema);
