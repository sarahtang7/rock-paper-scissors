function toTitleCase (word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

function computerPlay () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound (player, comp) {
    if ((toTitleCase(player) == "Rock" && comp == "Scissors") || 
        (toTitleCase(player) == "Scissors" && comp == "Paper") ||
        (toTitleCase(player) == "Paper" && comp == "Rock")) 
        return "You win! " + toTitleCase(player) + " beats " + comp;

    else if ((comp == "Rock" && toTitleCase(player) == "Scissors") || 
            (comp == "Scissors" && toTitleCase(player) == "Paper") ||
            (comp == "Paper" && toTitleCase(player) == "Rock")) {
                return "You lose. " + comp + " beats " + toTitleCase(player);
            }

    else if (toTitleCase(player) == comp) {
        return "It's a tie!";
    }
}

function game (player) {
    let playerScore = 0;
    let compScore = 0;

    for (let i=1; i<6; i++) {
        let result = playRound(player, computerPlay());
        console.log(result);

        if (result.charAt(4) == "w")
            playerScore++;

        else if (result.charAt(4) == "l")
            compScore++;
    }

    if (playerScore > compScore)
        return "YOU WIN!"

    else if (compScore > playerScore)
        return "YOU LOSE"

    else if (playerScore == compScore)
        return "TIE GAME"
}

console.log(game("rock"));