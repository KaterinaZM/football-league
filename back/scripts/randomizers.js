const Teams = require("../models/team");
const faker = require("faker");

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function randomPair(array) {
  if (array.length > 1) {
    let ind1 = randomInt(0, array.length);
    let pl1 = array[ind1];
    array.splice(ind1, 1);
    let ind2 = randomInt(0, array.length);
    let pl2 = array[ind2];
    array.splice(ind2, 1);

    let pair = [pl1, pl2];
    return pair;
  } else {
    let pair = [...array];
    return pair;
  }
}

function splitToTeams(users, teams) {
  if (users.length > 1) {
    let pair = randomPair(users);
    let team = {
      title: faker.fake("{{random.word}}"),
      participants: [...pair]
    };
    teams.push(team);
    splitToTeams(users, teams);
  } else if (users.length === 1) {
    let team = {
      title: faker.fake("{{random.word}}"),
      participants: [...users]
    };
    users.splice(0, 1);
    teams.push(team);
  }
}


module.exports = splitToTeams;
