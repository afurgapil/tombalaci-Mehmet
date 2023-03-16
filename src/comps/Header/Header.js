import React, { Component } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li className="logo">
              <img src={logo} alt="" width="120px" height="80px" />
            </li>
            <div className="header-right">
              <li className="header-right-item">
                <Link to="/">Home</Link>
              </li>
              {/* <li className="header-right-item">
                <Link to="/tombala">Tombala</Link>
              </li> */}
              <li className="header-right-item">
                <Link to="/coinflip">Coin Flip</Link>
              </li>
              <li className="header-right-item">
                <Link to="/todice">To Dice</Link>
              </li>
              <li className="header-right-item">
                <Link to="/rps">RPS</Link>
              </li>
              <li className="header-right-item">
                <Link to="/roulette">Roulette</Link>
              </li>
              <li className="header-right-item">
                <Link to="/slot">Slot</Link>
              </li>{" "}
              <li className="header-right-item">
                <Link to="/emojify">Emojify</Link>
              </li>
              <li className="header-right-item">
                <Link to="/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </header>
      </div>
    );
  }
}
