function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;

    if (num === 1)
        return "rock";
    else if (num === 2)
        return "paper";
    else if (num === 3)
        return "scissors";
    else
        return undefined;
}

function singleRound(playerSelection, computerSelection = computerPlay()) {
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

    function game() {
        console.log("Welcome to virtual Rock, Paper, Scissors!!!\n" +
                    "Best out of 5 wins...Good Luck!");
        
        // Set counter variables
        let playerWins = 0;
        let computerWins = 0;

        for (let i = 0; i < 5; i++) {
            console.log("Select Rock, Paper, or Scissors");
            let playerSelection = prompt();
        
            let result = singleRound(playerSelection);

            // Print round results
            if (result == undefined) {
                console.log("Invalid entry! You lose this round");
                computerWins++;
                continue;
            } else
                console.log(result);

            // Update counter variables
            if (result === "Draw!")
                continue;
            else {
                const winAnalysis = result.split(" ");
                if (winAnalysis[1] === "Win!")
                    playerWins++;
                else if (winAnalysis[1] == "Lose!")
                    computerWins++;
                else
                    console.log("Bug in program. Alert Zach");
            }
         } // end of for loop

         // Print game results
         console.log("Game has concluded.\nPlayer Wins: " + playerWins +
                     "\nComputer Wins: " + computerWins + "\n\n");
                     
        if (playerWins > computerWins)
            console.log("You win this round...bet you can't win again.");
        else if (computerWins > playerWins)
            console.log("Hahahahaha. I beat you!!!!!!");
        else
            console.log("We had a draw. AKA you lost. HA!");
    }