const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    quizzes: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);
