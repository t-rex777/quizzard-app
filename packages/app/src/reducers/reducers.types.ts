import { Quizzes } from "../context/contextTypes";

export type ActionType =
| {type : "SET_QUIZZES" , payload : Quizzes[]}
| {type : "SET_CURRENT_QUIZ" , payload : Quizzes[]}
| {type : "NEXT_QUESTION"}
| {type : "PREVIOUS_QUESTION"}
