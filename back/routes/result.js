const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const League = require("../models/league");

router.post("/", async (req, res) => {
  let { winnerInd, eventID, leagueID } = req.body;

  let foundLeague = await League.findById(leagueID);

  for (let i = 0; i < foundLeague.events.length; i++) {
    if (foundLeague.events[i]._id === eventID) {
      foundLeague.events[i].winner = JSON.parse(
        JSON.stringify(foundLeague.events[i].teams[winnerInd])
      );
    }
  }
  foundLeague.markModified("events");
  foundLeague.markModified("teams");
  await foundLeague.save();
  res.end();
});

router.post("/submit", async (req, res) => {
  let leagueID = req.body.leagueID;

  let foundLeague = await League.findById(leagueID);

  foundLeague.teams = [];

  for (let i = 0; i < foundLeague.events.length; i++) {
    if (foundLeague.events[i].winner.title) {
      foundLeague.teams.push(foundLeague.events[i].winner);
    }
  }
  foundLeague.events = [];
  foundLeague.markModified("events");
  foundLeague.markModified("teams");

  await foundLeague.save();
  res.send(JSON.stringify(foundLeague));
});
module.exports = router;
