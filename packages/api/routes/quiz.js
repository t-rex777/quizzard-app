const express = require("express");
const router = express.Router();
const {
  getQuizById,
  getAllQuiz,
  getQuiz,
  createQuiz,
} = require("../controllers/quiz");
const { authenticateToken } = require("../controllers/user");

router.param("quizId", getQuizById);

router
  // .use(authenticateToken)
  .get("/quizzes", getAllQuiz)
  .get("/quiz/:quizId", getQuiz)
  .post("/quiz/create", createQuiz);

module.exports = router;
