import React from "react";
import { Link } from "react-router-dom";
import coin from "../assets/2.png";
import dice from "../assets/3.png";
import rps from "../assets/4.png";
import roulette from "../assets/roulette.png";
import slot from "../assets/slot.png";
//animate
import "animate.css";
//scroller
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  ZoomOut,
} from "react-scroll-motion";
//mui
import { Button } from "@mui/material";
import "animate.css";
import { Helmet } from "react-helmet";
const sections = [
  {
    title: "CoinFlip",
    desc: "This game, where a two-sided coin is flipped, is where luckturns All you have to do is toss the coin into the air and wait for the result. Now, are you ready to try your luck?",
    href: "/coinflip",
    img: coin,
    from: "#98fe90",
    to: "#e4ca40",
    direction: "bg-gradient-to-br",
  },
  {
    title: "To Dice",
    desc: "Another game where you will test your luck again! Here, rolling a dice is involved. As the way the dice falls on the ground is entirely random, it always offers an exciting experience. Now, get ready to control your fate and roll the dice!",
    href: "/todice",
    img: dice,
    from: "#98fe90",
    to: "#e4ca40",
    direction: "bg-gradient-to-bl",
  },
  {
    title: "Rock Paper Scissors",
    desc: "You won't believe that this legendary game was played in schoolyards years ago! Each player competes against their opponent by choosing their units (Rock, Paper or Scissors) in their hands. It may seem simple, but it requires strategic thinking. Now, prove yourself with your intelligence and win  the game!",
    href: "/rps",
    img: rps,
    from: "#98fe90",
    to: "#e4ca40",
    direction: "bg-gradient-to-br",
  },
  {
    title: "Roulette",
    desc: "Red or black, odd or even, in a range of numbers, this game is entirely based on chance. Here, we offer you an exciting gambling game! You only need to place a bet on a roulette  wheel and guess the winning number. Are you ready to start spinning the roulette wheel to try your luck?",
    href: "/roulette",
    img: roulette,
    from: "#98fe90",
    to: "#e4ca40",
    direction: "bg-gradient-to-bl",
  },
  {
    title: "Slot Machine",
    desc: "   This is a gambling game that requires a bit of luck and skill. By pulling a mechanical lever, you spin the reels and then eagerly await to match the winning symbols. Now, try your own luck with this electronic slot machine and win big prizes!",
    href: "/slot",
    img: slot,
    from: "#98fe90",
    to: "#e4ca40",
    direction: "bg-gradient-to-br",
  },
];
function Classics() {
  const scrollEffect2 = batch(Fade(0, 1), ZoomOut(1, 0));
  return (
    <div>
      <Helmet>
        <title>Classics | Tombalaci Mehmet</title>
        <meta name="description" content="the classics games page " />
      </Helmet>
      <ScrollContainer>
        <ScrollPage>
          <div
            id="cs-section1"
            className="bg-gradient-to-br from-[#b1bfe1] to-[#98fe90] w-full min-h-screen"
          >
            <div
              id="cs-section1-desc"
              className="flex flex-col justify-center items-center py-10"
            >
              <Animator
                animation={scrollEffect2}
                className="animate__animated animate__bounceInDown"
              >
                <h2 className="text-white text-9xl text-center p-4 m-0">
                  Classics
                </h2>
                <p className="text-white text-2xl text-center p-4 m-0">
                  And here are the Classics of Tombalacı Mehmet. Each game is
                  prepared for you. If you are a fan of the past, these games
                  are for you.
                </p>
              </Animator>
            </div>
            <div
              id="cs-cards"
              className="flex flex-row justify-center items-center  w-full"
            >
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/coinflip"
                    className="animate__animated animate__bounceInLeft flex flex-col justify-center items-center"
                  >
                    <img
                      className="m-1 w-3/5 h-auto"
                      src={coin}
                      alt="Coin Flip"
                    />
                    <span className="hidden font-bold hover:block">
                      COIN FLIP
                    </span>
                  </Link>
                </Animator>
              </div>
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/todice"
                    className="animate__animated animate__bounceInLeft flex flex-col justify-center items-center"
                  >
                    <img className="m-1 w-3/5 h-auto" src={dice} alt="ToDice" />
                    <span className="hidden font-bold hover:block">
                      TO DICE
                    </span>
                  </Link>
                </Animator>
              </div>
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/rps"
                    className="animate__animated animate__bounceInUp flex flex-col justify-center items-center"
                  >
                    <img className="m-1 w-3/5 h-auto" src={rps} alt="RPS" />
                    <span className="hidden font-bold hover:block">RPS</span>
                  </Link>
                </Animator>
              </div>
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/roulette"
                    className="animate__animated animate__bounceInRight flex flex-col justify-center items-center"
                  >
                    <img
                      className="m-1 w-3/5 h-auto"
                      src={roulette}
                      alt="Roulette"
                    />
                    <span className="hidden font-bold hover:block">
                      ROULETTE
                    </span>
                  </Link>
                </Animator>
              </div>
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/slot"
                    className="animate__animated animate__bounceInRight flex flex-col justify-center items-center"
                  >
                    <img className="m-1 w-3/5 h-auto" src={slot} alt="Slot" />
                    <span className="hidden font-bold hover:block">SLOT</span>
                  </Link>
                </Animator>
              </div>
            </div>
          </div>
        </ScrollPage>
        {sections.map((section, index) => (
          <div
            key={index}
            id="cs-section2"
            className={`${section.direction}  from-[${section.from}] to-[${section.to}] w-full min-h-screen flex flex-row justify-between items-center`}
          >
            <div
              id="cs-section2-item-text"
              className="m-1 flex flex-col justify-center items-center text-white w-full px-8"
            >
              <h3 className="font-[Bebas Neue] text-5xl"> {section.title}</h3>
              <p className="font-[Rajdhani] text-3xl p-8 text-black bg-white  bg-opacity-60 border-5 border-solid rounded-2xl my-10">
                {section.desc}
              </p>
              <Button href={section.href} variant="contained" size="large">
                PLAY GAME
              </Button>
            </div>
            <div
              id="cs-section2-item-img"
              className="flex justify-center items-center w-5/6"
            >
              <img
                className="animate__animated animate__pulse animate__infinite"
                animate__slower
                src={section.img}
                alt={section.title}
              ></img>
            </div>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default Classics;
