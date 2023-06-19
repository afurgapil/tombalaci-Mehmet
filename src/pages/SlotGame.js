import React from "react";
import "../style/SlotGame.scss";
import abidin from "../assets/abidin.jpg";
import abidin1 from "../assets/abidin1.jpg";
import cakir from "../assets/cakir.jpg";
import cakir1 from "../assets/cakir1.jpg";
import muhterem from "../assets/muhterem.jpg";
import muhterem1 from "../assets/muhterem1.png";
import { NavLink } from "react-router-dom";
//scroller
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeOut,
  FadeIn,
} from "react-scroll-motion";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
const SlotGame = () => {
  const loginEffect = batch(FadeOut(1, -0.5), FadeIn(0, 1));

  return (
    <>
      <Helmet>
        <title>Slot | Tombalaci Mehmet</title>
        <meta name="description" content="slot game" />
      </Helmet>
      <ScrollContainer className="slot-container">
        <ScrollPage>
          <Animator className="slot-section" animation={loginEffect}>
            <div id="easy-container" className="s-container">
              <div id="easy-img" className="s-img-container">
                <img src={abidin} alt="Abidin" className="top" />
                <img src={abidin1} alt="Abidin" className="bot" />
              </div>
              <div id="easy-desc" className="s-desc">
                <h2 className="s-desc-title">Çapsız Abidin</h2>
                <p className="s-desc-p">
                  Just a commanding officer. He does whatever his brother says,
                  he doesn't think too much. Ideal for those who don't want to
                  take risks.
                </p>
                <NavLink to="abidin">
                  <Button id="easy-button" variant="contained">
                    Play
                  </Button>
                </NavLink>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator className="slot-section" animation={loginEffect}>
            <div id="normal-container" className="s-container">
              <div id="normal-img" className="s-img-container">
                <img src={cakir} alt="cakir" className="top" />
                <img src={cakir1} alt="cakir" className="bot" />
              </div>
              <div id="normal-desc" className="s-desc">
                <h2 className="s-desc-title">Süleyman Çakır</h2>
                <p className="s-desc-p">
                  A full duty man. It is rising rapidly in the world. It can
                  lead you to big profits or it can completely sink you.
                </p>
                <NavLink to="cakir">
                  <Button id="medium-button" variant="contained">
                    Play
                  </Button>
                </NavLink>
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator className="slot-section" animation={loginEffect}>
            <div id="hard-container" className="s-container">
              <div id="hard-img" className="s-img-container">
                <img src={muhterem} alt="muhterem" className="top" />
                <img src={muhterem1} alt="muhterem" className="bot" />
              </div>
              <div id="hard-desc" className="s-desc">
                <h2 className="s-desc-title">Muhterem</h2>
                <p className="s-desc-p">
                  He is the private chef of Tombalacı Mehmet. There is not much
                  information about him, but there is only one known fact, if
                  you want to be rich, you have to be with him.
                </p>
                <NavLink to="muhterem">
                  <Button id="hard-button" variant="contained">
                    Play
                  </Button>
                </NavLink>
              </div>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default SlotGame;
