const express = require("express");
const router = express.Router();
const League = require('../models/league')

router.get("/", async (req, res) => {
  const leagues = await League.find()
  res.send(leagues);
});

router.post('/', async (req, res) => {
  const startDate = Date.now();
  const endDate = new Date(Date.now() + 12096e5);
  await League.create({ startDate: startDate, endDate: endDate, users: [], teams: [] });
  res.end();
})

module.exports = router;
