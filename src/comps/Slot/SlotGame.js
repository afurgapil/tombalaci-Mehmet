import React, { useState } from "react";
import "./SlotGame.scss";
import Slot1 from "./Slot";
import Slot2 from "./Slot2";
import Slot3 from "./Slot3";

const SlotGame = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleButtonClick = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div id="slot-games-container">
      {selectedGame === "Game1" && <Slot1 />}
      {selectedGame === "Game2" && <Slot2 />}
      {selectedGame === "Game3" && <Slot3 />}

      <div className="gamechange">
        <button onClick={() => handleButtonClick("Game1")}>Game 1</button>
        <button onClick={() => handleButtonClick("Game2")}>Game 2</button>
        <button onClick={() => handleButtonClick("Game3")}>Game 3</button>
      </div>
    </div>
  );
};

export default SlotGame;
