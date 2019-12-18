const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
  let currentUser = await User.findById(req.body.userID);
  res.send({
    username: currentUser.username,
    friends: currentUser.friends,
    leagues: currentUser.leagues,
    stats: currentUser.stats
  });
} catch(e) {
  console.error(e);
  
}
});
module.exports = router;
