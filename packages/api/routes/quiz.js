const express = require("express");
const router = express.Router();
const {
  getQuizById,
  getAllQuiz,
  getQuiz,
  createQuiz,
} = require("../controllers/quiz");

router.param("quizId", getQuizById);

router
  .get("/quizzes", getAllQuiz)
  .get("/quiz/:quizId", getQuiz)
  .post("/quiz/create", createQuiz);

module.exports = router;
