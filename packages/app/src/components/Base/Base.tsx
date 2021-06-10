import React from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useGame } from "./../../context/GameProvider";
import Nav from './../Nav/Nav';

interface Props {
  children: any;
  className: string;
}

const Base: React.FC<Props> = (props) => {
  const { state } = useGame();
  return (
    <>
    <Nav/>
      {state.loading === false ? (
        <div
          className={props.className}
          style={{ background:`url(${state.currentQuiz.backgroundImage})` }}
        >
          {props.children}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Base;
