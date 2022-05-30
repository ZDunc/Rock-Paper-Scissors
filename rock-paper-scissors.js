function computerPlay() {
    let num = (Math.random() * 3) + 1;

    if (num === 1)
        return "rock";
    else if (num === 2)
        return "paper";
    else if (num === 3)
        return "scissors";
    else
        return undefined;
}

function SingleRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock") {              // PLAYER -- rock
        if (computerSelection === "paper")
            return "You Lose! Paper beats Rock!";
        else if (computerSelection === "scissors")
            return "You Win! Rock beats Scissors!"
        else if (computerSelection === "rock")
            return "Draw!";
        else
            return undefined;
    } else if (playerSelection === "paper") {      // PLAYER -- paper
        if (computerSelection === "paper")
            return "Draw!";
        else if (computerSelection === "scissors")
            return "You Lose! Scissors beats Paper!"
        else if (computerSelection === "rock")
            return "You Win! Paper beats Rock";
        else
            return undefined;
    } else if (playerSelection === "scissors") {    // PLAYER -- scissors
        if (computerSelection === "paper")
            return "You Win! Scissors beats Paper!";
        else if (computerSelection === "scissors")
            return "Draw!"
        else if (computerSelection === "rock")
            return "You Lose! Rock beats Scissors";
        else
            return undefined;
    } else {
        return undefined;
    }



}