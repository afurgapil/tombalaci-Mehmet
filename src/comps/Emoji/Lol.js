import React, { useState, useEffect } from "react";
import heros from "../../data/heros";
import alertify from "alertifyjs";
import GoBack from "../../Tools/GoBack";
import { Helmet } from "react-helmet";
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
  }, []);

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
    <div className="flex flex-col justify-center md:justify-start items-center min-h-screen bg-bg pt-10">
      <Helmet>
        <title> LOL| Emojify</title>
        <meta
          name="description"
          content="guess league of legends heros emoji game"
        />
      </Helmet>
      <GoBack></GoBack>
      <h2 className="font-[Raleway] text-center my-4 text-6xl border-b border-black">
        Lol Champion Guess Game
      </h2>
      <div className="flex flex-col justify-center items-center bg-green-500 py-2 px-4 rounded-xl">
        <div className="flex flex-row my-4">
          {heroEmojis.map((emoji, index) => (
            <div
              className="bg-slate-100 border border-black p-1 m-1 "
              key={index}
              style={{ fontSize: "2rem", marginRight: "0.5rem" }}
            >
              {emoji}
            </div>
          ))}
        </div>
        <input
          className="p-2 text-xl border-2   border-green-900 shadow-black font-bold "
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="flex justify-center items-center my-4 w-full">
          <button
            className="bg-blue-500 text-center align-middle text-white m-1 py-2 w-1/2"
            onClick={handleGuess}
          >
            Guess
          </button>
          <button
            className="bg-blue-500 text-center align-middle text-white m-1 py-2 w-1/2"
            onClick={handlePlayAgain}
          >
            Refresh
          </button>
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
