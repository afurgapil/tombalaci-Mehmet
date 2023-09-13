import React from "react";
import abidin from "../assets/abidin.jpg";
import cakir from "../assets/cakir1.jpg";
import muhterem from "../assets/muhterem1.png";
import { NavLink } from "react-router-dom";
//scroller
import { Helmet } from "react-helmet";
const content = [
  {
    title: "Çapsız Abidin",
    desc: "Just a commanding officer. He does whatever his brother says, he doesn't think too much. Ideal for those who don't want to take risks.",
    color: "bg-green-500",
    img: abidin,
    link: "abidin",
  },
  {
    title: "Süleyman Çakır",
    desc: "A full duty man. It is rising rapidly in the world. It can ead you to big profits or it can completely sink you.",
    color: "bg-yellow-500",
    img: cakir,
    link: "cakir",
  },
  {
    title: "Muhterem",
    desc: "   He is the private chef of Tombalacı Mehmet. There is not much information about him, but there is only one known fact, if you want to be rich, you have to be with him.",
    color: "bg-red-500",
    img: muhterem,
    link: "muhterem",
  },
];
const SlotGame = () => {
  return (
    <>
      <Helmet>
        <title>Slot | Tombalaci Mehmet</title>
        <meta name="description" content="slot game" />
      </Helmet>
      {content.map((item) => (
        <div
          id="easy-container"
          className="bg-gradient-to-l from-[#a84d23] to-[#6755ae] min-h-screen w-full flex flex-row justify-center items-center border-b-4 border-black "
        >
          <div className="w-2/5">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center mx-8">
            <h2 className="font-bold text-white border-b-2 border-white w-full text-center text-8xl ">
              {item.title}
            </h2>
            <p className="text-white py-4 text-2xl">{item.desc}</p>
            <NavLink to={item.link}>
              <button
                className={`${item.color} rounded-3xl px-8 py-4 text-center italic hover:scale-125 transition-all duration-500 ease-out`}
              >
                Play
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
};

export default SlotGame;
