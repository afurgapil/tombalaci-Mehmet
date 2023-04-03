import React, { useState, useEffect } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import ProfilePicture from "../../hooks/ProfilePicture";
import SignOutButton from "../../hooks/SignOutButton";
//firebase
import { auth } from "../../Firebase";
//mui
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
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
        <div>
          {user ? (
            <div id="onLogin">
              <Link to="/profile">
                <ProfilePicture />
              </Link>
              <SignOutButton />
            </div>
          ) : null}
          {!user ? (
            <div id="onNotLogin">
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
