import React, { useEffect, useState } from "react";
import "./coinflip.scss";
import welcomecoin from "../../assets/welcomecoin.gif";
import GoBack from "../Tools/GoBack";
//firebase
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
//mui
import { Button } from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Person4Icon from "@mui/icons-material/Person4";
//alertify
import alertify from "alertifyjs";
alertify.set("notifier", "position", "top-right");
alertify.set("notifier", "delay", 1);

const CoinFlip = () => {
  const [choice, setChoice] = useState(null);
  const [correctCoinflip, setCorrectCoinflip] = useState(null);
  const [score, setScore] = useState(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isResultHead, setIsResultHead] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then((doc) => {
          if (doc.exists()) {
            setScore(doc.data().score);
            setCorrectCoinflip(doc.data().correctCoinflip);
          } else {
            updateDoc(userDocRef, { score: 0 });
            setScore(0);
            setCorrectCoinflip(0);
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
    if (randomNum < 0.5) {
      setIsResultHead(true);
    } else {
      setIsResultHead(false);
    }
    setIsGameStart(true);
    if (choice === newResult) {
      const newScore = score + 10;
      setScore(newScore);
      const newCorrectCoinflip = correctCoinflip + 1;
      setCorrectCoinflip(newCorrectCoinflip);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        score: newScore,
        correctCoinflip: newCorrectCoinflip,
      });
      alertify.success("Congrats! +10", 1);
    } else {
      const newScore = score - 10;
      setScore(newScore);
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
      alertify.error("Ups! Unlucky. -10", 1);
    }
  };
  function OnHead() {
    return <CurrencyBitcoinIcon className="silvercoin"></CurrencyBitcoinIcon>;
  }
  function OnTail() {
    return <Person4Icon className="silvercoin"></Person4Icon>;
  }
  return (
    <div>
      <div id="coinflip-container">
        <GoBack></GoBack>
        {!isGameStart ? (
          <div id="coinflip-gif-container">
            <img src={welcomecoin} alt="Coin"></img>
          </div>
        ) : (
          <div className="coin-border-out">
            <div className="coin-border-in">
              {isResultHead ? <OnHead></OnHead> : <OnTail></OnTail>}
            </div>
          </div>
        )}
        <div id="buttons">
          <Button
            variant="contained"
            color="primary"
            className="heads buton"
            onClick={() => {
              setChoice("Heads");
              playGame();
            }}
          >
            Heads
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="tails buton"
            onClick={() => {
              setChoice("Tails");
              playGame();
            }}
          >
            Tails
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
