import React from "react";
import { Link } from "react-router-dom";
import emojify from "../assets/emoji.png";
import quizboxes from "../assets/quizbox.png";
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
    title: "Emojify",
    desc: "In this game, you'll see emojis on your screen and you'll have to guess which category they belong to (such as country, city, etc.). Then, you'll need to make your best guess based on the category and see if you can get it right!",
    href: "/emojify",
    img: emojify,
    from: "from-[#98fe90]",
    to: "to-[#343536]",
    direction: "bg-gradient-to-bl",
  },
  {
    title: "Quiz Boxes ",
    desc: "Put your guessing skills to the test in this fun game! You'll make a guess and see if the correct properties appear in green boxes and incorrect ones in red boxes. Reach the right result by increasing your green boxes!",
    href: "/quizboxes",
    img: quizboxes,
    from: "from-[#343536]",
    to: "to-[#e4ca40]",
    direction: "bg-gradient-to-br",
  },
];
function News() {
  const scrollEffect2 = batch(Fade(0, 1), ZoomOut(1, 0));

  return (
    <div>
      <Helmet>
        <title>News | Tombalaci Mehmet</title>
        <meta name="description" content="the news games page " />
      </Helmet>
      <ScrollContainer>
        <ScrollPage>
          <div className="bg-gradient-to-br from-[#b1bfe1] to-[#98fe90] min-h-screen w-full">
            <div className="flex flex-col justify-center items-center">
              <Animator
                animation={scrollEffect2}
                className="animate__animated animate__bounceInDown"
              >
                <h2 className="text-white text-9xl text-center p-4 m-0">
                  News
                </h2>
                <p className="text-white text-2xl text-center p-4 m-0">
                  If you're tired of ordinary games and looking for something
                  new, don't miss them.
                </p>
              </Animator>
            </div>
            <div
              id="n-cards"
              className="flex flex-col md:flex-row justify-center items-center  w-full"
            >
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/emojify"
                    className="animate__animated animate__bounceInLeft flex flex-col justify-center items-center"
                  >
                    <img
                      src={emojify}
                      alt="Emojify"
                      className="m-1 w-3/5 h-auto"
                    />
                    <span className="hidden font-bold hover:block">
                      Emojify
                    </span>
                  </Link>
                </Animator>
              </div>
              <div className="hover:scale-125 transition-all duration-200 ease-out">
                <Animator animation={scrollEffect2}>
                  <Link
                    to="/quizboxes  "
                    className="animate__animated animate__bounceInRight flex flex-col justify-center items-center"
                  >
                    <img
                      src={quizboxes}
                      alt="QuizBoxes"
                      className="m-1 w-3/5 h-auto"
                    />
                    <span className="hidden font-bold hover:block">
                      QuizBoxes
                    </span>
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
            className={`${section.direction}  ${section.from} ${section.to} w-full min-h-screen flex flex-col md:flex-row justify-between items-center py-8`}
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
              className="flex justify-center items-center w-5/6 py-4"
            >
              <img
                className="animate__animated animate__pulse animate__infinite w-9/12"
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

export default News;
