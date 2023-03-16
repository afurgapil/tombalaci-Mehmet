import React, { useState, useEffect } from "react";
import countries from "./countries";
import "./country.scss";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import alertify from "alertifyjs";

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryEmojis, setCountryEmojis] = useState([]);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);

  // Oyun başladığında bir ülke seçmek için useEffect kullanıyoruz
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setSelectedCountry(countries[randomIndex].name);
    setCountryEmojis(countries[randomIndex].emojis);
  }, [countries]);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === selectedCountry.toLowerCase()) {
      setWrongGuesses(0);
      setResult("");
      alertify.success("Correct!", 3);
    } else {
      const hint = selectedCountry.substring(0, wrongGuesses + 1);
      setWrongGuesses(wrongGuesses + 1);
      setResult(` Hint: ${hint}`);
      alertify.error("Ups!", 3);
    }
  };

  const handlePlayAgain = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setSelectedCountry(countries[randomIndex].name);
    setCountryEmojis(countries[randomIndex].emojis);
    setUserGuess("");
    setResult("");
  };

  return (
    <div id="country-game-container">
      <p id="c-tittle">Country Guess Game</p>
      <div id="country-game">
        <div id="emoji-container">
          {countryEmojis.map((emoji, index) => (
            <span className="emoji" key={index}>
              {emoji}
            </span>
          ))}
        </div>
        <input
          id="country-input"
          type="text"
          value={userGuess}
          onChange={handleInputChange}
        />
        <div id="country-button-container">
          <Button
            className="c-play-button"
            onClick={handleGuess}
            variant="contained"
            color="secondary"
          >
            Guess
          </Button>
          <Button
            className="c-play-button"
            variant="contained"
            color="secondary"
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

export default Country;
