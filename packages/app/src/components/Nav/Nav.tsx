import React from "react";
import { Link } from "react-router-dom";
import { useGame } from "./../../context/GameProvider";
import "./nav.css";

const Nav: React.FC = () => {
  const { dispatch } = useGame();
  const signout = () => {
    dispatch({ type: "LOG_OUT" });
    console.log("user logged out!");
  };
  return (
    <nav>
      {localStorage.getItem("_rtoken") ? (
        <p className="nav__item" onClick={signout}>
          Sign Out
        </p>
      ) : (
        <Link className="nav__item" to="/signin">
          <p>Sign In</p>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
