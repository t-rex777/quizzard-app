import React, { useState } from "react";
import { signinResponse, User } from "./userTypes";
import { signin } from "./helper";
import { useGame } from "./../../context/GameProvider";
import { setQuizzardHeader } from "../../utils";
import { Redirect } from "react-router";
import Nav from "./../Nav/Nav";
import "./user.css";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const { dispatch } = useGame();
  const [user, setUser] = useState<User>({
    email: "admin@gmail.com",
    password: "qwertyuiop@1234",
    re_password: "qwertyuiop@1234",
  });
  const [redirect, setRedirect] = useState<boolean>(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (user.password !== user.re_password) {
      return alert("Both passwords should be same!");
    }
    try {
      const res: signinResponse = await signin(user);
      const { userData, accessToken, refreshToken } = res;
      dispatch({ type: "SET_PLAYER", payload: userData });
      dispatch({ type: "SET_SCORE", payload: userData.quizCompleted });
      setQuizzardHeader(accessToken);
      localStorage.setItem("_rtoken", refreshToken);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {redirect && <Redirect to="/" />}
      <Nav />
      <h1 className="form__header">Sign In</h1>
      <div className="content-center" style={{flexDirection:"column", alignItems:"center"}}>
        <form className="form-validation" onSubmit={submitForm}>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form__input"
              value={user.email}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form__input"
              value={user.password}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="row">
            <label htmlFor="re_password">Re-enter Password</label>
            <input
              type="password"
              id="re_password"
              name="re_password"
              className="form__input"
              value={user.re_password}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="button">
            <button type="submit" className="form__btn">
              Submit
            </button>
          </div>
        </form>
        <p className="signupLink">
          Don't have account?
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#ff1e56" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
