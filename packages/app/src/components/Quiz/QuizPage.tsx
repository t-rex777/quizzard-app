import React, { useEffect, useState } from "react";
import Base from "./../Base/Base";
import QuizCard from "./QuizCard";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useParams } from "react-router";
import { getQuiz } from "./helper";
import { useGame } from "./../../context/GameProvider";
import { Link } from "react-router-dom";
import { UserAnswers } from "./quiz.types";
import "./quiz.css";
import { updateUser } from "../User/helper";

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

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
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
      console.log({ score });
      isCorrect ? setScore(score + 1) : setScore(score);
    }
    if (questionNr + 1 === TOTAL_QUESTIONS) {
      const updatedUSer = {
        score: score + 1,
        quiz: quizId,
      };
      const userData = await updateUser(updatedUSer);
      try {
        if (userData !== undefined) {
          dispatch({ type: "SET_PLAYER", payload: userData });
          dispatch({ type: "SET_SCORE", payload: userData.quizCompleted });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Base className="quizPage">
      <h1 className="quizpage-header">{state.currentQuiz.name} Trivia</h1>
      {quizzes !== undefined ? (
        <>
          {!gameOver && (
            <QuizCard
              question={quizzes[questionNr].question}
              options={quizzes[questionNr].options}
              userAnswers={userAnswers ? userAnswers[questionNr] : undefined}
              questionNr={questionNr}
              callback={checkAnswer}
              score={score}
              totalQuestions={TOTAL_QUESTIONS}
            />
          )}
          {!gameOver &&
            questionNr + 1 === userAnswers.length &&
            questionNr !== TOTAL_QUESTIONS - 1 && (
              <button onClick={nextQuestion} className="interact-btn">
                Next Question
              </button>
            )}
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button onClick={startQuiz} className="interact-btn">
              Start
            </button>
          ) : null}
          {userAnswers.length === TOTAL_QUESTIONS && (
            <Link to="/">
              <button className="interact-btn">Home</button>
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
