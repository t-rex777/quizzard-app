import React from "react";
import { QuizCardProps } from "./quiz.types";

const QuizCard: React.FC<QuizCardProps> = (props: QuizCardProps) => {
  const {
    question,
    questionNr,
    options,
    userAnswers,
    callback,
    totalQuestions,
  } = props;



  return (
    <div className="quizCard">
      <p>
        Question : {questionNr + 1}/{totalQuestions}
      </p>
      <h1>Questiom : {question}</h1>
      {options.map((option) => (
        <button
          value={option}
          key={option}
          onClick={callback}
          disabled={userAnswers ?true:false}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizCard;
