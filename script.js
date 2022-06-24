const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const sciButton = document.querySelector('#sciButton');
const resultContainer = document.querySelector('#result-container');

const currResult = document.createElement('div');
currResult.classList.add('currResult');

let result = '';
let playerScore = 0;
let compScore = 0;
let gamesPlayed = 0;

rockButton.addEventListener('click', () => {
    playRound("Rock", computerPlay());
});

paperButton.addEventListener('click', () => {
    playRound("Paper", computerPlay());
});

sciButton.addEventListener('click', () => {
    playRound("Scissors", computerPlay());
});

function computerPlay () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}



function playRound (player, comp) {
    if ((player == "Rock" && comp == "Scissors") || 
        (player == "Scissors" && comp == "Paper") ||
        (player == "Paper" && comp == "Rock")) {
            currResult.textContent = 'You win! ' + player + ' beats ' + comp;
            changeScore("player");
        }

    else if ((comp == "Rock" && player == "Scissors") || 
            (comp == "Scissors" && player == "Paper") ||
            (comp == "Paper" && player == "Rock")) {
            currResult.textContent = 'You lose. ' + comp + ' beats ' + player;
            changeScore("comp");
        }

    else if (player == comp) {
        currResult.textContent = "It's a tie! Play again";
    }

    resultContainer.appendChild(currResult);
}

function changeScore(whoWon) {
    gamesPlayed++;
    if (whoWon == "player")
        playerScore++;
    else
        compScore++;

    if (gamesPlayed == 5)
        announceWinner();
}

function announceWinner() {
    if (playerScore > compScore)
        currResult.textContent = "YOU WIN!";

    else if (compScore > playerScore)
        currResult.textContent = "YOU LOSE";

    else if (playerScore == compScore)
        currResult.textContent = "TIE GAME"; 

    resultContainer.appendChild(currResult);
}