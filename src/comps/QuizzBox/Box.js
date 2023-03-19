import React, { useState } from "react";
import Agents from "./Agents";
import "./box.scss";

const Box = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleButtonClick = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div id="emoji-games-container">
      {selectedGame === "Valorant" && <Agents />}

      <div className="gamechange">
        <button id="Valorant" onClick={() => handleButtonClick("Valorant")}>
          <span>Valorant Agents</span>
        </button>
      </div>
    </div>
  );
};

export default Box;
