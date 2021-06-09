import React from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useGame } from "./../../context/GameProvider";

interface Props {
  children: any;
  className: string;
}

const Base: React.FC<Props> = (props) => {
  const { state } = useGame();
  return (
    <>
      {state.loading === false ? (
        <div
          className={props.className}
          style={{ background: `url(${state.currentQuiz.backgroundImage})` }}
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
