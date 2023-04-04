import React, { useState, useEffect } from "react";
import "./Rps.scss";
import Rock from "../../assets/6.png";
import Paper from "../../assets/7.png";
import Scissors from "../../assets/8.png";
import Robot from "../../assets/robot.png";
//firebase
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
//alertify
import alertify from "alertifyjs";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [newImage, setNewImage] = useState("");
  const [score, setScore] = useState(null);
  const [correctRPS, setCorrectRPS] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then((doc) => {
          if (doc.exists()) {
            setScore(doc.data().score);
            setCorrectRPS(doc.data().correctRps);
          } else {
            updateDoc(userDocRef, { score: 0 });
            setScore(0);
            setCorrectRPS(0);
          }
        });
      }
    });
  }, []);

  function getRandomInt() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  }
  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const computerIndex = (getRandomInt() % 3) + 1;
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
      const newScore = score + 10;
      setScore(newScore);
      const newCorrectRPS = correctRPS + 1;
      setCorrectRPS(newCorrectRPS);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctRps: newCorrectRPS,
      });
    } else {
      setResult("You lose!");
      alertify.error("Ups -10");
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
    }
  };
  const removePulse = () => {
    const element = document.getElementById("robot");
    element.classList.add("none");
  };
  function activateElement(choice) {
    const elements = document.querySelectorAll(".active-rps");
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
    <div id="rps-container">
      <div id="game-container">
        <div id="robo">
          <img id="robot" className="pulse" src={Robot} alt=" "></img>
          <img id="robot2" alt=" "></img>
        </div>
        <div id="vs">
          <h1 className="versus">VS</h1>
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
