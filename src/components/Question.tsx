import { useState } from "react";
import { question } from "../types/question";

const Question: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(
    question[0].id
  );
  const currentQuestion = question.find((q) => q.id === currentQuestionId)!;

  const [result, setResult] = useState<number>(0);

  const handleClick = (options: string) => {
    if (options === currentQuestion.correctAnswer) {
      setResult((prev) => prev + 1);
    }
    GetNextQuestion();
  };

  const GetNextQuestion = () => {
    const nextQuestionId = currentQuestionId + 1;
    const nextQuestionFind = question.find((q) => q.id === nextQuestionId);

    if (nextQuestionFind) {
      setCurrentQuestionId(nextQuestionFind.id);
    }
  };

  if (currentQuestionId >= question.length) {
    return (
      <div>
        <div>Quiz bitdi, ugurlaarrr</div>
        <p>Neticeniz: {result}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ol type="A">
        {currentQuestion.options.map((option, index) => (
          <li onClick={() => handleClick(option)} key={index}>
            {option}
          </li>
        ))}
      </ol>
      <div>netice {result}</div>
    </div>
  );
};

export default Question;
