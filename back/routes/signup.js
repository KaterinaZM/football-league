const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {

    let username = req.body.username
    let email = req.body.email

    let findUserName = await User.findOne({ username })
    let findUserEmail = await User.findOne({ email })

    if (findUserName) {
        const errorName = `${username} занято, введите другое имя.`
        res.send({errorName})
    
    } else if (findUserEmail) {
        const errorEmail = `${email} занят, введите другой email.`
        res.send({errorEmail})
    
    } else {
    
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            const user = await new User ({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            })

            await user.save()
            console.log(user)
            res.send({ user })
        });
    }
})


module.exports = router;