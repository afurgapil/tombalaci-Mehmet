import React, { Component } from "react";
import tombala from "../../assets/1.png";
import coin from "../../assets/2.png";
import dice from "../../assets/3.png";
import "./homepage.scss";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <main>
        <div className="main-container">
          <h1>Tombalaci Mehmet</h1>
          <h2>the only address for fun</h2>
        </div>
        <div className="cards">
          <div className="card">
            <Link to="tombala">
              <img src={tombala} alt="Bingo Game" />
            </Link>
          </div>
          <div className="card">
            <Link to="coinflip">
              <img src={coin} alt="Coin Flip" />
            </Link>
          </div>
          <div className="card">
            <Link to="todice">
              <img src={dice} alt="ToDice" />
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
