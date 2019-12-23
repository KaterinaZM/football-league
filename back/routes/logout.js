const express = require("express");
const router = express.Router();
// router.get('/', async (req, res) => {
//     req.session.destroy();

//     res.send(JSON.stringify(
//         "Session was destroyed")
//     );
// })

router.get("/", async (req, res, next) => {

    if (req.session.name) {
        try {
            await req.session.destroy();
            res.clearCookie("user_sid");
            res.json({
                success: true
            })
            //res.next();
        } catch (error) {
            console.error(error);
            
            next(error);
        }
    } else {
        res.send(JSON.stringify("/signin"));
    }
});
module.exports = router;
