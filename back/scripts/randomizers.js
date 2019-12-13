const Teams = require("../models/team");
const faker = require("faker");
const randomName = faker.fake("{{random.word}}");

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
  let newArr = [...users];
  if (newArr.length > 1) {
    let pair = randomPair(newArr);
    let team = {
      title: randomName,
      participants: [...pair]
    };
    teams.push(team);
    splitToTeams(newArr);
  } else if (newArr.length === 1) {
    console.log("users length is 1");
    let team = {
      title: randomName,
      participants: [...users]
    };
  }
}

module.exports = splitToTeams;
