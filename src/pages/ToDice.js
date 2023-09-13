import React, { useEffect, useState } from "react";
import GoBack from "../Tools/GoBack";
//firebase
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { Helmet } from "react-helmet";
//alertify
import alertify from "alertifyjs";
alertify.set("notifier", "position", "top-right");
alertify.set("notifier", "delay", 1);

export default function ToDice() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(null);
  const [correctDice, setCorrectDice] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then((doc) => {
          if (doc.exists()) {
            setScore(doc.data().score);
            setCorrectDice(doc.data().correctDice);
          } else {
            updateDoc(userDocRef, { score: 0 });
            setScore(0);
            setCorrectDice(0);
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
  function rollDice() {
    let randomNumber = (getRandomInt() % 6) + 1;
    console.log(randomNumber);
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
    alertify.warning(`The number is  ${randomNumber}`);
  }

  function showDot(index) {
    let dot = document.querySelector(`.dot:nth-child(${index})`);
    dot.style.display = "block";
  }
  function guessNumber() {
    let userGuess = parseInt(document.getElementById("guessInput").value);

    let randomNumberr = (getRandomInt() % 6) + 1;
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
      alertify.success("Congrats! +50");
      const newScore = score + 50;
      setScore(newScore);
      const newCorrectDice = correctDice + 1;
      setCorrectDice(newCorrectDice);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctDice: newCorrectDice,
      });
    } else {
      alertify.error(`Ups! Unlucky, the number was  ${randomNumberr}. -10`);
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
    }
  }
  function isEven() {
    let randomNumberr = (getRandomInt() % 6) + 1;
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

    if (randomNumberr === 2 || randomNumberr === 4 || randomNumberr === 6) {
      const newScore = score + 10;
      setScore(newScore);
      const newCorrectDice = correctDice + 1;
      setCorrectDice(newCorrectDice);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctDice: newCorrectDice,
      });
      alertify.success("Congrats! +10");
    } else {
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
      alertify.error(`Ups! Unlucky, the number was  ${randomNumberr}. -10`);
    }
  }
  function isOdd() {
    let randomNumberr = (getRandomInt() % 6) + 1;
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
    }

    if (randomNumberr === 1 || randomNumberr === 3 || randomNumberr === 5) {
      alertify.success("Congrats! +10");
      const newScore = score + 10;
      setScore(newScore);
      const newCorrectDice = correctDice + 1;
      setCorrectDice(newCorrectDice);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctDice: newCorrectDice,
      });
    } else {
      alertify.error(`Ups! Unlucky, the number was  ${randomNumberr}. -10`);
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
    }
  }
  function isLow() {
    let randomNumberr = (getRandomInt() % 6) + 1;
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

    if (randomNumberr === 1 || randomNumberr === 2 || randomNumberr === 3) {
      alertify.success("Congrats! +10");
      const newScore = score + 10;
      setScore(newScore);
      const newCorrectDice = correctDice + 1;
      setCorrectDice(newCorrectDice);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctDice: newCorrectDice,
      });
    } else {
      alertify.error(`Ups! Unlucky, the number was  ${randomNumberr}. -10`);
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
    }
  }
  function isHigh() {
    let randomNumberr = (getRandomInt() % 6) + 1;
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

    if (randomNumberr === 4 || randomNumberr === 5 || randomNumberr === 6) {
      alertify.success("Congrats! +10");
      const newScore = score + 10;
      setScore(newScore);
      const newCorrectDice = correctDice + 1;
      setCorrectDice(newCorrectDice);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctDice: newCorrectDice,
      });
    } else {
      alertify.error(`Ups! Unlucky, the number was  ${randomNumberr}. -10`);
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
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
    <div className="flex justify-center items-start min-h-screen bg-bg pt-20">
      <Helmet>
        <title>To Dice| Tombalaci Mehmet</title>
        <meta name="description" content="to dice game " />
      </Helmet>
      <GoBack></GoBack>
      <div className="flex flex-col justify-center items-center text-center">
        <button
          className=" text-base w-40 h-10 bg-[#333] hover:bg-[#334] text-white p-2 rounded-md cursor-pointer  outline-none left-0 my-4"
          onClick={rollDice}
        >
          Roll Dice
        </button>
        <div className="w-40 h-40 bg-white border-2 border-solid border-black flex justify-center items-center text-7xl font-bold relative my-4">
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute top-2 left-2"></div>
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute top-2 right-2"></div>
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute bottom-2 left-2"></div>
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute bottom-2 right-2"></div>
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute top-15 left-15"></div>
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute top-2 left-15"></div>
          <div className="dot w-7 h-7 bg-black rounded-full m-1 absolute bottom-2 right-15"></div>
        </div>
        <div className="flex flex-row justify-center items-start my-4">
          <div className="flex flex-col justify-center items-center mx-4">
            <button
              className="w-25 h-12 bg-[#333] text-white text-center text-2xl px-2 py-4 my-4 rounded-md cursor-pointer outline-none left-0  disabled:cursor-not-allowed disabled:opacity-50 "
              onClick={() => {
                guessNumber();
              }}
            >
              Guess!
            </button>
            <input
              type="number"
              id="guessInput"
              onKeyPress={handleKeyPress}
              className=" w-24 h-12 text-lg border-2 border-solid border-[#ccc] rounded-xl outline-none focus:border-dodgerblue appearance-none"
            />
          </div>
          <div className="flex flex-col justify-center items-center mx-4">
            <button
              className="w-25 h-12 bg-[#333] text-white text-2xl px-2 py-4 my-4  rounded-md cursor-pointer outline-none left-0 disabled:cursor-not-allowed disabled:opacity-50 "
              onClick={() => {
                isEven();
              }}
            >
              Even!
            </button>
            <button
              className="w-25 h-12 bg-[#333] text-white text-2xl px-2 py-4 rounded-md cursor-pointer outline-none left-0  disabled:cursor-not-allowed disabled:opacity-50 "
              onClick={() => {
                isOdd();
              }}
            >
              Odd!
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mx-4">
            <button
              className="w-25 h-12 bg-[#333] text-white text-2xl px-2 py-4 my-4  rounded-md cursor-pointer outline-none left-0  disabled:cursor-not-allowed disabled:opacity-50 "
              onClick={() => {
                isLow();
              }}
            >
              Low!
            </button>
            <button
              className="w-25 h-12 bg-[#333] text-white text-2xl px-2 py-4 rounded-md cursor-pointer outline-none left-0  disabled:cursor-not-allowed disabled:opacity-50 "
              onClick={() => {
                isHigh();
              }}
            >
              High!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
