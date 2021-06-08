import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getQuiz } from "./helper";
import { useGame } from "./../../context/GameProvider";
import QuizCard from "./QuizCard";
import "./quiz.css";
import Base from "./../Base/Base";

const QuizPage: React.FC = () => {
  const {
    state: { currentQuiz },
    dispatch,
  } = useGame();
  const { quizId } = useParams<{ quizId: string }>();
  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING", payload: true });
      const quizData = await getQuiz(quizId);
      if (quizData._id !== undefined) {
        dispatch({ type: "SET_CURRENT_QUIZ", payload: quizData });
        dispatch({ type: "LOADING", payload: false });
      }
    })();
  }, []);
  // console.log("curr", currentQuiz);

  return (
    <Base
      className="quizPage"
      // style={{ background: `url(${currentQuiz.backgroundImage})` }}
    >
      <QuizCard />
    </Base>
  );
};

export default QuizPage;
