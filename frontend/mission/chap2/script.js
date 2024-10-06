let playerScore = 0;
let computerScore = 0;
let turnsLeft = 10;

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const remainingTurnsDisplay = document.getElementById('remainingTurns');
const resultMessageDisplay = document.getElementById('resultMessage');

function getComputerChoice() {
    const choices = ['가위', '바위', '보'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = `무승부! 컴퓨터도 ${computerChoice}를 선택했습니다.`;
    } else if (
        (playerChoice === '가위' && computerChoice === '보') ||
        (playerChoice === '바위' && computerChoice === '가위') ||
        (playerChoice === '보' && computerChoice === '바위')
    ) {
        playerScore++;
        resultMessage = `승리! 컴퓨터는 ${computerChoice}를 선택했습니다.`;
    } else {
        computerScore++;
        resultMessage = `패배! 컴퓨터는 ${computerChoice}를 선택했습니다.`;
    }

    updateScores();
    turnsLeft--;
    remainingTurnsDisplay.textContent = turnsLeft;

    if (turnsLeft <= 0) {
        if (playerScore > computerScore) {
            resultMessage = '게임 끝! 플레이어 승리!';
        } else if (playerScore < computerScore) {
            resultMessage = '게임 끝! 컴퓨터 승리!';
        } else {
            resultMessage = '게임 끝! 무승부!';
        }
        resetGame();
    }

    resultMessageDisplay.textContent = resultMessage;
}

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    turnsLeft = 10;
    updateScores();
    remainingTurnsDisplay.textContent = turnsLeft;
    resultMessageDisplay.textContent = '';
}

document.getElementById('rock').addEventListener('click', () => playRound('가위'));
document.getElementById('paper').addEventListener('click', () => playRound('바위'));
document.getElementById('scissors').addEventListener('click', () => playRound('보'));
