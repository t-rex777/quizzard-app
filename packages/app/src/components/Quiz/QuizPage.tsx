import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getQuiz } from "./helper";
import { useGame } from "./../../context/GameProvider";
import QuizCard from "./QuizCard";

const QuizPage: React.FC = () => {
  const { state: currentQuiz, dispatch } = useGame();
  const { quizId } = useParams<{ quizId: string }>();
  useEffect(() => {
    (async () => {
      const quizData = await getQuiz(quizId);
      dispatch({ type: "SET_CURRENT_QUIZ", payload: quizData });
    })();
  }, []);
console.log(currentQuiz)
  return (
    <div
      className="quizPage"
      // style={{ background: `url(${currentQuiz.)` }}
    >
      Hello
      <QuizCard />
    </div>
  );
};

export default QuizPage;
