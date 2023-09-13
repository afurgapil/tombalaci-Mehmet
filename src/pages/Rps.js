import React, { useState, useEffect } from "react";
import Rock from "../assets/6.png";
import Paper from "../assets/7.png";
import Scissors from "../assets/8.png";
import Robot from "../assets/robot.png";
import GoBack from "../Tools/GoBack";

//firebase
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
//alertify
import alertify from "alertifyjs";
import { Helmet } from "react-helmet";
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
    const computerIndex = getRandomInt() % 3;
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
      const newScore = score + 20;
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
    element.classList.add("border-blue-600");
  }

  useEffect(() => {
    document.getElementById("robot2").src = newImage;
  }, [newImage]);

  return (
    <div className="min-h-screen bg-bg flex flex-row justify-center items-center">
      <Helmet>
        <title>RPS | Tombalaci Mehmet</title>
        <meta name="description" content="rock paper scissorss game " />
      </Helmet>
      <GoBack></GoBack>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center text-center content-center">
          <img
            id="robot"
            className=" animate-pulse  w-52 h-52 "
            src={Robot}
            alt=" "
          ></img>
          <img id="robot2" className="w-52 h-52" alt=" "></img>
        </div>
        <div id="vs">
          <h1 className="font-[Teko] text-6xl mx-4">VS</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            id="rock"
            className="w-32 h-32 m-4 p-1 hover:bg-red-500 hover:opacity-50 rounded-[100px]"
            src={Rock}
            alt="Rock"
            onClick={() => handleClick("rock")}
          ></img>
          <img
            id="paper"
            className="w-32 h-32 m-4 hover:bg-red-500 hover:opacity-50 rounded-[100px]"
            src={Paper}
            alt="Paper"
            onClick={() => handleClick("paper")}
          ></img>
          <img
            id="scissors"
            className="w-32 h-32 m-4 hover:bg-red-500 hover:opacity-50 rounded-[100px]"
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
