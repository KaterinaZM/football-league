const express = require("express");
const router = express.Router();
const League = require("../models/league");

router.post('/', async (req, res) => {
    let userID = req.body.userID;
    let userName = req.body.userName;
    let leagueName = req.body.leagueName;
    let currentLeague = await League.findOne({ leagueName });
    currentLeague.users = { userName, userID };
    currentLeague.usersHistory = { userName, userID };
    await currentLeague.save();
    res.send(JSON.stringify("success"));
})
module.exports = router;
