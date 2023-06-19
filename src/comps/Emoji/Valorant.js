import React, { useState, useEffect } from "react";
import agents from "../../data/agents";
import "../../style/valorant.scss";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import GoBack from "../../Tools/GoBack";
import alertify from "alertifyjs";
import { Helmet } from "react-helmet";
const Valorant = () => {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [agentEmojis, setAgentEmojis] = useState([]);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * agents.length);
    setSelectedAgent(agents[randomIndex].name);
    setAgentEmojis(agents[randomIndex].emojis);
  }, [agents]);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === selectedAgent.toLowerCase()) {
      setWrongGuesses(0);
      alertify.success("Correct!", 3);
      setResult("");
      setTimeout(() => {
        handlePlayAgain();
      }, 1000);
    } else {
      const hint = selectedAgent.substring(0, wrongGuesses + 1);
      setWrongGuesses(wrongGuesses + 1);
      setResult(` Hint: ${hint}`);
      alertify.error("Ups!", 3);
    }
  };

  const handlePlayAgain = () => {
    const randomIndex = Math.floor(Math.random() * agents.length);
    setSelectedAgent(agents[randomIndex].name);
    setAgentEmojis(agents[randomIndex].emojis);
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
    <div id="valorant-game-container">
      <Helmet>
        <title> Valorant | Emojify</title>
        <meta name="description" content="guess valorant agents emoji game" />
      </Helmet>
      <GoBack></GoBack>
      <p id="v-tittle">Valorant Agent Guess Game</p>
      <div id="valorant-game">
        <div id="valorant-emoji-container">
          {agentEmojis.map((emoji, index) => (
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
          id="valorant-input"
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div id="valorant-button-container">
          <Button
            className="v-play-button"
            onClick={handleGuess}
            variant="contained"
          >
            Guess
          </Button>
          <Button
            className="v-play-button"
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

export default Valorant;
