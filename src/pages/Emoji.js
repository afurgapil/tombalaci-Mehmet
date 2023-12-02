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
    desc: "Join the battle of emojis in the world of League of Legends! Can you decipher the emojis to guess the champion names and become a Champion Emoji-tionist?",
    link: "/emojify/lol",
  },
  {
    title: "Valorant",
    desc: "Welcome to the world of Valoran! Use your emoji skills to identify the characters and places from this mystical land and become a Valoran Emoji Explorer!",
    link: "/emojify/valorant",
  },
];

const Emoji = () => {
  return (
    <div className="bg-bg min-h-screen flex flex-col justify-start items-center py-8">
      <Helmet>
        <title>Emojify | Tombalaci Mehmet</title>
        <meta name="description" content="Guess the emoji game" />
      </Helmet>
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-96 p-8 text-center shadow-lg my-8 border hover:shadow-2xl transition-all duration-300 ease-in-out border-black rounded-md animate__animated animate__fadeIn"
        >
          <h2 className="text-4xl font-semibold mb-4">{item.title}</h2>
          <p className="text-lg mb-6">{item.desc}</p>
          <Link to={item.link}>
            <button className="w-52 h-16 rounded-full bg-[#e6c1a1] hover:bg-[#ffda9c] text-bg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#e6c1a1]">
              <span className="button-text">PLAY</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Emoji;
