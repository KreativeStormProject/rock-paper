let playerScore = 0;
let computerScore = 0;
let round = 1;
const historyList = document.getElementById('history-list');
const inputField = document.getElementById('player-input');
const playButton = document.querySelector('button');

inputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        playRound();
    }
});

function playRound() {
    const playerInput = inputField.value.trim().toLowerCase();
    if (!playerInput || (playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors')) {
        alert("Invalid inpur. Please enter'Rock', 'Paper' veya 'Scissors'.");
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    const result = getResult(playerInput, computerSelection);

    const historyItem = document.createElement('li');
    historyItem.textContent = `Round ${round}: Bilgisayar (${computerSelection}) - Oyuncu (${playerInput}) - ${result}`;
    historyList.appendChild(historyItem);

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Computer: ${computerScore} - Player: ${playerScore}`;

    const resultElement = document.getElementById('result');
    if (playerScore === 3) {
        resultElement.textContent = 'Player Won!';
        endGame();
    } else if (computerScore === 3) {
        resultElement.textContent = 'Computer Won';
        endGame();
    } else {
        resultElement.textContent = `Result: Round ${result} won.`;
    }

    round++;
    inputField.value = '';
}

function getResult(playerInput, computerSelection) {
    if (playerInput === computerSelection) {
        return 'draw';
    } else if (
        (playerInput === 'rock' && computerSelection === 'scissors') ||
        (playerInput === 'paper' && computerSelection === 'rock') ||
        (playerInput === 'scissors' && computerSelection === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function endGame() {
    inputField.disabled = true;
    playButton.disabled = true;
    document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    historyList.innerHTML = '';
    inputField.disabled = false;
    playButton.disabled = false;
    inputField.value = '';
    document.getElementById('score').textContent = 'Bilgisayar: 0 - Oyuncu: 0';
    document.getElementById('result').textContent = '';
    document.getElementById('restart-button').style.display = 'none';
}

