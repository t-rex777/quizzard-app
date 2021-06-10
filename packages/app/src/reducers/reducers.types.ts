import { Player, Quiz } from "../context/contextTypes";

export type ActionType =
  | { type: "SET_QUIZZES"; payload: Quiz[] }
  | { type: "SET_PLAYER"; payload: any }
  | { type: "LOG_OUT" }
  | { type: "SET_CURRENT_QUIZ"; payload: Quiz[] }
  | { type: "NEXT_QUESTION" }
  | { type: "PREVIOUS_QUESTION" }
  | { type: "LOADING"; payload: true | false };
