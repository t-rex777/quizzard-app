import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import QuizPage from "./components/Quiz/QuizPage";
import Signin from './components/User/Signin';
import PrivateRoute from './components/User/PrivateRoute';

interface Props {}

const QuizRoutes: React.FC<Props> = () => {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/quiz/:quizId" exact component={QuizPage} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default QuizRoutes;
