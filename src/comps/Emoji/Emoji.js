import React, { useState } from "react";
import Valorant from "./Valorant";
import Country from "./Country";
import "./emoji.scss";

const SlotGame = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleButtonClick = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div id="emoji-games-container">
      {selectedGame === "Valorant" && <Valorant />}
      {selectedGame === "Country" && <Country />}

      <div className="gamechange">
        <button id="Country" onClick={() => handleButtonClick("Country")}>
          <span>Country</span>
        </button>
        <button id="Valorant" onClick={() => handleButtonClick("Valorant")}>
          <span>Valorant Agents</span>
        </button>
      </div>
    </div>
  );
};

export default SlotGame;
