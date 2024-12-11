import Question from "../components/Question";
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};
