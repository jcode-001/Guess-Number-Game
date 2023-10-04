"use strict";
const scoreBox = document.querySelector(".score");
const message = document.querySelector(".message");
const numberBox = document.querySelector(".number");
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const playWinSound = () => {
  const checkBtn = document.querySelector(".check");
  const audio = new Audio("assets/audio/retro-win.wav");
  console.log("Playing sound 🎶");
  audio.play();
};

const checkScore = (hint) => {
  if (score > 1) {
    score--;
    scoreBox.textContent = score;
    message.textContent = hint;
  } else {
    message.textContent = "💥 You lost the game!";
    scoreBox.textContent = 0;
  }
};

const checkGuess = () => {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    message.textContent = "⛔ No Number!";

    // when player wins
  } else if (guess === secretNumber) {
    playWinSound();
    message.textContent = "🎉 Correct Number!";
    numberBox.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    numberBox.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    checkScore("📈 Too high");

    // when guess is too low
  } else if (guess < secretNumber) {
    checkScore("📉 Too Low");
  }
};
document.querySelector(".check").addEventListener("click", checkGuess);

/* Again btn */
const resetGame = () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  numberBox.textContent = "?";
  scoreBox.textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  numberBox.style.width = "15rem";
};
document.querySelector(".again").addEventListener("click", resetGame);
