import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getQuiz } from "./helper";
import { useGame } from "./../../context/GameProvider";
import QuizCard from "./QuizCard";
import Base from "./../Base/Base";
import { UserAnswers } from "./quiz.types";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./quiz.css";
import { Link } from "react-router-dom";

const QuizPage: React.FC = () => {
  const { state, dispatch } = useGame();

  const {
    currentQuiz: { quizzes },
  } = state;

  const { quizId } = useParams<{ quizId: string }>();

  const TOTAL_QUESTIONS = 10;
  const [userAnswers, setUserAnswers] = useState<UserAnswers[]>([]); //UserAnswers[] and UserAnswers
  const [questionNr, setQuestionNr] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "LOADING", payload: true });
        const quizData = await getQuiz(quizId);
        if (quizData._id !== undefined) {
          dispatch({ type: "SET_CURRENT_QUIZ", payload: quizData });
          dispatch({ type: "LOADING", payload: false });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const startQuiz = () => {
    setScore(0);
    setQuestionNr(0);
    setUserAnswers([]);
    setGameOver(false);
  };

  const nextQuestion = () => {
    const nextQ = questionNr + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNr(nextQ);
    }
  };

  const checkAnswer = (e: any) => {
    const answer = e.target.value;
    if (!gameOver) {
      const isCorrect = answer === quizzes[questionNr].correctAnswer;
      const answerObject = {
        question: quizzes[questionNr].question,
        answer,
        isCorrect,
        correctAnswer: quizzes[questionNr].correctAnswer,
      };
      setUserAnswers((prevValue) => {
        return [...prevValue, answerObject];
      });
      setScore(isCorrect ? score + 1 : score);
    }
  };

  return (
    <Base className="quizPage">
      score{score}
      {quizzes !== undefined ? (
        <>
          {!gameOver && (
            <QuizCard
              question={quizzes[questionNr].question}
              options={quizzes[questionNr].options}
              userAnswers={userAnswers ? userAnswers[questionNr] : undefined}
              questionNr={questionNr}
              callback={checkAnswer}
              totalQuestions={TOTAL_QUESTIONS}
            />
          )}
          {!gameOver &&
            questionNr + 1 === userAnswers.length &&
            questionNr !== TOTAL_QUESTIONS - 1 && (
              <button onClick={nextQuestion}>Next Question</button>
            )}
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button onClick={startQuiz}>Start</button>
          ) : null}
          {userAnswers.length === TOTAL_QUESTIONS && (
            <Link to="/">
              <button>Home</button>
            </Link>
          )}
        </>
      ) : (
        <LoadingPage />
      )}
    </Base>
  );
};

export default QuizPage;
