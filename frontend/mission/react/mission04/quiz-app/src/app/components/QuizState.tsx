import React, { useState } from "react";
import { quizData } from "../data/quizdata";

// 퀴즈 카테고리 타입 정의
type Category = "math" | "alphabet";

const QuizState = () => {
  const [category, setCategory] = useState<Category>("math");
  const [answers, setAnswers] = useState<{ [key: number]: string | number }>({});
  const [showResults, setShowResults] = useState(false);

  // 사용자가 선택한 답변을 기록하는 함수
  const handleAnswer = (questionId: number, answer: string | number) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // 정답을 확인하는 함수
  const checkAnswer = (questionId: number, correctAnswer: string | number) => {
    return answers[questionId] === correctAnswer;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{category === "math" ? "Math Quiz" : "Alphabet Quiz"}</h1>
      {/* 카테고리 선택 */}
      <select onChange={(e) => setCategory(e.target.value as Category)}>
        <option value="math">Math</option>
        <option value="alphabet">Alphabet</option>
      </select>

      {/* 퀴즈 목록 출력 */}
      {quizData[category].map((question) => (
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

      {/* 답변 확인 버튼 */}
      {!showResults && (
        <button onClick={() => setShowResults(true)}>답변 확인</button>
      )}

      {/* 결과 표시 */}
      {showResults && (
        <div>
          {quizData[category].map((question) => (
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

export default QuizState;
