import React from "react";
import { Link } from "react-router-dom";
import emojify from "../assets/emoji.png";
import quizboxes from "../assets/quizbox.png";
import "../style/news.scss";
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
  ZoomOut,
} from "react-scroll-motion";
//mui
import { Button } from "@mui/material";
import "animate.css";

function News() {
  const scrollEffect = batch(MoveIn(1000, 0), Fade(), MoveOut(0, 500));
  const scrollEffect1 = batch(MoveIn(-1000, 0), Fade(0, 1), MoveOut(0, 500));
  const scrollEffect2 = batch(Fade(0, 1), ZoomOut(1, 0));

  return (
    <div id="homepage-main">
      <ScrollContainer>
        <ScrollPage>
          <div id="n-section1">
            <div id="n-section1-desc">
              <Animator
                animation={scrollEffect2}
                className="animate__animated animate__bounceInDown"
              >
                <h2>News</h2>
                <p>
                  If you're tired of ordinary games and looking for something
                  new, don't miss them.
                </p>
              </Animator>
            </div>
            <div id="n-cards" className="n-cards">
              <div className="n-card">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/emojify"
                    className="animate__animated animate__bounceInLeft"
                  >
                    <img src={emojify} alt="Emojify" />
                    <span>Emojify</span>
                  </Link>
                </Animator>
              </div>
              <div className="n-card">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/quizboxes  "
                    className="animate__animated animate__bounceInRight"
                  >
                    <img src={quizboxes} alt="QuizBoxes" />
                    <span>QuizBoxes</span>
                  </Link>
                </Animator>
              </div>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="n-section2">
            <Animator className="n-section-item" animation={scrollEffect}>
              <div id="n-section2-item-text" className="n-section-item-text">
                <h3 className="n-section-item-text-h3">Emojify</h3>
                <p className="n-section-item-text-p">
                  In this game, you'll see emojis on your screen and you'll have
                  to guess which category they belong to (such as country, city,
                  etc.). Then, you'll need to make your best guess based on the
                  category and see if you can get it right!
                </p>
                <Button href="/emojify" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="n-section2-item-img" className="n-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  animate__slower
                  src={emojify}
                  alt="emojify"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="n-section3">
            <Animator className="n-section-item" animation={scrollEffect1}>
              <div id="n-section3-item-text" className="n-section-item-text">
                <h3 className="n-section-item-text-h3">Quiz Boxes</h3>
                <p className="n-section-item-text-p">
                  Put your guessing skills to the test in this fun game! You'll
                  make a guess and see if the correct properties appear in green
                  boxes and incorrect ones in red boxes. Reach the right result
                  by increasing your green boxes!
                </p>
                <Button href="/quizboxes" variant="contained" size="large">
                  PLAY GAME
                </Button>
              </div>
              <div id="n-section3-item-img" className="n-section-item-img">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  animate__slower
                  src={quizboxes}
                  alt="quizboxes"
                ></img>
              </div>
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default News;
