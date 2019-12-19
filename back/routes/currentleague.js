const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
const splitToTeams = require("../scripts/randomizers");

router.post("/", async (req, res) => {
  console.log(req.body.leagueID, req.body.userID);

  let foundUser = await Users.find({ _id: req.body.userID });
  foundUser.currentLeague = req.body.leagueID;

  let currentLeague = await League.find({ _id: req.body.leagueID });

  let usersArr = [...currentLeague[0].users];
  console.log(`массив юзеров из базы ${usersArr}`);

  let teamsArr = [...currentLeague[0].teams];
  console.log(`массив teams из базы ${teamsArr}`);
  splitToTeams(usersArr, teamsArr);
  console.log(`Total: ${usersArr}, ${usersArr}`);

  currentLeague[0].users = [...usersArr];
  currentLeague[0].teams = [...teamsArr];
  await currentLeague[0].save();
  console.log(currentLeague);
});

module.exports = router;
