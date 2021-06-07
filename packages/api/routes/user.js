const express = require("express");
const router = express.Router();
const {
  authenticateToken,
  getUser,
  signup,
  signin,
  updateUser,
} = require("../controllers/user");


router
  .post("/signup", signup)
  .post("/signin", signin);

router
  .use(authenticateToken)
  .get("/user", getUser)
  .post("/user/update", updateUser);

module.exports = router;
