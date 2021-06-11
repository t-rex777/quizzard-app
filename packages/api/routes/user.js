const express = require("express");
const router = express.Router();
const {
  authenticateToken,
  getUser,
  signup,
  signin,
  updateUser,
  createNewTokens,
} = require("../controllers/user");

router
  .get("/token/access", createNewTokens)
  .post("/signup", signup)
  .post("/signin", signin);

router
  .use(authenticateToken)
  .get("/user", getUser)
  .post("/user/update", updateUser);

module.exports = router;
