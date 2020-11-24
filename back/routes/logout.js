const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {

    if (req.session.name) {
        console.log('logout');
        try {
            await req.session.destroy();
            console.log(req.session);
            res.clearCookie("user_sid");
            res.json({
                success: true
            })
        } catch (error) {
            next(error);
        }
    } else {
        res.send(JSON.stringify("/signin"));
    }
});

module.exports = router;
