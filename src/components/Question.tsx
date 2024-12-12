import { useState } from "react";
import { question } from "../types/question";
import "../App.css";

const Question: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(
    question[0].id
  );
  const currentQuestion = question.find((q) => q.id === currentQuestionId)!;

  const [result, setResult] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleClick = (options: string): void => {
    if (options === currentQuestion.correctAnswer) {
      setResult((prev) => prev + 1);
    }
    GetNextQuestion();
  };

  const GetNextQuestion = (): void => {
    const nextQuestionId = currentQuestionId + 1;
    const nextQuestionFind = question.find((q) => q.id === nextQuestionId);

    if (nextQuestionFind) {
      setCurrentQuestionId(nextQuestionFind.id);
    } else {
      setCurrentQuestionId(-1);
    }
  };

  if (currentQuestionId === -1) {
    return (
      <div
        style={{
          alignContent: "center",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        <div>Quiz bitdi, ugurlaarrr</div>
        <p>Duzgun cavablar: {result}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{currentQuestion.question}</h1>
      <ul style={{ listStyleType: "none" }}>
        {currentQuestion.options.map((option, index) => (
          <li
            onMouseLeave={() => setHoverIndex(null)}
            onMouseEnter={() => setHoverIndex(index)}
            onClick={() => handleClick(option)}
            key={index}
            style={{
              backgroundColor: hoverIndex === index ? "red" : "#FE6256",
              margin: "15px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              transition: "0.3s",
              transform: hoverIndex === index ? "scale(1.05)" : "scale(1)",
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
