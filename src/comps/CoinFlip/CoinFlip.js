import React, { useState } from "react";
import "./coinflip.scss";

const CoinFlip = () => {
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);

  const playGame = () => {
    const randomNum = Math.random();
    const newResult = randomNum < 0.5 ? "Heads" : "Tails";
    setResult(newResult);
    setTotalGuesses(totalGuesses + 1);
    if (choice === newResult) {
      setCorrectGuesses(correctGuesses + 1);
    }
    setShowResetButton(true);
  };

  const resetGame = () => {
    setChoice(null);
    setResult(null);
    setTotalGuesses(0);
    setCorrectGuesses(0);
    setShowResetButton(false);
  };

  return (
    <div id="main">
      <h2>Make Your Choice!</h2>
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
      {result && (
        <p id="result">
          <p id="result-color" className={choice === result ? "win" : "lose"}>
            {choice === result
              ? "Congratulations, you won!"
              : " Sorry, you lost."}
          </p>
        </p>
      )}
      <div id="guess">
        {totalGuesses > 0 && (
          <p>
            {showResetButton && (
              <button className="reset-button" onClick={resetGame}>
                Reset
              </button>
            )}
            Guess percentage: {correctGuesses}/{totalGuesses}-%
            {((correctGuesses / totalGuesses) * 100).toFixed(2)}
          </p>
        )}
        {totalGuesses === 0 && showResetButton && (
          <button className="reset-button" onClick={resetGame}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default CoinFlip;
