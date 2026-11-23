# Odin Rock Paper Scissors

A console-based Rock Paper Scissors game against the computer, built with plain HTML and JavaScript for The Odin Project's Foundations course.

**Repo:** [GitHub link here](https://marka-quipit.github.io/odin-rock-paper-scissors/)

**Assignment:** [Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

## How to play

1. Open `index.html` in a browser.
2. Open the developer console (F12) or `Command + Shift + C`.
3. Answer the prompt with rock, paper, or scissors (any capitalization works).
4. Play 5 rounds. The console logs each round's result and the running score.

## What's in it

- `getComputerChoice()` returns "rock", "paper", or "scissors" using `Math.random()` and conditionals (no arrays)
- `getHumanChoice()` uses `prompt()` and lowercases the input so it's case-insensitive
- `playRound(humanChoice, computerChoice)` compares both choices, logs the result (for example "You lose! Paper beats Rock"), and updates the score
- `playGame()` runs 5 rounds in a `for` loop and logs the score after each round
- Basic handling for ties and invalid answers

## Project structure

```
odin-rock-paper-scissors/
├── index.html
└── script.js
└── README.md
```

## What I practiced

- Linking an external JavaScript file with a script tag
- Functions, parameters, and return values
- `Math.random()` and conditional logic
- `if / else if / else` chains
- `prompt()` and `console.log()`
- Global variables for state (`humanScore`, `computerScore`)
- A `for` loop to repeat rounds
- Committing one step at a time with descriptive messages

## Where I did it differently

The assignment says to move the score variables inside `playGame`. I kept `humanScore` and `computerScore` in the global scope because `playRound` updates them directly and it made more sense to me that way.

## Scope

Console only. No UI, CSS, or extra features on purpose, per the assignment.

## What was hard

I did not find anything hard as I used javascript before, this is more like I am remembering the basic functions syntaxes. 

## My thoughts on this project

This project is great for beginners and for someone like that likes a refreshers without using objects or arrays.

## Progress notes

| Step | Done |
|---|---|
| 1. Setup | Repo, HTML file, script tag, "Hello World" check |
| 2. Computer choice | `getComputerChoice` |
| 3. Human choice | `getHumanChoice` |
| 4. Scores | `humanScore` and `computerScore` |
| 5. Single round | `playRound` |
| 6. Full game | `playGame` with 5 rounds |

## Notes

The code is my own work. The README was drafted with Claude from my solution, and the sections marked as my own writing are mine.