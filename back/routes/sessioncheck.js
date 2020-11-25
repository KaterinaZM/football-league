const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
    if (req.session.name) {
        console.log(req.session, '<<<<<< profileinfo.js line 8');
        let currentUser = await User.findById(req.session.name);
        console.log(currentUser);
        res.send({
            username: currentUser.username,
            friends: currentUser.friends,
            leagues: currentUser.leagues,
            stats: currentUser.stats
        });
    } else {
        res.send(false)
    }
});

module.exports = router;

