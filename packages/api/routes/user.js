const {
  getUserById,
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.param("userId", getUserById);

router.get("/users", getAllUsers);
router.get("/user/:userId", getUser);
router.post("/user/create", createUser);

module.exports = router;
