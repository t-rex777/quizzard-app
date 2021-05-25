import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import QuizPage from "./components/Quiz/QuizPage";

interface Props {}

const QuizRoutes: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz/:quizId" exact component={QuizPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default QuizRoutes;
