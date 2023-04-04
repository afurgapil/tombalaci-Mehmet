import React, { useEffect, useState } from "react";
import "./coinflip.scss";
import point from "../../assets/score.png";
import alertify from "alertifyjs";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
alertify.set("notifier", "position", "top-right");
alertify.set("notifier", "delay", 1);

const CoinFlip = () => {
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [score, setScore] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then((doc) => {
          if (doc.exists()) {
            setScore(doc.data().score);
          } else {
            updateDoc(userDocRef, { score: 0 });
            setScore(0);
          }
        });
      }
    });
  }, []);
  function getRandomFloat() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / 4294967295;
  }

  const playGame = () => {
    const randomNum = getRandomFloat();
    const newResult = randomNum < 0.5 ? "Heads" : "Tails";
    setResult(newResult);
    setTotalGuesses(totalGuesses + 1);
    if (choice === newResult) {
      setCorrectGuesses(correctGuesses + 1);
      const newScore = score + 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
      alertify.success("Congrats! +10", 1);
    } else {
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
      alertify.error("Ups! Unlucky. -10", 1);
    }
  };

  return (
    <div>
      <div id="score">
        <img src={point} alt="" width="120px" height="80px" />
        <h1>Your Score: {score}</h1>
      </div>
      <div id="coinflip-container">
        <h2 className="cf-title">Make Your Choice!</h2>
        <div id="buttons">
          <button
            className="heads buton"
            onClick={() => {
              setChoice("Heads");
              playGame();
            }}
          >
            Heads
          </button>
          <button
            className="tails buton"
            onClick={() => {
              setChoice("Tails");
              playGame();
            }}
          >
            Tails
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
