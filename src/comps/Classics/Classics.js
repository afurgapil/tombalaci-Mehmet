import React from "react";
import { Link } from "react-router-dom";
import coin from "../../assets/2.png";
import dice from "../../assets/3.png";
import rps from "../../assets/4.png";
import roulette from "../../assets/roulette.png";
import slot from "../../assets/slot.png";
import "./classics.scss";
//animate
import "animate.css";
//scroller
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";
//mui
import { Button } from "@mui/material";

function Classics() {
  const scrollEffect = batch(MoveIn(1000, 0), Fade(), MoveOut(0, 500));
  const scrollEffect1 = batch(MoveIn(-1000, 0), Fade(0, 1), MoveOut(0, 500));
  const scrollEffect2 = batch(MoveIn(1000, 0), Fade(), MoveOut(0, 500));
  return (
    <div id="homepage-main">
      <ScrollContainer>
        <ScrollPage>
          <div id="cs-section1">
            <div id="cs-section1-desc">
              <Animator>
                <h2>Classics</h2>
                <p>
                  And here are the Classics of Tombalacı Mehmet. Each game is
                  prepared for you. If you are a fan of the past, these games
                  are for you.
                </p>
              </Animator>
            </div>
            <div id="cs-cards" className="cs-cards">
              <div className="cs-card">
                <Animator animation={scrollEffect2}>
                  <Link to="coinflip">
                    <img src={coin} alt="Coin Flip" />
                    <span>COIN FLIP</span>
                  </Link>
                </Animator>
              </div>
              <div className="cs-card">
                <Animator animation={scrollEffect2}>
                  <Link to="todice">
                    <img src={dice} alt="ToDice" />
                    <span>TO DICE</span>
                  </Link>
                </Animator>
              </div>
              <div className="cs-card">
                <Animator animation={scrollEffect2}>
                  <Link to="rps">
                    <img src={rps} alt="RPS" />
                    <span>RPS</span>
                  </Link>
                </Animator>
              </div>
              <div className="cs-card">
                <Animator animation={scrollEffect2}>
                  <Link to="roulette">
                    <img src={roulette} alt="Roulette" />
                    <span>ROULETTE</span>
                  </Link>
                </Animator>
              </div>
              <div className="cs-card">
                <Animator animation={scrollEffect2}>
                  <Link to="slot">
                    <img src={slot} alt="Slot" />
                    <span>SLOT</span>
                  </Link>
                </Animator>
              </div>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="cs-section2">
            <Animator className="cs-section-item" animation={scrollEffect}>
              <div id="cs-section2-item-text" className="cs-section-item-text">
                <h3 className="cs-section-item-text-h3">Coin Flip</h3>
                <p className="cs-section-item-text-p">
                  This game, where a two-sided coin is flipped, is where luck
                  turns! All you have to do is toss the coin into the air and
                  wait for the result. Now, are you ready to try your luck?
                </p>
                <Button href="/coinflip" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="cs-section2-item-img" className="cs-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  animate__slower
                  src={coin}
                  alt="Coin Flip"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="cs-section3">
            <Animator className="cs-section-item" animation={scrollEffect1}>
              <div id="cs-section3-item-text" className="cs-section-item-text">
                <h3 className="cs-section-item-text-h3">To Dice</h3>
                <p className="cs-section-item-text-p">
                  Another game where you will test your luck again! Here,
                  rolling a dice is involved. As the way the dice falls on the
                  ground is entirely random, it always offers an exciting
                  experience. Now, get ready to control your fate and roll the
                  dice!
                </p>
                <Button href="/todice" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="cs-section3-item-img" className="cs-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  animate__slower
                  src={dice}
                  alt="To Dice"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="cs-section4">
            <Animator className="cs-section-item" animation={scrollEffect}>
              <div id="cs-section4-item-text" className="cs-section-item-text">
                <h3 className="cs-section-item-text-h3">Rock Paper Scissors</h3>
                <p className="cs-section-item-text-p">
                  You won't believe that this legendary game was played in
                  schoolyards years ago! Each player competes against their
                  opponent by choosing their units (Rock, Paper or Scissors) in
                  their hands. It may seem simple, but it requires strategic
                  thinking. Now, prove yourself with your intelligence and win
                  the game!
                </p>
                <Button href="/rps" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="cs-section4-item-img" className="cs-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  animate__slower
                  src={rps}
                  alt="Rock Paper Scissors"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="cs-section5">
            <Animator className="cs-section-item" animation={scrollEffect1}>
              <div id="cs-section5-item-text" className="cs-section-item-text">
                <h3 className="cs-section-item-text-h3">Roulette</h3>
                <p className="cs-section-item-text-p">
                  Red or black, odd or even, in a range of numbers, this game is
                  entirely based on chance. Here, we offer you an exciting
                  gambling game! You only need to place a bet on a roulette
                  wheel and guess the winning number. Are you ready to start
                  spinning the roulette wheel to try your luck?
                </p>
                <Button href="/roulette" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="cs-section5-item-img" className="cs-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  animate__slower
                  src={roulette}
                  alt="Roulette"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="cs-section6">
            <Animator className="cs-section-item" animation={scrollEffect}>
              <div id="cs-section6-item-text" className="cs-section-item-text">
                <h3 className="cs-section-item-text-h3">Slot Machine</h3>
                <p className="cs-section-item-text-p">
                  This is a gambling game that requires a bit of luck and skill.
                  By pulling a mechanical lever, you spin the reels and then
                  eagerly await to match the winning symbols. Now, try your own
                  luck with this electronic slot machine and win big prizes!
                </p>
                <Button href="/slot" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="cs-section6-item-img" className="cs-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite animate__slower"
                  src={slot}
                  alt="Slot Machine"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Classics;
