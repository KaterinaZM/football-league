const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/api/login', async (req, res) => {
    let currentUser = await User.getUserByName(req.body.username);
    bcrypt.compare(req.body.password, currentUser.password, function (err, result) {
        if (result) {
            req.session.logged = true;
            req.session.name = req.body.username;
            res.json(true)
        } else res.send('Username or password is invalid');
    })
})