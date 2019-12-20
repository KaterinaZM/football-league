const express = require("express");
const router = express.Router();
const Users = require("../models/user");
const League = require("../models/league");
const {
  splitToTeams,
  randomPair,
  randomInt
} = require("../scripts/randomizers");
const News = require("../models/news");
const sgMail = require('@sendgrid/mail');

router.get("/news", async (req, res) => {
  const news = await News.find();
  res.send(JSON.stringify(news));
});

router.get("/leagues", async (req, res) => {
  const leagues = await League.find();
  res.send(JSON.stringify(leagues));
});

router.post("/newleague", async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'katerina.sobetskaia@gmail.com',
    from: 'katerina.zabrovskaya@gmail.com',
    subject: 'New League was created. Ready to play?',
    text: 'You created a new league, lets wait for others to register for it.',
  };

  let newLeague = await new League({
    leagueName: req.body.leagueName,
    creator: req.body.creator,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    users: [],
    teams: [],
    events: [],
    leagueStats: [],
    started: false
  }).save();

  let newNews = await new News({
    title: "New League",
    msg: req.body.leagueName + " " + "was created"
  }).save();

  let creatorUser = await Users.findById(req.body.creator);
  creatorUser.leagues.push(newLeague);
  await creatorUser.save();
  console.log(creatorUser.leagues);

  // console.log(newLeague._id);

  res.send(JSON.stringify(newLeague._id));
  sgMail.send(msg);
});

router.post("/leagues/:id", async (req, res) => {
  const id = req.body.id;
  const league = await League.findById({ _id: id });
  const userPool = league;
  res.send(JSON.stringify(userPool));
});

router.post("/newplayer", async (req, res) => {
  let leagueToJoin = await League.findById(req.body.leagueID);
  let reqUser = await Users.findById(req.body.userID);
  leagueToJoin.users.push(reqUser._id).save();
  res.send(JSON.stringify(newLeague.users));
});

module.exports = router;
