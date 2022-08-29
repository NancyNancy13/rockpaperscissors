window.addEventListener("DOMContentLoaded", start);
// declare the variables
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
function start() {
  console.log(start);
  // add the eventlistener to the buttons
  document.querySelector(".rock").addEventListener("click", chooseRock);
  document.querySelector(".paper").addEventListener("click", choosePaper);
  document.querySelector(".scissors").addEventListener("click", chooseScissors);
  var userhand = this;
}
// show the animation shake and the userchoice
function chooseRock() {
  console.log(chooseRock);
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.classList.add("rock");
  player1.addEventListener("animationend", showHands);
}
function choosePaper() {
  console.log(choosePaper);
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.classList.add("paper");
  player1.addEventListener("animationend", showHands);
}
function chooseScissors() {
  console.log(chooseScissors);
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.classList.add("scissors");
  player1.addEventListener("animationend", showHands);
}

function showHands() {
  console.log(showHands);
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  if (player1 === "rock") {
    player1.classList.add("rock");
    declareResult();
  }
  if (player1 === "paper") {
    player1.classList.add("paper");
    declareResult();
  }
  if (player1 === "scissors") {
    player1.classList.add("scissors");
    declareResult();
  }
  computerChoice();
}

// define the computer choice
function computerChoice() {
  console.log(computerChoice);
  var num = Math.floor(Math.random() * 3) + 1;
  console.log(num);
  if (num === 1) {
    player2.classList.add("rock");
  } else if (num === 2) {
    player2.classList.add("paper");
  } else {
    player2.classList.add("scissors");
  }
  declareResult();
}

function declareResult() {
  console.log(declareResult);
  if (computerChoice === player1) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if ((computerChoice === "rock" && player1 === "paper") || (computerChoice === "paper" && player1 === "scissors") || (computerChoice === "scissors" && player1 === "rock")) {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
  restart();
}
function restart() {
  setTimeout(function () {
    //clear all the classes from player1 and computer
    player1.classList.value = "";
    player2.classList.value = "";
    document.querySelector("html").offsetHeight;
    //adding the hidden class to the text elements
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    //adding the class player to the player and computer to display the img
    player1.classList.add("player");
    player2.classList.add("player");
  }, 2000),
    true;
}
