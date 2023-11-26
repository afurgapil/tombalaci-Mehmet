import React, { useState, useContext } from "react";
import welcomecoin from "../assets/welcomecoin.gif";
import GoBack from "../Tools/GoBack";
import getRandomInt from "../utils/getRandomInt";
//mui
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Person4Icon from "@mui/icons-material/Person4";
//alertify
import alertify from "alertifyjs";
import { Helmet } from "react-helmet";
import { useUser } from "../hooks/useUser";
import { UserContext } from "../context/UserContext";
alertify.set("notifier", "position", "top-right");
alertify.set("notifier", "delay", 1);
const CoinFlip = () => {
  const user = useUser();
  const { updateScoreContext } = useContext(UserContext);
  const { updateStatContext } = useContext(UserContext);
  const [choice, setChoice] = useState(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isResultHead, setIsResultHead] = useState(null);
  const game = process.env.REACT_APP_CORRECT_COINFLIP;
  const point = Number(process.env.REACT_APP_POINT);

  const playGame = () => {
    const randomNum = getRandomInt() / 2 ** 32;
    const newResult = randomNum < 0.5 ? "Heads" : "Tails";
    if (randomNum < 0.5) {
      setIsResultHead(true);
    } else {
      setIsResultHead(false);
    }
    setIsGameStart(true);
    if (choice === newResult) {
      updateScoreContext(user.id, point);
      updateStatContext(user.id, game);
      alertify.success("Congrats! +10", 1);
    } else {
      updateScoreContext(user.id, -point);
      alertify.error("Ups! Unlucky. -10", 1);
    }
  };
  function OnHead() {
    return (
      <CurrencyBitcoinIcon
        fontSize="xlarge"
        className="text-[#b6b6b6]"
      ></CurrencyBitcoinIcon>
    );
  }
  function OnTail() {
    return (
      <Person4Icon fontSize="xlarge" className="text-[#b6b6b6]"></Person4Icon>
    );
  }
  return (
    <div className="min-h-screen bg-bg flex flex-col justify-start items-center pt-20 ">
      <Helmet>
        <title>Coin Flip | Tombalaci Mehmet</title>
        <meta name="description" content="coin flip game " />
      </Helmet>
      <div className="flex flex-col justify-center items-center text-center ">
        <GoBack></GoBack>
        {!isGameStart ? (
          <div className="flex justify-center items-center ">
            <img src={welcomecoin} alt="Coin" className="mt-4"></img>
          </div>
        ) : (
          <div className="flex justify-center items-center p-4 bg-[#b6b6b6] rounded-full ">
            <div className="flex justify-center items-center bg-[#d8d8d8] rounded-full text-8xl p-20">
              {isResultHead ? <OnHead></OnHead> : <OnTail></OnTail>}
            </div>
          </div>
        )}
        <div className="w-50 h-25 text-5xl m-8 text-center">
          <button
            variant="contained"
            color="primary"
            className="bg-[#b39d7d] text-white px-2 py-4 rounded mx-2 hover:bg-[#d3b993] duration-200 transition-all ease-in"
            onClick={() => {
              setChoice("Heads");
              playGame();
            }}
          >
            Heads
          </button>
          <button
            variant="contained"
            color="primary"
            className="bg-[#9c86b3] text-white px-2 py-4 rounded mx-2 hover:bg-[#b299cd] duration-200 transition-all ease-in"
            onClick={() => {
              setChoice("Tails");
              playGame();
            }}
          >
            Tails
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
