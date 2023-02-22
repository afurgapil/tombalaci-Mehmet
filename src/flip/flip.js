const heads = document.querySelector("#heads");
const tails = document.querySelector("#tails");
const resultP = document.querySelector("#result");
const resultContainer = document.querySelector(".result-container");
const flipTittle = document.querySelector("#flip-tittle");
const resetButton = document.querySelector(".reset-button");
const HEADS = "Heads";
const TAILS = "Tails";
const headsList = heads.classList;
const tailsList = tails.classList;
const containerList = resultContainer.classList;
var gameNumber = 0;
var correctNumber = 0;
var prozent = 0;
var button;
heads.addEventListener("click", function () {
  playGame2(HEADS);
  setBorder1();
  setButton();
});

tails.addEventListener("click", function () {
  playGame2(TAILS);
  setBorder2();
  setButton();
});
resetButton.addEventListener("click", function () {
  resetProzent();
  resetButton.style.display = "none";
});

function playGame2(choice) {
  gameNumber++;
  var randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    resultValue = HEADS;
  } else {
    resultValue = TAILS;
  }
  const win = "Congratulations, you won!";
  const lose = "Sorry, you lost.";

  if (choice === resultValue) {
    result.innerHTML = win;
    containerList.remove("lose");
    containerList.add("win");
    correctNumber++;
  } else {
    result.innerHTML = lose;
    containerList.remove("win");

    containerList.add("lose");
  }
  prozent = (correctNumber / gameNumber) * 100;
  flipTittle.innerHTML = "Your result " + prozent.toFixed(2) + "%";
}
function setBorder1() {
  tailsList.remove("activeButton");
  headsList.remove("activeButton");
  headsList.add("activeButton");
}
function setBorder2() {
  headsList.remove("activeButton");
  tailsList.remove("activeButton");
  tailsList.add("activeButton");
}
function setButton() {
  resetButton.style.display = "block";
}
function resetProzent() {
  prozent = 0;
  gameNumber = 0;
  correctNumber = 0;
  flipTittle.innerHTML = "MAKE YOUR CHOICE!";
  containerList.remove("lose");
  containerList.remove("win");
  resultP.innerHTML = " ";
  headsList.remove("activeButton");
  tailsList.remove("activeButton");
}
