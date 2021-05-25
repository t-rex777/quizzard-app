import React, { useEffect } from "react";
import { getAllQuizzes } from "./helper";

interface Props {}

const QuizPage: React.FC<Props> = () => {
  useEffect(() => {
    (async () => {
      const data = await getAllQuizzes();
      console.log(data);
    })();
  }, []);
  return <div>Quiz Page</div>;
};

export default QuizPage;
