import React, { useState, useEffect } from "react";
import "./Rps.scss";
import Rock from "../../assets/6.png";
import Paper from "../../assets/7.png";
import Scissors from "../../assets/8.png";
import Robot from "../../assets/robot.png";
import Vs from "../../assets/vs.png";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [newImage, setNewImage] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const computerIndex = Math.floor(Math.random() * 3);
    setComputerChoice(choices[computerIndex]);
    checkResult(choice, choices[computerIndex], computerIndex);
    removePulse();
  };

  const checkResult = (player, computer, computerIndex) => {
    if (computerIndex === 0) {
      setNewImage(Rock);
    } else if (computerIndex === 1) {
      setNewImage(Paper);
    } else if (computerIndex === 2) {
      setNewImage(Scissors);
    }
    if (player === computer) {
      setResult("Tie!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };
  const removePulse = () => {
    const element = document.getElementById("robot");
    element.classList.remove("pulse");
  };

  useEffect(() => {
    document.getElementById("robot2").src = newImage;
  }, [newImage]);

  return (
    <div>
      <div id="game-container">
        <div id="robo">
          <img id="robot" className="pulse" src={Robot} alt=" "></img>
          <img id="robot2" alt=" "></img>
        </div>
        <div id="vs">
          <img src={Vs} id="vs" alt=" "></img>
        </div>
        <div id="buttons">
          <img
            className="button"
            src={Rock}
            alt="Rock"
            onClick={() => handleClick("rock")}
          ></img>
          <img
            className="button"
            src={Paper}
            alt="Paper"
            onClick={() => handleClick("paper")}
          ></img>
          <img
            className="button"
            src={Scissors}
            alt="Scissors"
            onClick={() => handleClick("scissors")}
          ></img>
        </div>
        <div id="game-result">
          {playerChoice && (
            <p>
              You chose: <strong>{playerChoice}</strong>
            </p>
          )}
          {computerChoice && (
            <p>
              The computer chose: <strong>{computerChoice}</strong>
            </p>
          )}
          {result && <h2>{result}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Game;
