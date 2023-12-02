import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../Tools/GoBack";
import "animate.css";
import { Helmet } from "react-helmet";
const content = [
  {
    title: "Valorant Agents",
    desc: "Travel the world with emojis! Guess the country names based on the emojis and become a globetrotting emoji master!",
    link: "/quizboxes/valorant",
  },
];
const Box = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-bg pt-20">
      <Helmet>
        <title>Quiz Boxes| Tombalaci Mehmet</title>
        <meta name="description" content="a guess game " />
      </Helmet>
      <div className="flex flex-row justify-center items-center w-full  animate__animated animate__backInDown">
        {content.map((item) => (
          <div
            className="flex flex-col justify-center items-center w-4/5 p-4 text-center shadow-2xl my-4 border hover:scale-110 transition-all duration-100 ease-linear border-black rounded-md animate__animated  animate__backInLeft"
            id="country"
          >
            <h2 className="text-3xl p-4 ">{item.title}</h2>
            <p className="text-xl">{item.desc}</p>
            <Link to={item.link}>
              <button className="w-72 h-24 cursor-pointer rounded-3xl  bg-docAside hover:bg-[#e6c1a1]">
                <span className="button-text">PLAY</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
