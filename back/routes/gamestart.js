const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Users = require("../models/user");
const News = require("../models/news");
const splitToTeams = require("../scripts/randomizers");

router.get("/", async (req, res) => {
  let foundLeague = await League.findById(req.body.leagueID);
  foundLeague.started = true;
  splitToTeams(foundLeague.users, foundLeague.teams);
  
  await foundLeague.save();
  let foundUser = await Users.find({ _id: foundLeague.creator });

  foundUser[0].currentLeague = req.body.leagueID;
  await foundUser.save();


  new News({
    title: "League started!",
    msg: `${foundLeague.leagueName} has just started!`
  }).save()

  res.send(JSON.stringify(foundLeague));
});

module.exports = router;
