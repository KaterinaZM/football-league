const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
// const News = require("../models/news");
// const {
//   splitToTeams,
//   randomPair,
//   randomInt
// } = require("../scripts/randomizers");
const splitToTeams = require("../scripts/randomizers");

router.post("/", async (req, res) => {
  console.log(req.body.leagueID);

  let foundLeague = await League.findById(req.body.leagueID);
  foundLeague.started = true;
  splitToTeams(foundLeague.users, foundLeague.teams);
  console.log(foundLeague);

  let foundUser = await Users.findOne({ _id: foundLeague.creator });
  console.log(foundUser);

  foundUser.currentLeague = req.body.leagueID;
  await foundUser.save();
  // let news = new News({
  //   title: "League started!",
  //   msg: `${foundLeague.leagueName} has just started!`
  // });
  await foundLeague.save();
  console.log("success!");

  res.send(JSON.stringify(foundLeague));
});

module.exports = router;
