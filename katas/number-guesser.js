// secretGist name: lhl-katas--number-guesser.js
// Package requirements
let prompt = require("prompt-sync")();

// Global constants
const randNumberMax = 10;
const userGuessLog = [];
const userInstructions = `Welcome to the number guessing game! You'll be prompted to guess a ` +
`number until you guess it correctly. The correct number will be chosen ` +
`at random between 0 and ${randNumberMax}. Type "exit" to quit early.`;

// Exit messages
const exitTheGame = (numGuesses, correctNum, correctGuess) => {
  const plural = numGuesses === 1 ? "guess" : "guesses";
  if (correctGuess) {
    console.log(`${correctNum} is correct! That took you ${numGuesses} valid ${plural}.`);
  } else {
    console.log(`Game exited after ${numGuesses} valid ${plural}. The correct number was ${correctNum}.`);
  }
};

// Random number generator
const generateRandomNumber = (max) => Math.floor(Math.random() * max);

// isNumber boolean check
const isNumber = (strInput) => Number.isInteger(Number(strInput)) && strInput !== " ";

// Create func to update global userGuessLog array with new guesses
const updateGuessLog = thisGuess => {
  if (!userGuessLog.includes(thisGuess)) {
    userGuessLog.push(thisGuess);
  }
};

const main = () => {
  // Print instructions for user and set initial guess value
  console.log(userInstructions);
  let userGuess = "";

  // Set random number (toggle comment below to show/hide correct num)
  const correctNum = String(generateRandomNumber(randNumberMax));
  // console.log(`(Don't tell anyone but the correct num is ${correctNum}.`); // TOGGLE
  
  while (userGuess !== correctNum) { // Exit loop when user's guess is correct
    userGuess = prompt("Guess a number: ");
    if (isNumber(userGuess)) {
      updateGuessLog(userGuess);
    } else if (userGuess === "exit") { // Check if user wants to exit
      return exitTheGame(userGuessLog.length, correctNum, false);
    } else {
      console.log("Only numbers are valid! We didn't count that guess.");
    }
  }
  // User's last guess must have been correct:
  return exitTheGame(userGuessLog.length, correctNum, true);
};

main();