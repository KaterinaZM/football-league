const mongoose = require("mongoose");
const faker = require("faker");
const User = require("../models/user");
const League = require("../models/league");

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

mongoose.Promise = global.Promise;
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://SkaterinaM:Project2019!@cluster0-l6msd.mongodb.net/footballleague?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

async function fakeLeague() {
  let firstUser = await User.find();
  let newArr = [];
  firstUser.map(el => {
    newArr.push({ username: el.username, _id: el._id });
  });
  console.log(newArr);
  console.log(">>>>>>>>>>5");

  let newLeague = await new League({
    leagueName: "That one test 20.12.19",
    creator: firstUser[0]._id,
    startDate: 2020,
    endDate: 2021,
    usersHistory: [...newArr],
    users: [...newArr],
    teams: [],
    events: [],
    leagueStats: []
  }).save();
}
fakeLeague();
