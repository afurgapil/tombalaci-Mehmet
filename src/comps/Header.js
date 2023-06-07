import React, { useState, useEffect } from "react";
import "../style/header.scss";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import DisplayNameUtils from "../comps/DisplayNameUtils";
import SignOutButton from "../comps/SignOutButton";
//firebase
import { auth } from "../Firebase";
//mui
import MenuIcon from "@mui/icons-material/Menu";
import Score from "../comps/Score";
import { useFetchUserData } from "../hooks/useFetchUserData";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const fetchUserData = useFetchUserData();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function OnLoginHeader() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <div className="menu-icon">
            <MenuIcon onClick={toggleMenu} color="white"></MenuIcon>
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
            </li>{" "}
            <li className="navigation-item">
              <NavLink to="/leaderboard" className="navigation-item-link">
                LeaderBoard
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink to="/contact" className="navigation-item-link">
                Contact
              </NavLink>
            </li>
            <li className="navigation-item">
              <Score></Score>
            </li>
            <div id="onLogin">
              <Link to="/profile">
                <DisplayNameUtils />
              </Link>
              <SignOutButton />
            </div>
          </ul>
        </div>
      </div>
    );
  }
  function OnNotLoginHeader() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <div className="menu-icon">
            <MenuIcon onClick={toggleMenu} color="white"></MenuIcon>
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
              <NavLink to="/contact" className="navigation-item-link">
                Contact
              </NavLink>
            </li>
            <div id="onNotLogin">
              <li className="navigation-item">
                <Link to="/signin" className="navigation-item-link">
                  SignIn
                </Link>
              </li>
              <li className="navigation-item">
                <Link to="/signup" className="navigation-item-link">
                  SignUp
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      {user ? <OnLoginHeader></OnLoginHeader> : null}
      {!user ? <OnNotLoginHeader></OnNotLoginHeader> : null}
    </div>
  );
}

export default Header;
