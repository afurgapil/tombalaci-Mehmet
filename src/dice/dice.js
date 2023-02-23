function toDice(diceCount) {
  var dicePanel = document.querySelector("#dice-panel");
  var dice = document.querySelector("#dice");
  var diceResult = document.querySelector("#dice-result");
  var dicePunkts = document.querySelector("#dice-punkts");

  var result = 0;

  dicePanel.classList.remove("diced");
  //   void diced.offsetWidth;
  dicePanel.classList.add("diced");

  var diceTime = 0;
  var diceanimation = setInterval(function () {
    dice.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
    diceTime += 100;
    if (diceTime > 1000) {
      clearInterval(diceanimation);
      dice.style.transform = "rotate(0deg)";
      diceResult.innerHTML = "";

      dicePunkts.innerHTML = "";
      result += Math.floor(Math.random() * 6) + 1;

      for (var i = 0; i < result; i++) {
        var punkt = document.createElement("div");
        punkt.classList.add("dice-punkt");
        dicePunkts.appendChild(punkt);
      }

      diceResult.innerHTML = "Result: " + result;
    }
  }, 100);
}
