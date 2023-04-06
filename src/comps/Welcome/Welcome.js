import React from "react";
import { Link } from "react-router-dom";
import "./welcome.scss";
import wheel from "../../assets/wheel.jpg";
//mui
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

function Welcome() {
  return (
    <div id="welcome-container">
      <img className="welcome-wheel" src={wheel} alt="Roulette-Wheel"></img>
      <div className="textContainer">
        <div className="text-container_items">
          <h2 className="title">Tombalaci Mehmet</h2>
          <p className="text">the only adress for fun</p>
          <div className="buttonsContainer">
            <Link to="/signin">
              <Button
                className="button"
                variant="contained"
                color="primary"
                startIcon={<LoginIcon />}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                className="button"
                variant="contained"
                color="secondary"
                startIcon={<HowToRegIcon />}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
