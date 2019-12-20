const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const League = require("../models/league");

router.post("/", async (req, res) => {
  let { winnerInd, eventID, leagueID } = req.body;
  console.log(eventID);
  console.log(leagueID);
  console.log(winnerInd);

  let foundLeague = await League.findById(leagueID);

  for (let i = 0; i < foundLeague.events.length; i++) {
    if (foundLeague.events[i]._id === eventID) {
      console.log("found an event by id");
      foundLeague.events[i].winner = JSON.parse(
        JSON.stringify(foundLeague.events[i].teams[winnerInd])
      );
      //   foundLeague.teams.push(foundLeague.events[i].teams[winnerInd]);
      console.log("cghvjn hvhvbnb mb hjbnjbhj");

      console.log(foundLeague.events[i].teams);
    }
  }
  foundLeague.markModified("events");
  foundLeague.markModified("teams");
  await foundLeague.save();
  console.log(foundLeague);
  //   let currentEvent = await Event.findById({ _id: eventID });
  //   let winnerTeam = currentEvent.teams[winner];
  //   currentEvent.winner = winnerTeam;
  //   await currentEvent.save();
  //   console.log(currentEvent);
  res.end();
});

router.post("/submit", async (req, res) => {
  let leagueID = req.body.leagueID;
  console.log(leagueID);

  let foundLeague = await League.findById(leagueID);
  console.log(foundLeague);

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
