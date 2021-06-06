import React from "react";
import { useGame } from "./../../context/GameProvider";

const QuizCard: React.FC = () => {
  const {state: { currentQuiz }} = useGame();
  console.log(currentQuiz);
  return (
    <div className="quizCard">
      {
        currentQuiz.quizzes.map((quiz: any) => (
          <div key={quiz._id}>
            <h1>{quiz.question}</h1>
          </div>
        ))}
    </div>
  );
};

export default QuizCard;
