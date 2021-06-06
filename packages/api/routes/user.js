const {
  getUserById,
  authenticateToken,
  getAllUsers,
  getUser,
  createUser,
  signup,
  signin,
} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.param("userId", getUserById);

router.get("/users",getAllUsers)
.get("/user",authenticateToken, getUser)
.get("/signin",signin)
.post("/user/create", createUser)
.post("/signup", signup)

module.exports = router;
