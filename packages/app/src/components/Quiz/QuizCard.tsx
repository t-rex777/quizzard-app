import React from "react";
import { QuizCardProps } from "./quiz.types";
import "./quiz.css";

const QuizCard: React.FC<QuizCardProps> = (props: QuizCardProps) => {
  const {
    question,
    questionNr,
    options,
    userAnswers,
    score,
    callback,
    totalQuestions,
  } = props;
  return (
    <div className="quizCard">
      <div className="quizCard__info">
        <p className="text-muted">
          Question : {questionNr + 1}/{totalQuestions}
        </p>
        <p className="text-muted ">Score : {score}</p>
      </div>

      <h1 className="text-success quizpage__ques">Question : {question}</h1>
      {options.map((option) => (
        <button
          className="quizpage__option__btn"
          style={
            userAnswers?.correctAnswer === option
              ? { backgroundColor: "#66daaf" }
              : userAnswers?.answer === option
              ? { backgroundColor: "#e44848" }
              : { backgroundColor: "#fff" }
          }
          value={option}
          key={option}
          onClick={callback}
          disabled={userAnswers ? true : false}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizCard;
