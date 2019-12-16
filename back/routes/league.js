const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
const Players = require("../models/player");
const splitToTeams = require("../scripts/randomizers");


router.post("/newleague", async (req, res) => {

  let newLeague = await new League({
    leagueName: req.body.leagueName,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    users: [],
    teams: []
  }).save();

  res.send(JSON.stringify(newLeague._id));
});

router.post("/leagues/:id", async (req, res) => {
  const id = req.body.id;
  const league = await League.findById({ _id: id })
  const userPool = league.users;
  res.send(JSON.stringify(userPool));
})

router.post("api/newplayer", async (req, res) => {
  let leagueToJoin = await League.findById(req.body.leagueID);
  let reqUser = await Users.findById(req.body.userID);
  leagueToJoin.users.push(reqUser._id).save();
  res.send(JSON.stringify(newLeague.users));
});

module.exports = router;