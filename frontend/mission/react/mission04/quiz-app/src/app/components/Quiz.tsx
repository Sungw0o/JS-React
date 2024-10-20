import React, { useState } from "react";
import styled from "styled-components";
import { quizData } from "../data/quizdata";

type QuizProps = {
  subject: "math" | "english";
};

const QuizContainer = styled.div`
  margin: 20px;
`;

const QuestionBox = styled.div<{ isCorrect: boolean | null }>`
  border: 2px solid ${({ isCorrect }) => (isCorrect === null ? "#ccc" : isCorrect ? "green" : "red")};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const QuestionTitle = styled.h2`
  margin-bottom: 10px;
`;

const OptionLabel = styled.label`
  display: block;
  margin: 5px 0;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const Quiz: React.FC<QuizProps> = ({ subject }) => {
  const [answers, setAnswers] = useState<{ [key: number]: string | number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, answer: string | number) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const checkAnswer = (questionId: number, correctAnswer: string | number) => {
    return answers[questionId] === correctAnswer;
  };

  return (
    <QuizContainer>
      <h1>{subject === "math" ? "Math Quiz" : "English Quiz"}</h1>
      {quizData[subject].map((question) => (
        <QuestionBox
          key={question.id}
          isCorrect={showResults ? checkAnswer(question.id, question.correct) : null}
        >
          <QuestionTitle>{question.question}</QuestionTitle>
          {question.options.map((option, index) => (
            <OptionLabel key={index}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={() => handleAnswer(question.id, option)}
                disabled={showResults}
              />
              {option}
            </OptionLabel>
          ))}
        </QuestionBox>
      ))}
      {!showResults && (
        <SubmitButton onClick={() => setShowResults(true)}>Submit</SubmitButton>
      )}
    </QuizContainer>
  );
};

export default Quiz;
