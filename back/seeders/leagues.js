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

let usersArray = [
  {
    username: "Oleg",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Anton",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Ivan",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Peter",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Vitya",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Misha",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Denis",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Andrey",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Leonid",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Agutin",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Philipp",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  },
  {
    username: "Maxim",
    email: "test@test.ru",
    password: "123",
    friends: [],
    leagues: [],
    stats: [],
    _id: Math.random(),
    currentLeague: ""
  }
];

async function fakeLeague() {
  let firstUser = await User.find();
  let newLeague = await new League({
    leagueName: "ESKO",
    creator: firstUser[0]._id,
    startDate: 2020,
    endDate: 2021,
    usersHistory: [...usersArray],
    users: [...usersArray],
    teams: [],
    events: [],
    leagueStats: []
  }).save();
}
fakeLeague();
