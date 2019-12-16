const express = require("express");
const router = express.Router();
const Leagues = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
const Players = require("../models/player");
const splitToTeams = require("../scripts/randomizers");

router.post("api/newleague", async (req, res) => {
  let newLeague = new Leagues({
    leagueName: req.body.leagueName,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    users: [],
    teams: []
  }).save();

  res.send(JSON.stringify(newLeague._id));
});

router.post("api/newplayer", async (req, res) => {
  let leagueToJoin = await Leagues.findById(req.body.leagueID);
  let reqUser = await Users.findById(req.body.userID);
  leagueToJoin.users.push(reqUser._id).save();
  res.send(JSON.stringify(newLeague.users));
});


