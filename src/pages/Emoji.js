import React from "react";
import "../style/emoji.scss";
import { Link } from "react-router-dom";
import "animate.css";
const SlotGame = () => {
  return (
    <div id="emojify-container">
      <div className="row animate__animated animate__backInDown">
        <div
          className="emojify-c  animate__animated  animate__backInLeft"
          id="country"
        >
          <h2>Countries</h2>
          <p>
            Travel the world with emojis! Guess the country names based on the
            emojis and become a globetrotting emoji master!
          </p>
          <Link to="/emojify/countries">
            <button id="country-button">
              <span className="button-text">PLAY</span>
            </button>
          </Link>
        </div>
        <div
          className="emojify-c animate__animated animate__backInRight"
          id="turkey"
        >
          <h2>Turkish Cities</h2>
          <p>
            Ready to test your Turkish geography skills? Guess the names of
            popular Turkish cities using emojis and become a "City Slicker"!
          </p>
          <Link to="/emojify/turkish-cities">
            <button id="turkey-button">
              <span className="button-text">PLAY</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="row animate__animated animate__backInUp">
        <div
          className="emojify-c animate__animated animate__backInLeft"
          id="lol"
        >
          <h2>League of Legends</h2>
          <p>
            Join the battle of emojis in the world of League of Legends! Can you
            decipher the emojis to guess the champion names and become a
            "Champion Emoji-tionist"?
          </p>
          <Link to="/emojify/lol">
            <button id="lol-button">
              <span className="button-text">PLAY</span>
            </button>
          </Link>
        </div>
        <div
          className="emojify-c animate__animated animate__backInRight"
          id="valo"
        >
          <h2>Valorant</h2>
          <p>
            Welcome to the world of Valoran! Use your emoji skills to identify
            the characters and places from this mystical land and become a
            "Valoran Emoji Explorer"!
          </p>
          <Link to="/emojify/valorant">
            <button id="valorant-button">
              <span className="button-text">PLAY</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlotGame;
