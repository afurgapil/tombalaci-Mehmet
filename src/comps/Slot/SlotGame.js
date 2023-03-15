import React, { useState } from "react";
import "./SlotGame.scss";
import Slot1 from "./Slot";
import Slot2 from "./Slot2";
import Slot3 from "./Slot3";
import Slot4 from "./Slot4";
import Slot5 from "./Slot5";
import Slot6 from "./Slot6";

const SlotGame = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleButtonClick = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div id="slot-games-container">
      {/* {selectedGame === "Game1" && <Slot1 />}
      {selectedGame === "Game2" && <Slot2 />}
      {selectedGame === "Game3" && <Slot3 />} */}
      {selectedGame === "Game4" && <Slot4 />}
      {selectedGame === "Game5" && <Slot5 />}
      {selectedGame === "Game6" && <Slot6 />}

      <div className="gamechange">
        <button id="easy" onClick={() => handleButtonClick("Game6")}>
          Çapsız Abidin <span id="easys">3 Col 5 Fruit</span>
        </button>
        <button id="medium" onClick={() => handleButtonClick("Game5")}>
          Süleyman Çakır<span id="mediums">5 Col 5 Fruit</span>
        </button>
        <button id="hard" onClick={() => handleButtonClick("Game4")}>
          Koko Muharrem<span id="hards">5 Col 10 Fruit</span>
        </button>
      </div>
    </div>
  );
};

export default SlotGame;
