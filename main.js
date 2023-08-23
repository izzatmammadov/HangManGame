const wordBlanks = document.querySelector("#word-blanks");
let wrongGuess = document.querySelector("#wrong-guess");
let guessLeft = document.querySelector("#guess-left");
let winCount = document.querySelector("#win-count");
let loseCount = document.querySelector("#lose-count");

let winScore = 0;
let loseScore = 0;
let guessCount = 9;
let numBlanks = 0;

let people = [
  "jerome",
  "neena",
  "darion",
  "lou",
  "greg",
  "jordan",
  "jasmine",
  "stephen",
  "jacob",
  "adam",
  "rui",
  "luis",
];

let chosenWord = "";
let lettersInChosenWord = [];
var blanksAndSuccesses = [];
var wrongGuesses = [];

function startGame() {
  let guessCount = 9;

  chosenWord = people[Math.floor(Math.random() * people.length)];

  lettersInChosenWord = chosenWord.split("");

  numBlanks = lettersInChosenWord.length;

  blanksAndSuccesses = [];

  wrongGuesses = [];

  for (let i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  guessLeft.innerHTML = guessCount;
  wordBlanks.innerHTML = blanksAndSuccesses.join(" ");
  wrongGuess.innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
  let letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
  } else {
    wrongGuesses.push(letter);
    guessCount--;
  }
}

function roundComplete() {
  guessLeft.innerHTML = guessCount;
  wordBlanks.innerHTML = blanksAndSuccesses.join(" ");
  wrongGuess.innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winScore++;
    guessCount = 9;
    alert("You win!");
    winCount.innerHTML = winScore;
    startGame();
  } else if (guessCount === 0) {
    loseScore++;
    guessCount = 9;
    alert("You lose");
    loseCount.innerHTML = loseScore;
    startGame();
  }
}

startGame();

document.onkeyup = function (event) {
  let letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};
