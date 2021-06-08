import React from "react";
import { useGame } from "./../../context/GameProvider";

const QuizCard: React.FC = () => {
  const {
    state: { currentQuiz },
  } = useGame();
  return (
    <div className="quizCard">
      {currentQuiz._id !== undefined &&
        currentQuiz.quizzes.map((quiz: any,index : string) => (
          <div key={index}>
            <h1>{quiz.question}</h1>
          </div>
        ))}
    </div>
  );
};

export default QuizCard;
