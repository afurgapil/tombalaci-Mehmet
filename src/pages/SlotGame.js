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
    from: "from-[#a84d23]",
    to: "to-[#6755ae]",
    direction: "bg-gradient-to-bl",
  },
  {
    title: "Süleyman Çakır",
    desc: "A full duty man. It is rising rapidly in the world. It can ead you to big profits or it can completely sink you.",
    color: "bg-yellow-500",
    img: cakir,
    link: "cakir",
    from: "from-[#6755ae]",
    to: "to-[#98fe90]",
    direction: "bg-gradient-to-br",
  },
  {
    title: "Muhterem",
    desc: "   He is the private chef of Tombalacı Mehmet. There is not much information about him, but there is only one known fact, if you want to be rich, you have to be with him.",
    color: "bg-red-500",
    img: muhterem,
    link: "muhterem",
    from: "from-[#98fe90]",
    to: "to-[#8642be]",
    direction: "bg-gradient-to-bl",
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
          key={item.img}
          id="easy-container"
          className={`${item.direction} ${item.from} ${item.to} min-h-screen w-full flex flex-col md:flex-row justify-center items-center  `}
        >
          <div className="md:w-2/5 mx-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center mx-8">
            <h2 className="font-bold text-white border-b-2 border-white w-full text-center text-7xl md:text-8xl ">
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
