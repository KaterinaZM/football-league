const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
const splitToTeams = require("../scripts/randomizers");

router.post("/", async (req, res) => {

  let foundUser = await Users.find({ _id: req.body.userID });

  foundUser[0].currentLeague = req.body.leagueID;
  await foundUser.save();

});

module.exports = router;
