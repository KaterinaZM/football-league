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
    console.log(`result is ${teams}`);
    splitToTeams(users, teams);
  } else if (users.length === 1) {
    console.log("users length is 1");
    let team = {
      title: faker.fake("{{random.word}}"),
      participants: [...users]
    };
    users.splice(0, 1);
    teams.push(team);
  }
}

//testing area

// let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let outputArr = [];

// splitToTeams(testArr, outputArr);
// console.log(testArr);
// console.log(outputArr);

module.exports = splitToTeams;
