import React from "react";
import { Link } from "react-router-dom";
import wheel from "../assets/wheel.jpg";
//mui
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
function Welcome() {
  return (
    <div className="bg-gradient-to-b from-[#ffebcd] to-[#00253b] flex flex-row justify-center items-center w-full min-h-screen ">
      <Helmet>
        <title> Tombalaci Mehmet</title>
        <meta
          name="description"
          content="welcome page for the Tombalaci Mehmet"
        />
      </Helmet>
      <img
        className="min-h-screen w-1/2 rounded-r-3xl "
        src={wheel}
        alt="Roulette-Wheel"
      ></img>
      <div className="flex flex-col justify-center items-center w-1/2 h-full text-[#333]">
        <div className="flex flex-col justify-center items-center text-center text-[#f5f5f5]">
          <h2 className="font-[Comfortaa] text-7xl text-center mb-0">
            Tombalaci Mehmet
          </h2>
          <p className="font-[Dancing Script] text-5xl text-center">
            the only adress for fun
          </p>
          <div className="flex flex-row justify-center items-center my-8">
            <Link
              to="/signin"
              className="m-1 font-bold px-3 py-6 rounded cursor-pointer transition-all duration-200 ease-in-out"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<LoginIcon />}
              >
                Sign In
              </Button>
            </Link>
            <Link
              to="/signup"
              className="m-1 font-bold px-3 py-6 rounded cursor-pointer transition-all duration-200 ease-in-out"
            >
              <Button
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
