const User = require("../models/user");

//middleware
exports.getUserById = async (req, res, next, userId) => {
  const user = await User.findById(userId);
  try {
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//read
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  try {
    res.json(users);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getUser = (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// create
exports.createUser = async (req, res) => {
  try {
    const user = await User.insertMany([
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "admin",
      },
    ]);
    res.json(user)
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
