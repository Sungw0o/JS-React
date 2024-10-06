let currentQuestionIndex = 0;
const questions = [
    { question: "4 + 2?", answers: [4, 6], correct: 6 },
    { question: "3 * 5?", answers: [15, 20], correct: 15 },
    { question: "7 - 3?", answers: [4, 5], correct: 4 },
    { question: "10 / 2?", answers: [4, 5], correct: 5 },
    { question: "8 + 4?", answers: [10, 12], correct: 12 },
    { question: "9 - 5?", answers: [3, 4], correct: 4 }
];

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('mathQuestion').textContent = currentQuestion.question;
    const answerElements = document.querySelectorAll('.answer');
    answerElements[0].textContent = currentQuestion.answers[0];
    answerElements[1].textContent = currentQuestion.answers[1];
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        document.body.style.backgroundColor = '#4CAF50';
        alert('정답입니다!');
    } else {
        document.body.style.backgroundColor = '#ff4757';
        alert('틀렸습니다.');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            loadQuestion();
            document.body.style.backgroundColor = '#ffffff';
        }, 1000);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert('퀴즈가 끝났습니다!');
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('restartButton').style.display = 'none';
    loadQuestion();
    document.body.style.backgroundColor = '#ffffff';
}

document.querySelectorAll('.answer').forEach((element) => {
    element.addEventListener('click', () => {
        checkAnswer(Number(element.textContent));
    });
});

document.getElementById('nextButton').addEventListener('click', () => {
    loadQuestion();
});

document.getElementById('restartButton').addEventListener('click', () => {
    restartQuiz();
});


loadQuestion();
