const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/', async (req, res) => {
    console.log(req.body);
    const validateUsername = await User.findOne({
        name: req.body.username,
    })

    const validateEmail = await User.findOne({
        email: req.body.email,
    })
    if (validateUsername || validateEmail) {
        res.send(JSON.stringify({ validationError: 'This username or email is already in use!' }))
    } else {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            let newUser = new User({
                username: req.body.username,
                password: hash,
                email: req.body.email,
            });
            await newUser.save();
            console.log(newUser);

        });
        res.send(JSON.stringify({ successMessage: 'Success' }));
    }
})


module.exports = router;