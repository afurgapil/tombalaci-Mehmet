import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import tombala from "../../assets/1.png";
import coin from "../../assets/2.png";
import dice from "../../assets/3.png";
import rps from "../../assets/4.png";
import roulette from "../../assets/roulette.png";
import slot from "../../assets/slot.png";
import emojify from "../../assets/emoji.png";
import quizboxes from "../../assets/quizbox.png";
import "./home.scss";
//scroller
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
function Home() {
  const [, setScore] = useState(50);
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);
  const loginEffect = batch(Fade(), Sticky(), MoveOut(0, -200));
  const scrollEffect = batch(MoveIn(1000, 0), Fade(), MoveOut(0, 500));
  const scrollEffect1 = batch(MoveIn(-1000, 0), Fade(0, 1), MoveOut(0, 500));
  const scrollEffect2 = batch(MoveIn(0, -500), Fade());

  return (
    <div id="homepage-main">
      <ScrollContainer>
        <ScrollPage>
          <div id="section1" className="main-container">
            <Animator animation={loginEffect}>
              <h1>Tombalaci Mehmet</h1>
              <h2>the only address for fun</h2>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="section2">
            <div id="section2-desc">
              <Animator animation={scrollEffect1}>
                <h2>Classics</h2>
                <p>
                  And here are the Classics of Tombalacı Mehmet. Each game is
                  prepared for you. If you are a fan of the past, these games
                  are for you.
                </p>
              </Animator>
            </div>
            <div id="cards" className="cards">
              <div className="card">
                <Animator animation={scrollEffect}>
                  <Link to="coinflip">
                    <img src={coin} alt="Coin Flip" />
                  </Link>
                </Animator>
              </div>
              <div className="card">
                <Animator animation={scrollEffect}>
                  <Link to="todice">
                    <img src={dice} alt="ToDice" />
                  </Link>
                </Animator>
              </div>
              <div className="card">
                <Animator animation={scrollEffect}>
                  <Link to="rps">
                    <img src={rps} alt="RPS" />
                  </Link>
                </Animator>
              </div>
              <div className="card">
                <Animator animation={scrollEffect}>
                  <Link to="roulette">
                    <img src={roulette} alt="Roulette" />
                  </Link>
                </Animator>
              </div>
              <div className="card">
                <Animator animation={scrollEffect}>
                  <Link to="slot">
                    <img src={slot} alt="Slot" />
                  </Link>
                </Animator>
              </div>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="section3">
            <div id="cards" className="cards">
              <div className="card">
                <Animator animation={scrollEffect2}>
                  <Link to="emojify">
                    <img src={emojify} alt="Emojify" />
                  </Link>
                </Animator>
              </div>
              <div className="card">
                <Animator animation={scrollEffect2}>
                  <Link to="quizboxes">
                    <img src={quizboxes} alt="Emojify" />
                  </Link>
                </Animator>
              </div>
            </div>
            <div id="section3-desc">
              <Animator animation={scrollEffect2}>
                <h2>Try it</h2>
                <p>
                  If you're tired of ordinary games and looking for something
                  new, don't miss them.
                </p>
              </Animator>
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
export default Home;
