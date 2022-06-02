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
        return "You Win! " + toTitleCase(player) + " beats " + comp;

    else if ((comp == "Rock" && toTitleCase(player) == "Scissors") || 
            (comp == "Scissors" && toTitleCase(player) == "Paper") ||
            (comp == "Paper" && toTitleCase(player) == "Rock")) {
                return "You lose. " + comp + " beats " + toTitleCase(player);
            }

    else if (toTitleCase(player) == comp) {
        return "It's a tie!";
    }
}

console.log(playRound("paper", computerPlay()));