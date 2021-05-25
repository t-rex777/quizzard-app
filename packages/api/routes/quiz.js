const {
  getQuizById,
  getAllQuiz,
  getQuiz,
  createQuiz,
} = require("../controllers/quiz");
const express = require("express");
const router = express.Router();

router.param("quizId", getQuizById);

router.get("/quizzes", getAllQuiz);
router.get("/quiz/:quizId", getQuiz);
router.post("/quiz/create", createQuiz);

module.exports = router;
