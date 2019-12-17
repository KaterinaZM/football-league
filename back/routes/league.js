const express = require("express");
const router = express.Router();
const Users = require("../models/user");
const splitToTeams = require("../scripts/randomizers");
// const sgMail = require('@sendgrid/mail');

router.get('/leagues', async (req, res) => {
  const leagues = await League.find()
  res.send(JSON.stringify(leagues));
})

router.post("/newleague", async (req, res) => {
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY); SENDS EMAIL NOTIFICATION
  // const msg = {
  //   to: 'katerina.sobetskaia@gmail.com',
  //   from: 'katerina.zabrovskaya@gmail.com',
  //   subject: 'New League was created. Ready to play?',
  //   text: 'You created a new league, lets wait for others to register for it.',
  // };
  console.log(msg);
  let newLeague = await new League({
    leagueName: req.body.leagueName,
    creator: req.body.userID,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    users: [],
    teams: [],
    events: [],
    leagueStats: []
  }).save();
  console.log(newLeague._id);

  res.send(JSON.stringify(newLeague._id));
  // sgMail.send(msg);
});

router.post("/leagues/:id", async (req, res) => {
  const id = req.body.id;
  const league = await League.findById({ _id: id })
  const userPool = league.users;
  res.send(JSON.stringify(userPool));
})

router.post("/newplayer", async (req, res) => {
  let leagueToJoin = await League.findById(req.body.leagueID);
  let reqUser = await Users.findById(req.body.userID);
  leagueToJoin.users.push(reqUser._id).save();
  res.send(JSON.stringify(newLeague.users));
});

module.exports = router;

