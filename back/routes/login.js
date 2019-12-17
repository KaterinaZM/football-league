const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    let currentUser = await User.getUserByName(req.body.username);

    bcrypt.compare(req.body.password, currentUser.password, function (err, result) {
        if (result) {
            req.session.logged = true;
            req.session.name = currentUser._id;
            //req.session.name = req.body.username;
            console.log(req.session);

            res.json(currentUser._id);

        } else res.send('Username or password is invalid');
    })
})

module.exports = router;