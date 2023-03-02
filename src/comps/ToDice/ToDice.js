import React, { useEffect, useState } from "react";
import "./todice.scss";
import point from "../../assets/score.png";

import alertify from "alertifyjs";

export default function ToDice() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(50);
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);

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
    let userGuess = parseInt(document.getElementById("guessInput").value);

    let randomNumberr = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumberr);
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => (dot.style.display = "none"));
    if (randomNumberr === 1) {
      showDot(5);
    } else if (randomNumberr === 2) {
      showDot(2);
      showDot(3);
    } else if (randomNumberr === 3) {
      showDot(2);
      showDot(3);
      showDot(5);
    } else if (randomNumberr === 4) {
      showDot(1);
      showDot(2);
      showDot(3);
      showDot(4);
    } else if (randomNumberr === 5) {
      showDot(1);
      showDot(2);
      showDot(3);
      showDot(4);
      showDot(5);
    } else if (randomNumberr === 6) {
      showDot(1);
      showDot(2);
      showDot(3);
      showDot(4);
      showDot(6);
      showDot(7);
    } //

    if (randomNumberr === userGuess) {
      alertify.success("Congrats!");
      setScore(score + 20);
      localStorage.setItem("score", score + 20);
    } else {
      alertify.error(`Ups! Unlucky, the number was  ${randomNumberr}.`);
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
    }
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      guessNumber();
    } else if (isNaN(parseInt(event.key, 10))) {
      event.preventDefault();
    }
  }
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);

  return (
    <div className="ToDice">
      <div id="score">
        <img src={point} alt="" width="120px" height="80px" />

        <h1>Your Score: {score}</h1>
      </div>
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
        <div className="buttons">
          <button className="enjoy" onClick={rollDice}>
            Roll Dice
          </button>

          <div className="guess">
            <button
              onClick={() => {
                guessNumber();
              }}
            >
              Guess!
            </button>
            <input type="number" id="guessInput" onKeyPress={handleKeyPress} />
          </div>
        </div>
      </div>
    </div>
  );
}
