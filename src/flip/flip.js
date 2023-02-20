const heads = document.querySelector("#heads");
const tails = document.querySelector("#tails");
const resultP = document.querySelector("#result");
const HEADS = "Heads";
const TAILS = "Tails";

heads.addEventListener("click", function () {
  playGame2(HEADS);
});

tails.addEventListener("click", function () {
  playGame2(TAILS);
});

function playGame2(choice) {
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
  } else {
    result.innerHTML = lose;
  }
}
