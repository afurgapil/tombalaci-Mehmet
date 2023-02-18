const startButton = document.querySelector("#start-button");
const endButton = document.querySelector("#end-button");
const gameContainer = document.querySelector("#game-container");
const pauseButton = document.querySelector("#pause-button");
const pauseAlert = document.querySelector(".pauseAlert");
const finishAlert = document.querySelector(".finishAlert");
const menuIcon = document.querySelector("#menu-icon");

let intervalId;
numbers = Array.from({ length: 90 }, (_, i) => i + 1);

startButton.addEventListener("click", function () {
  intervalId = null;
  startButton.style.display = "none";
  endButton.style.display = "block";
  pauseButton.style.display = "block";
  drawnNumbers = [];
  playGame();
});

endButton.addEventListener("click", function () {
  endGame();
  getNumber();
});
pauseButton.addEventListener("click", function () {
  if (pauseButton.textContent === "Duraklat") {
    clearInterval(intervalId);
    intervalId = null;
    pauseButton.textContent = "Devam et";
    pauseAlert.style.display = "inline-block";
  } else {
    playGame();
    pauseButton.textContent = "Duraklat";
    pauseAlert.style.display = "none";
  }
});
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("passive");
});
function getRandomNumber() {
  return numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
}
function getNumber() {
  numbers = Array.from({ length: 90 }, (_, i) => i + 1);
}
function playGame() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      const number = getRandomNumber();
      if (drawnNumbers.includes(number)) {
        return;
      }
      drawnNumbers.push(number);
      if (drawnNumbers.length === 90) {
        pauseButton.style.display = "none";
        clearInterval(intervalId);
        finishAlert.style.display = "inline-block";
      }

      const numberBox = document.createElement("div");
      numberBox.classList.add("number-box");
      numberBox.textContent = number;
      gameContainer.appendChild(numberBox);
    }, 2000);
  } else {
    intervalId = setInterval(intervalId);
    pauseButton.textContent = "Duraklat";
    pauseAlert.style.display = "none";
  }
}

function endGame() {
  startButton.style.display = "block";
  endButton.style.display = "none";
  pauseButton.style.display = "none";
  pauseAlert.style.display = "none";
  finishAlert.style.display = "none";
  drawnNumbers = [];
  gameContainer.innerHTML = "";
  clearInterval(intervalId);
  if (pauseButton.textContent == "Devam et") {
    pauseButton.textContent = "Duraklat";
  }
}
