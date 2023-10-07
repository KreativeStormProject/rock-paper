let playerScore = 0;
let computerScore = 0;
let gameEnded = false;
let round = 1;
const historyList = document.getElementById('history-list');

function playerChoice(playerSelection) {
    if (gameEnded) return;

    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    const result = playRound(playerSelection, computerSelection);

    const historyItem = document.createElement('li');
    historyItem.textContent = `Round ${round}: Computer (${computerSelection}) - Player(${playerSelection}) - ${result}`;
    historyList.appendChild(historyItem);

    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Computer: ${computerScore} - Player: ${playerScore}`;

    const resultElement = document.getElementById('result');
    if (playerScore === 3) {
        resultElement.textContent = 'Player Won!';
        endGame();
    } else if (computerScore === 3) {
        resultElement.textContent = 'Computer Won!';
        endGame();
    } else {
        resultElement.textContent = `Result: ${result}`;
    }

    round++;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'DRAW';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function endGame() {
    gameEnded = true;
    document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
    gameEnded = false;
    playerScore = 0;
    computerScore = 0;
    round = 1;

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Computer: 0 - Player: 0';

    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    historyList.innerHTML = '';

    document.getElementById('restart-button').style.display = 'none';
}
