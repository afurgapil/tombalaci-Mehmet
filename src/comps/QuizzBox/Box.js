import React from "react";
import "./box.scss";
import { Link } from "react-router-dom";
import GoBack from "../Tools/GoBack";
const Box = () => {
  return (
    <div id="quizboxes-container">
      <GoBack></GoBack>
      <div className="row">
        <div className="quizboxes-c" id="valorant">
          <h2>Valorant Agents</h2>
          <p>
            Travel the world with emojis! Guess the country names based on the
            emojis and become a globetrotting emoji master!
          </p>
          <Link to="/quizboxes/valorant">
            <button id="valorant-button">
              <span className="button-text">PLAY</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;
