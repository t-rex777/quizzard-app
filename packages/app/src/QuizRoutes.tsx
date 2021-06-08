import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import QuizPage from "./components/Quiz/QuizPage";
import Signin from './components/User/Signin';

interface Props {}

const QuizRoutes: React.FC<Props> = () => {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz/:quizId" exact component={QuizPage} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default QuizRoutes;
