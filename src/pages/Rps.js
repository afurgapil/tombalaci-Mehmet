import React, { useState, useEffect, useContext } from "react";
import Rock from "../assets/6.png";
import Paper from "../assets/7.png";
import Scissors from "../assets/8.png";
import Robot from "../assets/robot.png";
import GoBack from "../Tools/GoBack";
import getRandomInt from "../utils/getRandomInt";

import { useUser } from "../hooks/useUser";
import { UserContext } from "../context/UserContext";
//alertify
import alertify from "alertifyjs";
import { Helmet } from "react-helmet";
import { useToken } from "../hooks/useToken";
const Game = () => {
  const user = useUser();
  const token = useToken();
  const { updateScoreContext } = useContext(UserContext);
  const { updateStatContext } = useContext(UserContext);
  const [newImage, setNewImage] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const choices = ["rock", "paper", "scissors"];
  const point = Number(process.env.REACT_APP_POINT);
  const game = process.env.REACT_APP_CORRECT_RPS;
  useEffect(() => {
    const robotElement = document.getElementById("robot2");
    if (robotElement) {
      robotElement.src = newImage;
    }
  }, [newImage]);
  const handleClick = (choice) => {
    const computerIndex = getRandomInt() % 3;
    checkResult(choice, choices[computerIndex], computerIndex);
    setIsGameStarted(true);
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
      alertify.warning("Tie!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      alertify.success("You win!     +20");
      updateScoreContext(user.id, user.email, token, 2 * point);
      updateStatContext(user.id, user.email, token, game);
    } else {
      alertify.error("Ups -10");
      updateScoreContext(user.id, user.email, token, -point);
    }
  };

  function activateElement(choice) {
    const elements = document.querySelectorAll(".active-rps");
    elements.forEach((el) => {
      el.classList.remove("active");
    });
    const element = document.getElementById(choice);
    element.classList.add("border-blue-600");
  }

  return (
    <div className="min-h-screen bg-bg flex flex-row justify-center items-center">
      <Helmet>
        <title>RPS | Tombalaci Mehmet</title>
        <meta name="description" content="rock paper scissorss game " />
      </Helmet>
      <GoBack></GoBack>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center text-center content-center">
          {!isGameStarted && (
            <img
              id="robot"
              className=" animate-pulse  w-52 h-52 "
              src={Robot}
              alt=" "
            ></img>
          )}
          {isGameStarted && (
            <img id="robot2" className="w-52 h-52" alt=""></img>
          )}
        </div>
        <div id="vs" className="flex justify-center items-center">
          <h1 className="font-[Teko] text-6xl mx-4">VS</h1>
        </div>
        <div className="flex flex-row md:flex-col  justify-center items-center">
          <img
            id="rock"
            className="w-24 h-24 md:w-32 md:h-32 m-4  hover:bg-red-500 hover:opacity-50 rounded-[100px]"
            src={Rock}
            alt="Rock"
            onClick={() => handleClick("rock")}
          ></img>
          <img
            id="paper"
            className="w-24 h-24 md:w-32 md:h-32 m-4 hover:bg-red-500 hover:opacity-50 rounded-[100px]"
            src={Paper}
            alt="Paper"
            onClick={() => handleClick("paper")}
          ></img>
          <img
            id="scissors"
            className="w-24 h-24 md:w-32 md:h-32 m-4hover:bg-red-500 hover:opacity-50 rounded-[100px]"
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
