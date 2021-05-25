import { GameState } from "../context/contextTypes";
import { ActionType } from "./reducers.types";

export const gameReducer = (state: GameState, action: ActionType) => {
  switch (action.type) {
    case "SET_QUIZZES":
      return { ...state, quizzes: action.payload };
      case "SET_CURRENT_QUIZ":
        return { ...state, currentQuiz: action.payload };
    default:
      return state;
  }
};
