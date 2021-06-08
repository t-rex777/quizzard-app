import { Player, Quiz } from "../context/contextTypes";

export type ActionType =
| {type : "SET_QUIZZES" , payload : Quiz[]}
| {type : "SET_USER" , payload : any}
| {type : "SET_CURRENT_QUIZ" , payload : Quiz[]}
| {type : "NEXT_QUESTION"}
| {type : "PREVIOUS_QUESTION"}
