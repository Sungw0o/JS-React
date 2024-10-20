import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0070f3;
  margin-bottom: 40px;
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
  return (
    <Container>
      <Title>Welcome to the Quiz App</Title>
      <Link href="/quiz/math">
        <QuizButton>Start Math Quiz</QuizButton>
      </Link>
      <Link href="/quiz/english">
        <QuizButton>Start English Quiz</QuizButton>
      </Link>
    </Container>
  );
};

export default HomePage;
