const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
    try {
        console.log(req.session);
        let currentUser = await User.findById(req.session.name);
        console.log(currentUser);
        res.send({
            username: currentUser.username,
            friends: currentUser.friends,
            leagues: currentUser.leagues,
            stats: currentUser.stats
        });
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;

