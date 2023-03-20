import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <div className="menu-icon">
          <MenuIcon onClick={toggleMenu} color="primary"></MenuIcon>
        </div>
      </div>
      <div className="menu-container">
        <ul className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <li className="navigation-item">
            <NavLink to="/" exact className="navigation-item-link">
              Home
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/coinflip" className="navigation-item-link">
              CoinFlip
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/todice" className="navigation-item-link">
              ToDice
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/rps" className="navigation-item-link">
              RPS
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/roulette" className="navigation-item-link">
              Roulette
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/slot" className="navigation-item-link">
              Slot
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/emojify" className="navigation-item-link">
              Emojify
            </NavLink>
          </li>{" "}
          <li className="navigation-item">
            <NavLink to="/quizboxes" className="navigation-item-link">
              QuizBox
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/contact" className="navigation-item-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
