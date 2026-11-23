// Global Variable Scope for Scores (Did not follow the instructions, as this makes more sense for me)
let humanScore = 0;
let computerScore = 0;

// Computer Answer Randomizer 
function getComputerChoice() {
    let randomChoice = Math.round(Math.random() * 100) / 100;

    if (randomChoice > 0 && randomChoice < 0.33) {
        return "rock";
    } else if (randomChoice > 0.34 && randomChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Human Prompted Answer
function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper and Scissors:");
    return humanChoice.toLowerCase();
}

// Single Round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("Both " + humanChoice + ", Tie!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return console.log("You win! Rock beats Scissors");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return console.log("You lose! Scissors beats Paper");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return console.log("You win! Paper beats Rock");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return console.log("You win! Scissors beats Paper");
    } else {
        return console.log("Invalid answer!") // basic edge casing
    }
}

// Game of 5 Rounds
function playGame() {
    let humanChoice;
    let computerChoice;
    let totalRounds = 1;

    for(let i = 0; i < 5; i++) {
        console.log("=========== Round " + totalRounds + " ===========");
        totalRounds++;

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Your Score: " + humanScore + " || Computer Score: " + computerScore);
    }
}

playGame();