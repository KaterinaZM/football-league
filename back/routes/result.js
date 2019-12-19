const express = require("express");
const router = express.Router();
const Event = require("../models/event");

router.post('/result', async (req, res) => {
    let eventId = req.body.id;
    let winner = req.body.winnet;
    let currentEvent = await Event.findById({ _id: eventId });
    currentEvent.winner = winner;
    await currentEvent.save();
    console.log(currentEvent);
    res.end();
});

module.exports = router;