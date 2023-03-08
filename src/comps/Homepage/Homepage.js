import React, { useState, useEffect } from "react";
// import tombala from "../../assets/1.png";
import coin from "../../assets/2.png";
import dice from "../../assets/3.png";
import rps from "../../assets/4.png";
import roulette from "../../assets/roulette.png";
import slot from "../../assets/slot.png";
import "./homepage.scss";
import { Link } from "react-router-dom";

function Homepage() {
  const [, setScore] = useState(50);
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);
  return (
    <main>
      <div className="main-container">
        <h1>Tombalaci Mehmet</h1>
        <h2>the only address for fun</h2>
      </div>
      <div className="cards">
        {/* <div className="card">
            <Link to="tombala">
              <img src={tombala} alt="Bingo Game" />
            </Link>
          </div> */}
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
        <div className="card">
          <Link to="rps">
            <img src={rps} alt="RPS" />
          </Link>
        </div>{" "}
        <div className="card">
          <Link to="roulette">
            <img src={roulette} alt="Roulette" />
          </Link>
        </div>
        <div className="card">
          <Link to="slot">
            <img src={slot} alt="Slot" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
