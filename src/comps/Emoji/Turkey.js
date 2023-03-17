import React, { useState, useEffect } from "react";
import turkeyCities from "./turkeyCities";
import "./turkeycities.scss";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import alertify from "alertifyjs";
const Turkey = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityEmojis, setCityEmojis] = useState([]);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * turkeyCities.length);
    setSelectedCity(turkeyCities[randomIndex].name);
    setCityEmojis(turkeyCities[randomIndex].emojis);
  }, [turkeyCities]);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === selectedCity.toLowerCase()) {
      setWrongGuesses(0);
      alertify.success("Correct!", 3);
      setResult("");
      setTimeout(() => {
        handlePlayAgain();
      }, 1000);
    } else {
      const hint = selectedCity.substring(0, wrongGuesses + 1);
      setWrongGuesses(wrongGuesses + 1);
      setResult(` Hint: ${hint}`);
      alertify.error("Ups!", 3);
    }
  };

  const handlePlayAgain = () => {
    const randomIndex = Math.floor(Math.random() * turkeyCities.length);
    setSelectedCity(turkeyCities[randomIndex].name);
    setCityEmojis(turkeyCities[randomIndex].emojis);
    setUserGuess("");
    setResult("");
    setWrongGuesses(0);
  };
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleGuess();
    } else if (isNaN(parseInt(event.key, 10))) {
      // event.preventDefault();
    }
  }
  return (
    <div id="trcity-game-container">
      <p id="trc-tittle">Turkey City Guess Game</p>
      <div id="trcity-game">
        <div id="trcity-emoji-container">
          {cityEmojis.map((emoji, index) => (
            <span
              className="emoji"
              key={index}
              style={{ fontSize: "2rem", marginRight: "0.5rem" }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <input
          id="trcity-input"
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div id="trcity-button-container">
          <Button
            className="trc-play-button"
            onClick={handleGuess}
            variant="contained"
          >
            Guess
          </Button>
          <Button
            className="trc-play-button"
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={handlePlayAgain}
          ></Button>
        </div>

        {result && <p className="hint">{result}</p>}
        {/* {result && (
          <Button
            onClick={handlePlayAgain}
            variant="contained"
            color="secondary"
          >
            Play Again
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default Turkey;
