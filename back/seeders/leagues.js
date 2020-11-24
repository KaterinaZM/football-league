const mongoose = require("mongoose");
const faker = require("faker");
const User = require("../models/user");
const League = require("../models/league");

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

mongoose.Promise = global.Promise;
require("dotenv").config({ path: '../.env' });

mongoose.connect(
  process.env.ATLAS_URL,
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

  await new League({
    leagueName: "League 2021-2022",
    creator: firstUser[0]._id,
    startDate: 2021,
    endDate: 2022,
    usersHistory: [...newArr],
    users: [...newArr],
    teams: [],
    events: [],
    leagueStats: []
  }).save();
}
fakeLeague();
