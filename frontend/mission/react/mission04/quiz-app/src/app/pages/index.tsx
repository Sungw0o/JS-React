// src/pages/index.tsx
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0070f3;
`;

const QuizButton = styled.button`
  margin: 20px;
  padding: 15px 30px;
  font-size: 18px;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const HomePage: React.FC = () => {
  const router = useRouter();

  const startQuiz = (subject: "math" | "english") => {
    router.push(`/quiz/${subject}`);
  };

  return (
    <Container>
      <Title>Welcome to the Quiz App</Title>
      <QuizButton onClick={() => startQuiz("math")}>Start Math Quiz</QuizButton>
      <QuizButton onClick={() => startQuiz("english")}>Start English Quiz</QuizButton>
    </Container>
  );
};

export default HomePage;
