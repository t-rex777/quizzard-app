import React, { useContext, useEffect, useReducer } from "react";
// Types
import { ActionType } from "../reducers/reducers.types";
import { GameState } from "./contextTypes";
// Reducer
import { gameReducer } from "../reducers/GameReducer";
import { getAllQuizzes } from "../components/Quiz/helper";

const initialGameState: GameState = {
  player: null,
  currentQuiz:{},
  quizzes: [],
  scores: [],
  loading : false
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
      console.log(data);
      dispatch({ type: "SET_QUIZZES", payload: data });
    })();
  }, []);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
