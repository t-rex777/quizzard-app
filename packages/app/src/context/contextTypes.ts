export type GameState = {
  users: Player[];
  currentQuiz : any ;
  quizzes: Quiz[];
  scores: number[];
};

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Quiz = {
  _id: string;
  name: string;
  description: string;
  thumbnail: string;
  backgroundImage: string;
  quizzes: Question[];
};

export type Player = {
  _id: string;
  name: string;
  email: string;
  password: string;
  quizCompleted: Quiz[];
};
