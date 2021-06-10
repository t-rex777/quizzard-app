import React, { useContext, useEffect, useReducer } from "react";
import Axios from "axios";
// Types
import { ActionType } from "../reducers/reducers.types";
import { GameState } from "./contextTypes";
// Reducer
import { gameReducer } from "../reducers/GameReducer";
import { getAllQuizzes } from "../components/Quiz/helper";
import { quizzardAPI, setQuizzardHeader } from "./../utils";
import { API } from "./../API";

const initialGameState: GameState = {
  player: null,
  currentQuiz: {},
  quizzes: [],
  scores: null,
  loading: false,
};
export const GameContext = React.createContext<{
  state: GameState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialGameState,
  dispatch: () => undefined,
});
export const GameProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  useEffect(() => {
    (async () => {
      const data = await getAllQuizzes();
      dispatch({ type: "SET_QUIZZES", payload: data });
    })();

    (async () => {
      dispatch({ type: "LOADING", payload: true });
      const rToken = localStorage.getItem("_rtoken");
      if (rToken && typeof rToken === "string") {
        try {
          const newAccessTokenRequest = await Axios({
            baseURL: API,
            method: "GET",
            url: "/token/access",
            headers: {
              "refresh-token": `Bearer ${rToken}`,
            },
          });
          const { accessToken, refreshToken } = newAccessTokenRequest.data; // not working
          localStorage.setItem("_rtoken", refreshToken);
          setQuizzardHeader(accessToken);
          const userDetails = await quizzardAPI.get("/user");
          const user = userDetails.data;
          dispatch({ type: "SET_PLAYER", payload: user });
          dispatch({ type: "SET_SCORE", payload: user.quizCompleted });

          dispatch({ type: "LOADING", payload: false });
        } catch (error) {
          console.log(error);
          localStorage.removeItem("_rtoken");
          dispatch({ type: "LOG_OUT" });
        }

        setInterval(async () => {
          const newAccessTokenRequest = await Axios({
            baseURL: API,
            method: "GET",
            url: "/token/access",
            headers: {
              "refresh-token": `Bearer ${rToken}`,
            },
          });
          const { accessToken, refreshToken } = newAccessTokenRequest.data;
          localStorage.setItem("_rtoken", refreshToken);
          setQuizzardHeader(accessToken);
        }, 840000);
      }
    })();
  }, []);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
