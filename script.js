let humanScore = 0;
let computerScore = 0;

// Computer Answer Randomizer 
function getComputerChoice() {
    let randomChoice = Math.random();

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