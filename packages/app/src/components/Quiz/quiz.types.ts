export type UserAnswers = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer : string;
};

export type QuizCardProps = {
  question: string;
  options: string[];
  questionNr: number;
  userAnswers?: UserAnswers | null;
  totalQuestions:number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
