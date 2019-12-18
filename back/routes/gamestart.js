const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
const splitToTeams = require("../scripts/randomizers");

router.get("api/gamestart", async (req, res) => {
  let foundLeague = await League.findById(req.body.id);
  let playerPool = foundLeague.users;
  let teamsPool = foundLeague.teams;
  splitToTeams(playerPool, teamsPool);
  console.log("success!");
  let teams = await Teams.find();

  res.send(JSON.stringify(teams));
});


module.exports = router;
