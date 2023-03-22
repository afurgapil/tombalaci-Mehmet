import React, { useEffect, useState } from "react";
import "./coinflip.scss";
import point from "../../assets/score.png";
import alertify from "alertifyjs";
alertify.set("notifier", "position", "top-right");
alertify.set("notifier", "delay", 1);
const CoinFlip = () => {
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [score, setScore] = useState(localStorage.getItem("score"));
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);

  const playGame = () => {
    const randomNum = Math.random();
    const newResult = randomNum < 0.5 ? "Heads" : "Tails";
    setResult(newResult);
    setTotalGuesses(totalGuesses + 1);
    if (choice === result) {
      setCorrectGuesses(correctGuesses + 1);
      setScore(score + 10);
      localStorage.setItem("score", score + 10);
      alertify.success("Congrats! +10", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
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
