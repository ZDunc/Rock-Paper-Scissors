// FUNCTIONS -----------------------------------------------------------------

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

function playRound(playerSelection, computerSelection = computerPlay()) {
    //playerSelection = playerSelection.toLowerCase();

    let resultString = "";
    
    // Determine winner and loser of round
    if (playerSelection === "rock") {              // PLAYER -- chooses rock
        if (computerSelection === "paper")
            resultString = loseAlert();
        else if (computerSelection === "scissors")
            resultString = winAlert();
        else if (computerSelection === "rock")
            resultString = drawAlert();
        else
            resultString = errorAlert();
    } else if (playerSelection === "paper") {      // PLAYER -- chooses paper
        if (computerSelection === "paper")
            resultString = drawAlert();
        else if (computerSelection === "scissors")
            resultString = loseAlert();
        else if (computerSelection === "rock")
            resultString = winAlert();
        else
            resultString = errorAlert();
    } else if (playerSelection === "scissors") {    // PLAYER -- chooses scissors
        if (computerSelection === "paper")
            resultString = winAlert();
        else if (computerSelection === "scissors")
            resultString = drawAlert();
        else if (computerSelection === "rock")
            resultString = loseAlert();
        else
            resultString = errorAlert();
    } else {                                        // Button malfunction case
        resultString = errorAlert();
    }

    const results = document.querySelector(".results");
    results.textContent = resultString;

    // Update counter variables
    if (resultString=== "Draw!")
        return;
    else {
        const winAnalysis = resultString.split(" ");
        if (winAnalysis[1] === "Win!")
            playerWins++;
        else if (winAnalysis[1] == "Lose!")
            computerWins++;
        else
            console.log("Bug in program.");
    }

    updateScore();
}

// Keeps track of scores, first to 5 wins
function updateScore() {

    // Check if game is concluded
    if (playerWins == 5 || computerWins == 5) {
        // Print game results
        console.log("Game has concluded.\nPlayer Wins: " + playerWins +
                    "\nComputer Wins: " + computerWins + "\n\n");
        
        // Wipe Screen
        const screen = document.querySelector('body');
        screen.textContent = "";

        // Declare player winner or loser
        const display = document.createElement('h1');

        if (playerWins == 5) {
            display.textContent = "You win this round...bet you can't win again.";
        } else {
            display.textContent = "Hahahahaha. I beat you!!!!!!";
        }

        screen.appendChild(display);

        // Reset game
        // create button, attach window.location.reload()
        const newButton = document.createElement('button');
        newButton.textContent = "Play Again";
        newButton.addEventListener('click', function() {
            window.location.reload();
        });
        screen.appendChild(newButton);

        // ------------------------------------------------
    } else { // update score (DOM manipulation)
        const player = document.querySelector(".player");
        const comp = document.querySelector(".computer");
        player.textContent = `Puny Human: ${playerWins}`;
        comp.textContent = `Big Strong Computer: ${computerWins}`;
    }
}

// Alert functions
function winAlert() {
    return "You Win!";
}

function loseAlert() {
    return "You Lose!";
}

function drawAlert() {
    return "Draw!";
}

function errorAlert() {
    return "";
}

function updateWins(player, comp) {
    // query select 
    const results = document.querySelector('.results');
    results[0].textContent = "Puny Human: " + player;
    results[1].textContent = "Big String Computer " + comp;
}

// RUN ---------------------------------------------------------------------

// Set up event listeners for rock, paper, scissors buttons
// (Assign them playRound function with appropriate parameter)
const allButtons = document.querySelectorAll('.buttons');
allButtons[0].addEventListener('click', function() {
    playRound('rock');
});
allButtons[1].addEventListener('click', function() {
    playRound('paper');
});
allButtons[2].addEventListener('click', function() {
    playRound('scissors');
});

// Set counter variables
let playerWins = 0;
let computerWins = 0;
