import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { Helmet } from "react-helmet";
const content = [
  {
    title: "Countries",
    desc: "Travel the world with emojis! Guess the country names based on the emojis and become a globetrotting emoji master!",
    link: "/emojify/countries",
  },
  {
    title: "Turkish Cities",
    desc: "Ready to test your Turkish geography skills? Guess the names of popular Turkish cities using emojis and become a City Slicker!",
    link: "/emojify/turkish-cities",
  },
  {
    title: "League of Legends",
    desc: "Join the battle of emojis in the world of League of Legends! Can you decipher the emojis to guess the champion names and become a Champion Emoji-tionist ?",
    link: "/emojify/lol",
  },
  {
    title: "Valorant",
    desc: "Welcome to the world of Valoran! Use your emoji skills to identify the characters and places from this mystical land and become a Valoran Emoji Explorer !",
    link: "/emojify/valorant",
  },
];
const SlotGame = () => {
  return (
    <div className="bg-bg min-h-screen flex flex-col justify-start items-center py-8">
      <Helmet>
        <title>Emojify| Tombalaci Mehmet</title>
        <meta name="description" content="guess  emoji game" />
      </Helmet>
      {content.map((item) => (
        <div
          className="flex flex-col justify-center items-center w-4/5 p-4 text-center shadow-2xl my-4 border hover:scale-125 transition-all duration-100 ease-linear border-black rounded-md animate__animated  animate__backInLeft"
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
  );
};

export default SlotGame;
