const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { extend, concat } = require("lodash");

//middleware
exports.authenticateToken = (req, res, next) => {
  try {
    if (
      !req.headers["authorization"] &&
      typeof req.headers["authorization"] !== "string"
    ) {
      return res.status(400).json({
        message: "no token found",
      });
    }
    const accessToken = req.headers["authorization"].split(" ")[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.userId = user._id;
    return next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//read

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { _id, name, email, quizCompleted } = user;
    res.json({ _id, name, email, quizCompleted });
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

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    if (savedUser === undefined) {
      return res.json({
        message: "user does not saved! please try again!",
      });
    }
    res.json({ user });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user === undefined) {
      return res.status(404).json({
        message: "no user found!",
      });
    } else {
      if (user.securePassword(password) !== user.encrypted_password) {
        return res.status(401).json({
          message: "password does not match! check again!",
        });
      }
      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(
        { userId: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { _id, email, name, score, quizCompleted } = user;
      const userData = { _id, email, name, score, quizCompleted };
      res.json({ userData, accessToken, refreshToken });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createNewTokens = (req, res) => {
  if (
    !req.headers["refresh-token"] &&
    typeof req.headers["refresh-token"] !== "string"
  ) {
    return res.status(401).json({
      message: "No refresh tokens found",
    });
  }

  try {
    const oldRefreshToken = req.headers["refresh-token"].split(" ")[1];
    const { userId } = jwt.verify(
      oldRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const refreshToken = jwt.sign(
      { userId: userId },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );
    const accessToken = jwt.sign({ userId: userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(401).json({
      message: "refresh token cannot be verified! please check it again.",
    });
  }
};

// update
exports.updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let updatedUser = req.body;
    const quizId = updatedUser.quiz;
    let filteredUser = user.quizCompleted.filter((data) =>
       data.quiz != quizId
    );
    updatedUser = extend(user, {
      quizCompleted: [updatedUser, ...filteredUser],
    });

    const savedUser = await updatedUser.save();
    if (savedUser === undefined) {
      return res.status(400).json({
        message: "user did not updated!",
      });
    }
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
