const express = require("express");
const router = express.Router();
const Leagues = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
const Players = require("../models/player");
const splitToTeams = require("../scripts/randomizers");

async function createLeague() {
  let newLeague = new Leagues({
    leagueName: req.body.leagueName,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    users: [],
    teams: []
  }).save();
}
