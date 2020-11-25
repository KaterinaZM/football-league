const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  if (req.session.name) {
    console.log(req.session, '<<<<<< login.js line 10');
    let currentUser = await User.findById(req.session.name);
    console.log(currentUser);
    res.send({
      username: currentUser.username,
      friends: currentUser.friends,
      leagues: currentUser.leagues,
      stats: currentUser.stats
    });
  } else {
    res.json(false);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body, "login.js router.post/login checking what comes for req.body");
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
