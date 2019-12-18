const mongoose = require("mongoose");
const faker = require("faker");
const User = require("../models/user");

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

async function fakeUsers() {
  for (let i = 0; i < 30; i++) {
    const randomName = faker.fake("{{internet.userName}}");
    const randomEmail = faker.fake("{{internet.email}}");

    let user = await new User({
      username: randomName,
      email: randomEmail,
      password: 123,
      friends: [],
      leagues: [],
      stats: {
        games: randomInt(0, 100),
        wins: randomInt(0, 100),
        goals: randomInt(0, 1000)
      }
    }).save();
  }
}

fakeUsers();
