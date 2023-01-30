const startButton = document.querySelector("#start-button");
const endButton = document.querySelector("#end-button");
const gameContainer = document.querySelector("#game-container");
let intervalId;
startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  endButton.style.display = "block";
  playGame();
});

endButton.addEventListener("click", function () {
  endGame();
});

function playGame() {
  const drawnNumbers = [];
  intervalId = setInterval(() => {
    const number = Math.floor(Math.random() * 90) + 1;
    if (drawnNumbers.includes(number)) {
      return;
    }
    drawnNumbers.push(number);

    const numberBox = document.createElement("div");
    numberBox.classList.add("number-box");
    numberBox.textContent = number;
    gameContainer.appendChild(numberBox);
  }, 3000);
}

function endGame() {
  startButton.style.display = "block";
  endButton.style.display = "none";
  gameContainer.innerHTML = "";
  clearInterval(intervalId);
}
