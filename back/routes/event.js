const express = require("express");
const router = express.Router();
const League = require("../models/league");
const Event = require("../models/event");
const Teams = require("../models/team");
const Users = require("../models/user");
const splitToTeams = require("../scripts/randomizers");

router.post("/eventlist", async (req, res) => {

  let foundLeague = await League.findOne({ _id: req.body.currentLeagueID });
  res.send(JSON.stringify(foundLeague));
});

router.post("/eventcreator", async (req, res) => {

  let foundLeague = await League.findOne({ _id: req.body.currentLeagueID });

  let iterations = Math.ceil(foundLeague.teams.length / 2);
  for (let i = 0; i < iterations; i++) {
    if (foundLeague.teams.length > 1) {

      let firstEl = foundLeague.teams[0];

      let secondEl = foundLeague.teams[1];
      let newEvent = {
        name: `Game ${i}`,
        leagueName: foundLeague._id,
        date: Date.now(),
        teams: [],
        winner: {},
        _id: String(Math.random()).slice(2)
      };
      // let newEvent = await new Event({
      //   name: `Game ${i}`,
      //   leagueName: foundLeague._id,
      //   date: Date.now(),
      //   teams: []
      // });
      newEvent.teams.push(firstEl, secondEl);

      foundLeague.teams.splice(0, 2);
      // await newEvent.save();
      foundLeague.events.push(newEvent);
      await foundLeague.save();
    } else {
      let firstEl = foundLeague.teams[0];
      let newEvent = {
        name: `Game ${i}`,
        leagueName: foundLeague._id,
        date: Date.now(),
        teams: [],
        winner: {}
      };
      // let newEvent = await new Event({
      //   name: `Game ${i}`,
      //   leagueName: foundLeague._id,
      //   date: Date.now(),
      //   teams: []
      // });
      newEvent.teams.push(firstEl);
      newEvent.winner = firstEl;

      foundLeague.teams.splice(0, 1);
      // await newEvent.save();
      foundLeague.events.push(newEvent);
      await foundLeague.save();
    }
  }

  res.send(JSON.stringify(foundLeague));
});

module.exports = router;
