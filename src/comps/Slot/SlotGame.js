import React, { useState } from "react";
import "./SlotGame.scss";
import abidin from "../../assets/abidin.jpg";
import cakir from "../../assets/cakir.jpg";
import muhterem from "../../assets/muhterem.jpg";

import { NavLink } from "react-router-dom";

const SlotGame = () => {
  return (
    <div id="slot-games-container">
      <div className="gamechange">
        <div id="slot-container-col">
          <div id="slot-col1" className="card">
            <img src={abidin} alt="Abidin" />
            <p id="slot-col1-desc">
              Just a commanding officer. He does whatever his brother says, he
              doesn't think too much. Ideal for those who don't want to take
              risks.
            </p>
          </div>
          <NavLink className="slot-links" id="easy" to="/slot/abidin">
            Çapsız Abidin
          </NavLink>
        </div>
        <div id="slot-container-col">
          <div id="slot-col2" className="card">
            <img src={cakir} alt="Suleyman Cakir" />
            <p id="slot-col2-desc">
              A full duty man. It is rising rapidly in the world. It can lead
              you to big profits or it can completely sink you.
            </p>
          </div>
          <NavLink className="slot-links" id="medium" to="/slot/cakir">
            Süleyman Çakır
          </NavLink>
        </div>
        <div id="slot-container-col">
          <div id="slot-col3" className="card">
            <img src={muhterem} alt="Muhterem" />
            <p id="slot-col3-desc">
              He is the private chef of Tombalacı Mehmet. There is not much
              information about him, but there is only one known fact, if you
              want to be rich, you have to be with him.
            </p>
          </div>
          <NavLink className="slot-links" id="hard" to="/slot/muhterem">
            Koko Muhterem
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SlotGame;
