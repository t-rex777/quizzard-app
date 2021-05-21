const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    score: Number,
    quizCompleted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User",userSchema);