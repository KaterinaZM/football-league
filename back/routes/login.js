const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  if (req.body.username) {
    let currentUser = await User.getUserByName(req.body.username);
    if (currentUser !== null) {
      bcrypt.compare(req.body.password, currentUser.password, function (
        err,
        result
      ) {
        if (result) {
          req.session.logged = true;
          req.session.name = currentUser._id;
          res.json(currentUser._id);
        } else res.json(false);
      });
    } else {
      console.log("kapez");
      res.json({ error: "dkfdfg" })
    }
  } else {
    console.log("kapez");

    res.json({ error: "dkfdfg" })
  }
});
router.get("/", (req, res) => {
  try {
    if (req.session.logged) {
      res.json(req.session.name);
    } else {
      res.json(false);
    }
  } catch (e) {
    console.log('>>>>>>', e);

  }
});

module.exports = router;
