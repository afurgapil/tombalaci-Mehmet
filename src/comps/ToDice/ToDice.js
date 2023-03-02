import React, { useState } from "react";
import "./todice.scss";
import alertify from "alertifyjs";

export default function ToDice() {
  const [diceNumber, setDiceNumber] = useState(1);

  function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => (dot.style.display = "none"));
    if (randomNumber === 1) {
      showDot(5);
    } else if (randomNumber === 2) {
      showDot(2);
      showDot(3);
    } else if (randomNumber === 3) {
      showDot(2);
      showDot(3);
      showDot(5);
    } else if (randomNumber === 4) {
      showDot(1);
      showDot(2);
      showDot(3);
      showDot(4);
    } else if (randomNumber === 5) {
      showDot(1);
      showDot(2);
      showDot(3);
      showDot(4);
      showDot(5);
    } else if (randomNumber === 6) {
      showDot(1);
      showDot(2);
      showDot(3);
      showDot(4);
      showDot(6);
      showDot(7);
    }
  }

  function showDot(index) {
    let dot = document.querySelector(`.dot:nth-child(${index})`);
    dot.style.display = "block";
  }
  function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let userGuess = parseInt(document.getElementById("guessInput").value);

    if (randomNumber === userGuess) {
      alertify.set("notifier", "position", "bottom-right");
      // alert("Congratulations! You guessed the number!");
      alertify.success("Hey Tebrikler");
    } else {
      alertify.error("Başaramadık");
    }
  }

  return (
    <div className="ToDice">
      <div className="dice-container">
        <div className="dice">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <p>Dice Number: {diceNumber}</p>
      <button onClick={rollDice}>Roll Dice</button>
      <div>
        <input type="number" id="guessInput" />
        <button
          onClick={() => {
            guessNumber();
            rollDice();
          }}
        >
          Guess the Number
        </button>
      </div>
    </div>
  );
}
