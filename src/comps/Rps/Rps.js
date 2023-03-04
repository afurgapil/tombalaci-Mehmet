import React, { useState, useEffect } from "react";
import "./Rps.scss";
import Rock from "../../assets/6.png";
import Paper from "../../assets/7.png";
import Scissors from "../../assets/8.png";
import Robot from "../../assets/robot.png";
import Vs from "../../assets/vs.png";
import point from "../../assets/score.png";

import alertify from "alertifyjs";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [newImage, setNewImage] = useState("");
  const [score, setScore] = useState(localStorage.getItem("score"));
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const computerIndex = Math.floor(Math.random() * 3);
    setComputerChoice(choices[computerIndex]);
    checkResult(choice, choices[computerIndex], computerIndex);
    removePulse();
    activateElement(choice);
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
      alertify.warning("Tie!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
      alertify.success("You win!     +20");
      setScore(score + 20);
      localStorage.setItem("score", score + 20);
    } else {
      setResult("You lose!");
      alertify.error("Ups -10");
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
    }
  };
  const removePulse = () => {
    const element = document.getElementById("robot");
    element.classList.add("none");
  };
  function activateElement(choice) {
    const elements = document.querySelectorAll(".active");
    elements.forEach((el) => {
      el.classList.remove("active");
    });
    const element = document.getElementById(choice);
    element.classList.add("active");
  }

  useEffect(() => {
    document.getElementById("robot2").src = newImage;
  }, [newImage]);

  return (
    <div>
      <div id="score">
        <img src={point} alt="" width="120px" height="80px" />
        <h1>Your Score: {score}</h1>
      </div>
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
            id="rock"
            className="button"
            src={Rock}
            alt="Rock"
            onClick={() => handleClick("rock")}
          ></img>
          <img
            id="paper"
            className="button"
            src={Paper}
            alt="Paper"
            onClick={() => handleClick("paper")}
          ></img>
          <img
            id="scissors"
            className="button"
            src={Scissors}
            alt="Scissors"
            onClick={() => handleClick("scissors")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Game;
