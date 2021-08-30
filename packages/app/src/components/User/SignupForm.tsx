import React, { useState } from "react";
import { User } from "./userTypes";
import { signup } from "./helper";
import { useGame } from "../../context/GameProvider";
import { Redirect } from "react-router";
import Nav from "../Nav/Nav";
import "./user.css";
import { Link } from "react-router-dom";

const SignupForm: React.FC = () => {
  const { dispatch } = useGame();
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    re_password: "",
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
    dispatch({ type: "LOADING", payload: true });
    try {
      await signup(user);
      dispatch({ type: "LOADING", payload: false });
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {redirect && <Redirect to="/signin" />}
      <Nav />
      <h1 className="form__header">Sign Up</h1>
      <div
        className="content-center"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <form className="form-validation" onSubmit={submitForm}>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form__input"
              value={user.name}
              onChange={handleChange}
            />
            <br />
          </div>
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
          Already have an account?
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#ff1e56" }}
          >
            <> Sign In </>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
