const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  let currentUser = await User.getUserByName(req.body.username);

  bcrypt.compare(req.body.password, currentUser.password, function(
    err,
    result
  ) {
    if (result) {
      req.session.logged = true;
      req.session.name = currentUser._id;
      res.json(currentUser._id);
    } else res.send("Username or password is invalid");
  });
});
router.get("/", async (req, res) => {
  if (req.session.logged) {
    res.json(req.session.name);
  } else {
    res.send(
      JSON.stringify({
        validationError: "This username or email is already in use!"
      })
    );
  }
});

module.exports = router;
