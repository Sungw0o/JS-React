import React, { useState } from "react";
import { quizData } from "../data/quizdata";

const Question = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number | string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, answer: number | string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const checkAnswer = (questionId: number, correctAnswer: number | string) => {
    return answers[questionId] === correctAnswer;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Math Quiz</h1>
      {quizData.math.map((question) => (
        <div key={question.id} style={{ marginBottom: "20px" }}>
          <h3>{question.question}</h3>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={() => handleAnswer(question.id, option)}
                disabled={showResults}
              />
              {option}
            </div>
          ))}
        </div>
      ))}
      {!showResults && (
        <button onClick={() => setShowResults(true)}>답변 확인</button>
      )}
      {showResults && (
        <div>
          {quizData.math.map((question) => (
            <div key={question.id}>
              {checkAnswer(question.id, question.correct) ? (
                <div style={{ color: "green" }}>정답입니다!</div>
              ) : (
                <div style={{ color: "red" }}>오답입니다.</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
