const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  msg: String,
});

module.exports = mongoose.model("News", newsSchema);