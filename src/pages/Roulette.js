import React, { useState, useContext, useEffect } from "react";
import GoBack from "../Tools/GoBack";

import getRandomInt from "../utils/getRandomInt";

//alertify
import alertify from "alertifyjs";
import { Helmet } from "react-helmet";

import { useUser } from "../hooks/useUser";
import { UserContext } from "../context/UserContext";
import { useToken } from "../hooks/useToken";
const numbers = [
  {
    col1: [
      { value: 3, color: "bg-red-500" },
      { value: 2, color: "bg-black" },
      { value: 1, color: "bg-red-500" },
    ],
    col2: [
      { value: 6, color: "bg-black" },
      { value: 5, color: "bg-red-500" },
      { value: 4, color: "bg-black" },
    ],
    col3: [
      { value: 9, color: "bg-red-500" },
      { value: 8, color: "bg-black" },
      { value: 7, color: "bg-red-500" },
    ],
    col4: [
      { value: 12, color: "bg-black" },
      { value: 11, color: "bg-red-500" },
      { value: 10, color: "bg-black" },
    ],
    col5: [
      { value: 15, color: "bg-red-500" },
      { value: 14, color: "bg-black" },
      { value: 13, color: "bg-red-500" },
    ],
    col6: [
      { value: 18, color: "bg-black" },
      { value: 17, color: "bg-red-500" },
      { value: 16, color: "bg-black" },
    ],
    col7: [
      { value: 21, color: "bg-red-500" },
      { value: 20, color: "bg-black" },
      { value: 19, color: "bg-red-500" },
    ],
    col8: [
      { value: 24, color: "bg-black" },
      { value: 23, color: "bg-red-500" },
      { value: 22, color: "bg-black" },
    ],
    col9: [
      { value: 27, color: "bg-red-500" },
      { value: 26, color: "bg-black" },
      { value: 25, color: "bg-red-500" },
    ],
    col10: [
      { value: 30, color: "bg-black" },
      { value: 29, color: "bg-red-500" },
      { value: 28, color: "bg-black" },
    ],
    col11: [
      { value: 33, color: "bg-red-500" },
      { value: 32, color: "bg-black" },
      { value: 31, color: "bg-red-500" },
    ],
    col12: [
      { value: 36, color: "bg-black" },
      { value: 35, color: "bg-red-500" },
      { value: 34, color: "bg-black" },
    ],
  },
];
function Roulette() {
  //breakpoint1
  const user = useUser();
  const token = useToken();
  const { updateScoreContext } = useContext(UserContext);
  const { updateStatContext } = useContext(UserContext);
  const [rouletteNumber, setRouletteNumber] = useState(getRandomInt() % 37);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [intervalNumber, setIntervalNumber] = useState();
  const [userchoice, setUserChoice] = useState(null);
  const [userChoiceColor, setUserChoiceColor] = useState({
    backgroundColor: "",
    color: "",
  });
  const [resultColor, setResultColor] = useState({
    backgroundColor: "",
    color: "",
  });
  const point = Number(process.env.REACT_APP_POINT);
  const game = process.env.REACT_APP_CORRECT_ROULETTE;
  useEffect(() => {
    const guesss = document.getElementById("guesss");
    if (guesss && userChoiceColor !== null) {
      console.log(userChoiceColor.backgroundColor);
      console.log(userChoiceColor.color);
      guesss.style.backgroundColor = userChoiceColor.backgroundColor;
      guesss.style.color = userChoiceColor.color;
    }
  }, [userChoiceColor]);
  useEffect(() => {
    const resultt = document.getElementById("resultt");
    if (resultt && resultColor !== null) {
      resultt.style.backgroundColor = resultColor.backgroundColor;
      resultt.style.color = resultColor.color;
    }
  }, [resultColor]);
  function setChoice(userg) {
    console.log(userg);
    setUserChoice(userg);
    switch (userg) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 9:
      case 12:
      case 14:
      case 16:
      case 18:
      case 19:
      case 21:
      case 23:
      case 25:
      case 27:
      case 30:
      case 32:
      case 34:
      case 36:
        setUserChoiceColor(() => ({
          backgroundColor: "red",
          color: "white",
        }));
        break;
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
      case 11:
      case 13:
      case 15:
      case 17:
      case 20:
      case 22:
      case 24:
      case 26:
      case 28:
      case 29:
      case 31:
      case 33:
      case 35:
        setUserChoiceColor(() => ({
          backgroundColor: "black",
          color: "white",
        }));
        break;
      case 0:
        setUserChoiceColor(() => ({
          backgroundColor: "green",
          color: "white",
        }));
        break;
      case "Red":
        setUserChoiceColor(() => ({
          backgroundColor: "red",
          color: "red",
        }));
        break;
      case "Black":
        setUserChoiceColor(() => ({
          backgroundColor: "black",
          color: "black",
        }));
        break;
      default:
        setUserChoiceColor(() => ({
          backgroundColor: "#d6955d",
          color: "white",
        }));
        break;
    }
  }

  function returnNumber() {
    let interval = 100;
    let intervalnumbers = setInterval(() => {
      interval += 1000000;
      let rannumber = getRandomInt() % 37;
      setIntervalNumber(rannumber);
      switch (rannumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 12:
        case 14:
        case 16:
        case 18:
        case 19:
        case 21:
        case 23:
        case 25:
        case 27:
        case 30:
        case 32:
        case 34:
        case 36:
          setResultColor(() => ({
            backgroundColor: "red",
            color: "white",
          }));
          break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
        case 11:
        case 13:
        case 15:
        case 17:
        case 20:
        case 22:
        case 24:
        case 26:
        case 28:
        case 29:
        case 31:
        case 33:
        case 35:
          setResultColor(() => ({
            backgroundColor: "black",
            color: "white",
          }));
          break;
        case 0:
          setResultColor(() => ({
            backgroundColor: "green",
            color: "white",
          }));
          break;
        default:
          break;
      }
    }, interval);
    let randomNumber = getRandomInt() % 37;
    setRouletteNumber(randomNumber);
    setTimeout(() => {
      clearInterval(intervalnumbers);
      setIntervalNumber(rouletteNumber);
      switch (rouletteNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 12:
        case 14:
        case 16:
        case 18:
        case 19:
        case 21:
        case 23:
        case 25:
        case 27:
        case 30:
        case 32:
        case 34:
        case 36:
          setResultColor(() => ({
            backgroundColor: "red",
            color: "white",
          }));
          break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
        case 11:
        case 13:
        case 15:
        case 17:
        case 20:
        case 22:
        case 24:
        case 26:
        case 28:
        case 29:
        case 31:
        case 33:
        case 35:
          setResultColor(() => ({
            backgroundColor: "black",
            color: "white",
          }));
          break;

        case 0:
          setResultColor(() => ({
            backgroundColor: "green",
            color: "white",
          }));
          break;
        default:
          break;
      }
      setDrawnNumbers([...drawnNumbers, rouletteNumber]);
    }, 1000);
  }

  function isNumber(number) {
    returnNumber();
    setTimeout(() => {
      if (number === rouletteNumber) {
        alertify.success("Congrats! +350", 1);
        updateScoreContext(user.id, user.email, token, 35 * point);
        updateStatContext(user.id, user.email, token, game);
      } else {
        updateScoreContext(user.id, user.email, token, -point);
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isIn(a, b, rate) {
    returnNumber();
    setTimeout(() => {
      if (rouletteNumber >= a && rouletteNumber <= b) {
        alertify.success(`Congrats! ${rate}`, 1);
        updateScoreContext(user.id, user.email, token, rate);
        updateStatContext(user.id, user.email, token, game);
      } else {
        updateScoreContext(user.id, user.email, token, -point);
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isOdd() {
    returnNumber();
    setTimeout(() => {
      if (rouletteNumber % 2 === 1) {
        alertify.success("Congrats! +10", 1);
        updateScoreContext(user.id, user.email, token, point);
        updateStatContext(user.id, user.email, token, game);
      } else {
        updateScoreContext(user.id, user.email, token, -point);
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isEven() {
    returnNumber();
    setTimeout(() => {
      if (rouletteNumber % 2 === 0) {
        alertify.success("Congrats! +10", 1);
        updateScoreContext(user.id, user.email, token, point);
        updateStatContext(user.id, user.email, token, game);
      } else {
        updateScoreContext(user.id, user.email, token, -point);
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isRed() {
    const red = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ];
    returnNumber();
    setTimeout(() => {
      if (red.includes(rouletteNumber)) {
        alertify.success("Congrats! +10", 1);
        updateScoreContext(user.id, user.email, token, point);
        updateStatContext(user.id, user.email, token, game);
      } else {
        updateScoreContext(user.id, user.email, token, -point);
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isBlack() {
    const black = [
      2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
    ];
    returnNumber();
    setTimeout(() => {
      if (black.includes(rouletteNumber)) {
        alertify.success("Congrats! +10", 1);
        updateScoreContext(user.id, user.email, token, point);
        updateStatContext(user.id, user.email, token, game);
      } else {
        updateScoreContext(user.id, user.email, token, -point);
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }

  return (
    <div
      id="roulette-main"
      className="min-h-screen bg-bg flex flex-col justify-center items-center"
    >
      <Helmet>
        <title>Roulette| Tombalaci Mehmet</title>
        <meta name="description" content="roulette game " />
      </Helmet>
      <GoBack></GoBack>
      <div className="flex flex-col justify-center items-center">
        {userchoice !== null && (
          <div className="flex flex-row justify-center items-center m-2 bg-[#dcdcdc] rounded-3xl p-1 border-4 border-black border-solid">
            <h1
              className="flex flex-row text-center justify-center items-center p-2 m-1 w-24 h-12 rounded-3xl border-4 border-groove "
              id="guesss"
            >
              {userchoice}
            </h1>
            <h1
              className="flex flex-row text-center justify-center items-center p-2 m-1 w-24 h-12 rounded-3xl border-4 border-groove border-[#daa520]"
              id="resultt"
            >
              {intervalNumber}
            </h1>
          </div>
        )}
        <div className="flex flex-row justify-center items-center">
          <div
            id="table"
            className="flex flex-col md:flex-row justify-center items-center text-white text-4xl border-4 border-black border-groove h-full my-2"
          >
            <div className="flex justify-center items-center text-center bg-green-600 w-full md:w-12 h-full  border border-white">
              <button
                className="bg-transparent border-none text-white text-xl md:text-4xl cursor-pointer outline-none h-12 md:h-[27rem]"
                onClick={() => {
                  isNumber(0);
                  setChoice(0);
                }}
              >
                0
              </button>
            </div>
            {numbers.map((cols, colIndex) => (
              <div key={colIndex} className="flex flex-col md:flex-row h-full">
                {Object.keys(cols).map((colKey) => (
                  <div
                    key={colKey}
                    className="flex flex-row md:flex-col h-full"
                  >
                    {cols[colKey].map((col, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center text-center w-12 h-12 md:w-14 md:h-36 ${col.color} text-white border border-white`}
                      >
                        <button
                          className="bg-transparent border-none text-xl md:text-4xl cursor-pointer outline-none w-full h-full"
                          onClick={() => {
                            isNumber(col.value);
                            setChoice(col.value);
                          }}
                        >
                          {col.value}
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center my-4 cursor-pointer">
          <div className="flex flex-col justify-center items-center">
            <div
              className="bg-docHeader border text-white border-black  w-72 h-12 flex justify-center items-center font-bold"
              onClick={() => {
                isIn(1, 12, 20);
                setChoice("1 - 12");
              }}
            >
              1-12
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div
                className="flex justify-center items-center bg-docHeader border text-white border-black w-72 md:w-36 h-12 font-bold"
                onClick={() => {
                  isIn(1, 18, 10);
                  setChoice("1 - 18");
                }}
              >
                1-18
              </div>
              <div
                className="flex justify-center items-center bg-docHeader border text-white border-black w-72 md:w-36 h-12 font-bold"
                onClick={() => {
                  isOdd();
                  setChoice("Odd");
                }}
              >
                Odd
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="bg-docHeader border text-white border-black  w-72 h-12 flex justify-center items-center font-bold"
              onClick={() => {
                isIn(13, 24, 20);
                setChoice("13 - 24");
              }}
            >
              13-24
            </div>
            <div className="flex md:flex-row justify-center items-center">
              <div
                className="flex justify-center items-center bg-red-500 text-red-500 border border-black  w-36 h-12 font-bold"
                onClick={() => {
                  isRed();
                  setChoice("Red");
                }}
              >
                Red
              </div>
              <div
                className="flex justify-center items-center bg-black text-black border border-black  w-36 h-12 font-bold"
                onClick={() => {
                  isBlack();
                  setChoice("Black");
                }}
              >
                Black
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="bg-docHeader border text-white border-black  w-72 h-12 flex justify-center items-center font-bold"
              onClick={() => {
                isIn(25, 36, 20);
                setChoice("25 - 36");
              }}
            >
              25-36
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div
                className="flex justify-center items-center bg-docHeader border text-white border-black w-72 md:w-36 h-12 font-bold"
                onClick={() => {
                  isEven();
                  setChoice("Even");
                }}
              >
                Even
              </div>
              <div
                className="flex justify-center items-center bg-docHeader border text-white border-black w-72 md:w-36 h-12 font-bold"
                onClick={() => {
                  isIn(19, 36, 10);
                  setChoice("19-36");
                }}
              >
                19-36
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <h2 className="mt-4 text-7xl mb-1">Last Numbers</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {drawnNumbers.map((rouletteNumber, index) => (
            <div
              className="flex justify-center items-center text-center w-12 h-12 bg-orange-500 text-antiqueWhite text-4xl border border-white border-solid rounded-xl"
              key={index}
            >
              {rouletteNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roulette;
