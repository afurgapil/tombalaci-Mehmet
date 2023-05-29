import React, { useState, useEffect } from "react";
import heros from "../../data/heros";
import "../../style/lol.scss";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import alertify from "alertifyjs";
import GoBack from "../../Tools/GoBack";
const Lol = () => {
  const [selectedHero, setSelectedHero] = useState("");
  const [heroEmojis, setHeroEmojis] = useState([]);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heros.length);
    setSelectedHero(heros[randomIndex].name);
    setHeroEmojis(heros[randomIndex].emojis);
  }, [heros]);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === selectedHero.toLowerCase()) {
      setWrongGuesses(0);
      alertify.success("Correct!", 3);
      setResult("");
      setTimeout(() => {
        handlePlayAgain();
      }, 1000);
    } else {
      const hint = selectedHero.substring(0, wrongGuesses + 1);
      setWrongGuesses(wrongGuesses + 1);
      setResult(` Hint: ${hint}`);
      alertify.error("Ups!", 3);
    }
  };

  const handlePlayAgain = () => {
    const randomIndex = Math.floor(Math.random() * heros.length);
    setSelectedHero(heros[randomIndex].name);
    setHeroEmojis(heros[randomIndex].emojis);
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
    <div id="lol-game-container">
      <GoBack></GoBack>
      <p id="l-tittle">Lol Champion Guess Game</p>
      <div id="lol-game">
        <div id="lol-emoji-container">
          {heroEmojis.map((emoji, index) => (
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
          id="lol-input"
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div id="lol-button-container">
          <Button
            className="l-play-button"
            onClick={handleGuess}
            variant="contained"
          >
            Guess
          </Button>
          <Button
            className="l-play-button"
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

export default Lol;
