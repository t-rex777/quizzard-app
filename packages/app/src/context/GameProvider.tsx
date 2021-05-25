import React, { useContext, useReducer } from "react";
// Types
import { ActionType } from "../reducers/reducers.types";
import { GameState } from "./contextTypes";
// Reducer
import { gameReducer } from "../reducers/GameReducer";

const initialGameState: GameState = {
  users: [],
  currentQuiz: {},
  quizzes: [],
  scores: [],
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

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
