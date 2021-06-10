import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<Props> = (props) => {
  return (
    <>
      {localStorage.getItem("_rtoken") &&
      typeof localStorage.getItem("_rtoken") === "string" ? (
        <Route {...props} />
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

export default PrivateRoute;
