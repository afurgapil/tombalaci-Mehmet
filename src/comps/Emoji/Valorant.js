import React, { useState, useEffect } from "react";
import agents from "../../data/agents";
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
    <div
      className="flex flex-col justify-start items-center min-h-screen mt-10"
      id="valorant-game-container"
    >
      <Helmet>
        <title> Valorant | Emojify</title>
        <meta name="description" content="guess valorant agents emoji game" />
      </Helmet>
      <GoBack></GoBack>
      <p
        className="text-6xl mb-2 border-b border-black font-[Raleway]"
        id="v-tittle"
      >
        Valorant Agent Guess Game
      </p>
      <div
        className="flex flex-col justify-center items-center bg-red-800 p-8 
        rounded-xl"
        id="valorant-game"
      >
        <div className="flex flex-row mb-8" id="valorant-emoji-container">
          {agentEmojis.map((emoji, index) => (
            <div
              className="bg-slate-100 border border-black  text-3xl mx-1 p-4"
              key={index}
              style={{ fontSize: "2rem" }}
            >
              {emoji}
            </div>
          ))}
        </div>
        <input
          className="p-2 text-xl border-2   border-red-900 shadow-black font-bold "
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="flex justify-center items-center w-full mt-4">
          <button
            onClick={handleGuess}
            className="bg-blue-500 text-center align-middle text-white m-1 py-2 w-1/2"
          >
            Guess
          </button>
          <button
            onClick={handlePlayAgain}
            className="bg-blue-500 text-center align-middle text-white m-1 py-2 w-1/2"
          >
            Refresh
          </button>
        </div>

        {result && (
          <p className="my-8 bg-stone-300 p-1 border-2 border-black">
            {result}
          </p>
        )}
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
