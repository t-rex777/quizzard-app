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
    let finalUsers = [];
    users.forEach((user) => {
      const { _id, name, email, password, quizCompleted } = user;
      finalUsers = [
        ...finalUsers,
        { _id, name, email, password, quizCompleted },
      ];
    });
    res.json(finalUsers);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getUser = (req, res) => {
  try {
    const user = req.user;
    const { _id, name, email, password, quizCompleted } = user;
    res.json({ _id, name, email, password, quizCompleted });
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
    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
