const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    if (req.session) {
      // res.json(req.session.name);
      console.log(req.session);
      res.redirect('/api/profileinfo')

      // let currentUser = await User.findById(req.session.name);
      // res.send({
      //   id: req.session.name,
      //   username: currentUser.username,
      //   friends: currentUser.friends,
      //   leagues: currentUser.leagues,
      //   stats: currentUser.stats
      // });
    } else {
      res.json(false);
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  if (req.body.username) {
    let currentUser = await User.getUserByName(req.body.username);

    if (currentUser !== null) {
      bcrypt.compare(req.body.password, currentUser.password, function (
        err,
        result
      ) {
        if (result) {
          req.session.name = currentUser._id;
          res.json(currentUser._id);
        } else res.json(false);
      });
    } else {
      res.json({ error: err })
    }
  } else {
    res.json({ error: `error! Req.body.username is equal to ${req.body.username}` })
  }
});

module.exports = router;
