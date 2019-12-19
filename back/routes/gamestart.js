const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Teams = require("../models/team");
const Users = require("../models/user");
// const News = require("../models/news");
const splitToTeams = require("../scripts/randomizers");

router.get("api/gamestart", async (req, res) => {
  let foundLeague = await League.findById(req.body.leagueID);
  foundLeague.started = true;
  splitToTeams(foundLeague.users, foundLeague.teams);
  console.log(foundLeague.teams);

  let foundUser = await Users.find({ _id: foundLeague.creator });

  foundUser[0].currentLeague = req.body.leagueID;
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
