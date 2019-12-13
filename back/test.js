const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/football-league`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Teams = require("./models/team");
const Users = require("./models/user");
const Players = require("./models/player");

function userToPlayer(userID) {
  let reqUser = Users.find({ _id: userID });
  let reqUserID = reqUser._id;
}
