import React from "react";
import "../style/box.scss";
import { Link } from "react-router-dom";
import GoBack from "../Tools/GoBack";
import "animate.css";
import { Helmet } from "react-helmet";
const Box = () => {
  return (
    <div id="quizboxes-container">
      <Helmet>
        <title>Quiz Boxes| Tombalaci Mehmet</title>
        <meta name="description" content="a guess game " />
      </Helmet>
      <GoBack></GoBack>
      <div className="row animate__animated animate__backInDown">
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
