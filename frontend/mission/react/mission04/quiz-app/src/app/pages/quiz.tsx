import React, { useState } from "react";
import { quizData } from "../data/quizdata";

// 퀴즈 카테고리 타입 정의
type Category = "math" | "alphabet";

const QuizPage: React.FC = () => {
  const [category, setCategory] = useState<Category>("math");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string | number }>({});
  const [showResults, setShowResults] = useState(false);

  // 사용자가 선택한 답변을 기록하는 함수
  const handleAnswer = (questionId: number, answer: string | number) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // 다음 질문으로 넘어가는 함수
  const nextQuestion = () => {
    if (currentQuestion < quizData[category].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // 퀴즈 제출 함수
  const submitQuiz = () => {
    setShowResults(true);
  };

  // 맞은 답변 수 계산 함수
  const correctAnswersCount = () =>
    quizData[category].filter((q) => answers[q.id] === q.correct).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quiz</h1>
      {/* 카테고리 선택 */}
      <select onChange={(e) => setCategory(e.target.value as Category)}>
        <option value="math">Math</option>
        <option value="alphabet">Alphabet</option>
      </select>

      {/* 결과를 보여주지 않는 경우 */}
      {!showResults ? (
        <div>
          {quizData[category][currentQuestion] ? (
            <div>
              <h3>{quizData[category][currentQuestion].question}</h3>
              {quizData[category][currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name={`question-${quizData[category][currentQuestion].id}`}
                    value={option}
                    onChange={() => handleAnswer(quizData[category][currentQuestion].id, option)}
                  />
                  {option}
                </div>
              ))}
              {/* 다음 버튼 또는 제출 버튼 */}
              {currentQuestion < quizData[category].length - 1 ? (
                <button onClick={nextQuestion}>다음</button>
              ) : (
                <button onClick={submitQuiz}>제출</button>
              )}
            </div>
          ) : (
            <p>질문을 불러오는 중...</p>
          )}
        </div>
      ) : (
        // 결과를 보여주는 경우
        <div>
          <h2>
            {correctAnswersCount()} / {quizData[category].length} 문제 맞췄습니다!
          </h2>
          <button onClick={() => window.location.reload()}>새로운 퀴즈 시작</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
