const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const sciButton = document.querySelector('#sciButton');
const resultContainer = document.querySelector('#result-container');
const finalResult = document.querySelector('#final-result')
const allButtons = document.querySelectorAll('button');

const currResult = document.createElement('div');
currResult.classList.add('currResult');
const final = document.createElement('div');
final.classList.add('final');

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
        final.textContent = "YOU WIN!";

    else if (compScore > playerScore)
        final.textContent = "YOU LOSE";

    else if (playerScore == compScore)
        final.textContent = "TIE GAME"; 

    finalResult.appendChild(final);
}