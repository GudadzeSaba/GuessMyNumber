"use strict";
let score = 20;
let labelScore = document.querySelector(".label-score");
let highscore = 0;
let labelHighscore = document.querySelector(".label-highscore");
console.log(score);
let number = (document.querySelector(".number").value = Math.round(
  Math.random() * 19 + 1
));
const check = document.querySelector(".check");
let guess = document.querySelector(".guess");
let message = document.querySelector(".message");

check.addEventListener("click", function () {
  let guessValue = parseInt(guess.value);
  if (number === guessValue) {
    document.querySelector(".message").textContent = "Correct number";
    document.body.style.backgroundColor = "#7FFF94";
  } else if (number - guessValue === 2 || number - guessValue === 1) {
    document.querySelector(".message").textContent = "Lower";
  } else if (number - guessValue === -2 || number - guessValue === -1) {
    document.querySelector(".message").textContent = "Higher";
  } else if (number > guessValue) {
    document.querySelector(".message").textContent = "Too low";
  } else if (number < guessValue) {
    document.querySelector(".message").textContent = "Too high";
  }
});
check.addEventListener("click", function () {
  //let guessValue = parseInt(guess.value);
  score--;
  labelScore.textContent = "💯 Score: " + score.toString();
  if (message.textContent === "Correct number" && score > highscore) {
    highscore = score;
    labelHighscore.textContent = "🥇 Highscore: " + highscore.toString();
  }
});
const again = document.querySelector(".again");

again.addEventListener("click", function () {
  number = Math.round(Math.random() * 19 + 1);
  document.body.style.backgroundColor = "#222";
  score = 20;
  labelScore.textContent = "💯 Score: " + score.toString();
});
