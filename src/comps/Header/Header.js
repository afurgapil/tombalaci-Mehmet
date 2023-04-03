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
            <NavLink to="/classics" className="navigation-item-link">
              Classics
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/news" className="navigation-item-link">
              News
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/contact" className="navigation-item-link">
              Contact
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/signin" className="navigation-item-link">
              SignIn
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/signup" className="navigation-item-link">
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
