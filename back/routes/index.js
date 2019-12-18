const express = require("express");
const router = express.Router();
const League = require('../models/league')

// find events the user is part of
router.get("/api/profile", async (req, res) => {
  const leagues = await League.findById({_id: id })
  const events = leagues.events
  res.send(leagues);
});

module.exports = router;
