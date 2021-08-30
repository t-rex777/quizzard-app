const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    thumbnail: String,
    backgroundImage: String,
    quizzes: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);
