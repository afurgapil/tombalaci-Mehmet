import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import coin from "../assets/2.png";
import dice from "../assets/3.png";
import rps from "../assets/4.png";
import roulette from "../assets/roulette.png";
import slot from "../assets/slot.png";
import emojify from "../assets/emoji.png";
import quizboxes from "../assets/quizbox.png";
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
import { Helmet } from "react-helmet";
function Home() {
  const [, setScore] = useState(50);
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);
  const loginEffect = batch(Fade(), MoveOut(0, 400));
  const scrollEffect = batch(MoveIn(1000, 0), Fade(), MoveOut(0, 500));
  const scrollEffect1 = batch(MoveIn(-1000, 0), Fade(0, 1), MoveOut(0, 500));
  const scrollEffect2 = batch(MoveIn(0, -500), Fade());

  return (
    <div>
      <Helmet>
        <title>Home | Tombalaci Mehmet </title>
        <meta name="description" content="homepage" />
      </Helmet>
      <ScrollContainer>
        <ScrollPage>
          <div
            id="section1"
            className="bg-gradient-to-br from-[#ffebcd] to-[#00253b] w-full h-screen flex flex-col justify-start md:justify-center items-center pt-40 md:pt-0"
          >
            <Animator animation={loginEffect}>
              <h1 className="mt-0 text-6xl  lg:text-8xl font-[Comfortaa] text-center mb-0 mx-10">
                Tombalaci Mehmet
              </h1>
              <h2 className="text-4xl md:text-6xl font-[Ephesis] text-center mt-0">
                the only address for fun
              </h2>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-screen bg-gradient-to-bl from-[#72ed9b] to-[#edb25a] ">
            <div className="flex items-center justify-center h-auto m-10 md:ms-8">
              <Animator animation={scrollEffect1}>
                <h2 className="text-8xl m-0 text-white border-b border-black">
                  Classics
                </h2>
                <p className="text-3xl">
                  And here are the Classics of Tombalacı Mehmet. Each game is
                  prepared for you. If you are a fan of the past, these games
                  are for you.
                </p>
              </Animator>
            </div>
            <div className="flex flex-wrap justify-between items-center flex-row mx-10 md:me-20">
              <div
                className="m-2 w-1/4
              "
              >
                <Animator animation={scrollEffect}>
                  <Link to="coinflip">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0  transition-all duration-200 ease-linear"
                      src={coin}
                      alt="Coin Flip"
                    />
                  </Link>
                </Animator>
              </div>
              <div
                className="m-2 w-1/4
              "
              >
                <Animator animation={scrollEffect}>
                  <Link to="todice">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0 transition-all duration-200 ease-linear"
                      src={dice}
                      alt="ToDice"
                    />
                  </Link>
                </Animator>
              </div>
              <div
                className="m-2 w-1/4
              "
              >
                <Animator animation={scrollEffect}>
                  <Link to="rps">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0 transition-all duration-200 ease-linear"
                      src={rps}
                      alt="RPS"
                    />
                  </Link>
                </Animator>
              </div>
              <div
                className="m-2 w-1/4
              "
              >
                <Animator animation={scrollEffect}>
                  <Link to="roulette">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0 transition-all duration-200 ease-linear"
                      src={roulette}
                      alt="Roulette"
                    />
                  </Link>
                </Animator>
              </div>
              <div className="m-2 w-1/3">
                <Animator animation={scrollEffect}>
                  <Link to="slot">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0 transition-all duration-200 ease-linear"
                      src={slot}
                      alt="Slot"
                    />
                  </Link>
                </Animator>
              </div>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center w-full h-screen bg-gradient-to-br from-[#9842ed] to-[#1793a3]">
            <div className="flex flex-wrap justify-between flex-row md:ms-20">
              <div className="m-2 w-1/3  ">
                <Animator animation={scrollEffect2}>
                  <Link to="emojify">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0  transition-all duration-200 ease-linear"
                      src={emojify}
                      alt="Emojify"
                    />
                  </Link>
                </Animator>
              </div>
              <div className="m-2 w-1/3  ">
                <Animator animation={scrollEffect2}>
                  <Link to="quizboxes">
                    <img
                      className="w-full h-auto grayscale-[0.5] hover:scale-125 hover:grayscale-0  transition-all duration-200 ease-linear"
                      src={quizboxes}
                      alt="Emojify"
                    />
                  </Link>
                </Animator>
              </div>
            </div>
            <div className="flex justify-center items-center h-auto m-10 md:me-8">
              <Animator animation={scrollEffect2}>
                <h2 className="text-8xl m-0 text-white border-b border-black">
                  Try it
                </h2>
                <p className="text-3xl">
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
