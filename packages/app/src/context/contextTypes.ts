export type GameState = {
  users: Player[];
  currentQuiz : any;
  quizzes: Quizzes[];
  scores: number[];
};

export type Quiz = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Quizzes = {
  _id: string;
  name: string;
  description: string;
  thumbnail: string;
  backgroundImage: string;
  quizzes: Quiz[];
};

export type Player = {
  _id: string;
  name: string;
  email: string;
  password: string;
  quizCompleted: Quiz[];
};
