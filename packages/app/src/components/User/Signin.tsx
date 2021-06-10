import React, { useState } from "react";
import { signinResponse, User } from "./userTypes";
import { signin } from "./helper";
import { useGame } from "./../../context/GameProvider";
import { setQuizzardHeader } from "../../utils";
import Nav from "./../Nav/Nav";
import { Redirect } from "react-router";

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
      <h1 className="text-center">Sign In</h1>
      <div className="content-center">
        <form className="form-validation" onSubmit={submitForm}>
          <div className="validation-message"></div>
          <div className="row">
            <label htmlFor="email">UserName</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-username"
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
              className="form-password"
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
              className="form-rePassword"
              value={user.re_password}
              onChange={handleChange}
            />
            <br />
          </div>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
