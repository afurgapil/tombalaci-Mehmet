import React, { useState, useEffect } from "react";
import "./roulette.scss";
import GoBack from "../Tools/GoBack";

//firebase
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
//alertify
import alertify from "alertifyjs";

function Roulette() {
  //breakpoint1
  const [rouletteNumber, setRouletteNumber] = useState(getRandomInt() % 37);

  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [intervalNumber, setIntervalNumber] = useState();
  const [score, setScore] = useState(null);
  const [correctRoulette, setCorrectRoulette] = useState(null);
  const [userchoice, setUserChoice] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then((doc) => {
          if (doc.exists()) {
            setScore(doc.data().score);
            setCorrectRoulette(doc.data().correctRoulette);
          } else {
            updateDoc(userDocRef, { score: 0 });
            setScore(0);
            setCorrectRoulette(0);
          }
        });
      }
    });
  }, []);
  function getRandomInt() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  }
  function setChoice(userg) {
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
        document.getElementById("guesss").style.backgroundColor = "red";
        document.getElementById("guesss").style.color = "white";
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
        document.getElementById("guesss").style.backgroundColor = "black";
        document.getElementById("guesss").style.color = "white";
        break;

      case 0:
        document.getElementById("guesss").style.backgroundColor = "green";
        document.getElementById("guesss").style.color = "white";
        break;
      case "Red":
        document.getElementById("guesss").style.backgroundColor = "red";
        document.getElementById("guesss").style.color = "red";
        break;
      case "Black":
        document.getElementById("guesss").style.backgroundColor = "black";
        document.getElementById("guesss").style.color = "black";
        break;
      default:
        document.getElementById("guesss").style.backgroundColor = "goldenrod";
        document.getElementById("guesss").style.color = "white";
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
          document.getElementById("resultt").style.backgroundColor = "red";
          document.getElementById("resultt").style.color = "white";
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
          document.getElementById("resultt").style.backgroundColor = "black";
          document.getElementById("resultt").style.color = "white";
          break;

        case 0:
          document.getElementById("resultt").style.backgroundColor = "green";
          document.getElementById("resultt").style.color = "white";
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
          document.getElementById("resultt").style.backgroundColor = "red";
          document.getElementById("resultt").style.color = "white";
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
          document.getElementById("resultt").style.backgroundColor = "black";
          document.getElementById("resultt").style.color = "white";
          break;

        case 0:
          document.getElementById("resultt").style.backgroundColor = "green";
          document.getElementById("resultt").style.color = "white";
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
        const newScore = score + 350;
        setScore(newScore);
        const newCorrectRoulette = correctRoulette + 1;
        setCorrectRoulette(newCorrectRoulette);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, {
          score: newScore,
          correctRoulette: newCorrectRoulette,
        });
        alertify.success("Congrats! +350", 1);
      } else {
        const newScore = score - 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, { score: newScore });
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isIn(a, b, rate) {
    returnNumber();
    setTimeout(() => {
      if (rouletteNumber >= a && rouletteNumber <= b) {
        const newScore = score + rate;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, {
          score: newScore,
        });
        alertify.success(`Congrats! ${rate}`, 1);
      } else {
        const newScore = score - 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, { score: newScore });
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isOdd() {
    returnNumber();
    setTimeout(() => {
      if (rouletteNumber % 2 === 1) {
        const newScore = score + 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, {
          score: newScore,
        });
        alertify.success("Congrats! +10", 1);
      } else {
        const newScore = score - 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, { score: newScore });
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }
  function isEven() {
    returnNumber();
    setTimeout(() => {
      if (rouletteNumber % 2 === 0) {
        const newScore = score + 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, {
          score: newScore,
        });
        alertify.success("Congrats! +10", 1);
      } else {
        const newScore = score - 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, { score: newScore });
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
        const newScore = score + 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, {
          score: newScore,
        });
        alertify.success("Congrats! +10", 1);
      } else {
        const newScore = score - 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, { score: newScore });
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
        const newScore = score + 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, {
          score: newScore,
        });
        alertify.success("Congrats! +10", 1);
      } else {
        const newScore = score - 10;
        setScore(newScore);
        const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
        updateDoc(userDocRef, { score: newScore });
        alertify.error(`Ups! Unlucky. -10`, 1);
      }
    }, 1100);
  }

  return (
    <div id="roulette-main">
      <GoBack></GoBack>
      <div className="mainpage">
        {userchoice !== null && (
          <div className="roulette-guesses">
            <h1 className="guess-box " id="guesss">
              {userchoice}
            </h1>
            <h1 className="guess-box" id="resultt">
              {intervalNumber}
            </h1>
          </div>
        )}
        <div className="game-table">
          <div id="table">
            <div className="roww">
              <div className="col1 green">
                <button
                  onClick={() => {
                    isNumber(0);
                    setChoice(0);
                  }}
                >
                  0
                </button>
              </div>
              <div className=" col2">
                <div className="row">
                  <div
                    onClick={() => {
                      isNumber(3);
                      setChoice(3);
                    }}
                    className="box red"
                  >
                    <button>3</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(6);
                      setChoice(6);
                    }}
                    className="box black"
                  >
                    <button>6</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(9);
                      setChoice(9);
                    }}
                    className="box red"
                  >
                    <button>9</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(12);
                      setChoice(12);
                    }}
                    className="box red"
                  >
                    <button>12</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(15);
                      setChoice(15);
                    }}
                    className="box black"
                  >
                    <button>15</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(18);
                      setChoice(18);
                    }}
                    className="box red"
                  >
                    <button>18</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(21);
                      setChoice(21);
                    }}
                    className="box red"
                  >
                    <button>21</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(24);
                      setChoice(24);
                    }}
                    className="box black"
                  >
                    <button>24</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(27);
                      setChoice(27);
                    }}
                    className="box red"
                  >
                    <button>27</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(30);
                      setChoice(30);
                    }}
                    className="box red"
                  >
                    <button>30</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(33);
                      setChoice(33);
                    }}
                    className="box black"
                  >
                    <button>33</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(36);
                      setChoice(36);
                    }}
                    className="box red"
                  >
                    <button>36</button>
                  </div>
                </div>
                <div className="row">
                  <div
                    onClick={() => {
                      isNumber(2);
                      setChoice(2);
                    }}
                    className="box black "
                  >
                    <button>2</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(5);
                      setChoice(5);
                    }}
                    className="box red"
                  >
                    <button>5</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(8);
                      setChoice(8);
                    }}
                    className="box black"
                  >
                    <button>8</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(11);
                      setChoice(11);
                    }}
                    className="box black"
                  >
                    <button>11</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(14);
                      setChoice(14);
                    }}
                    className="box red"
                  >
                    <button>14</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(17);
                      setChoice(17);
                    }}
                    className="box black"
                  >
                    <button>17</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(20);
                      setChoice(20);
                    }}
                    className="box black"
                  >
                    <button>20</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(23);
                      setChoice(23);
                    }}
                    className="box red"
                  >
                    <button>23</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(26);
                      setChoice(26);
                    }}
                    className="box black"
                  >
                    <button>26</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(29);
                      setChoice(29);
                    }}
                    className="box black"
                  >
                    <button>29</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(32);
                      setChoice(32);
                    }}
                    className="box red"
                  >
                    <button>32</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(35);
                      setChoice(35);
                    }}
                    className="box black"
                  >
                    <button>35</button>
                  </div>
                </div>
                <div className="row">
                  <div
                    onClick={() => {
                      isNumber(1);
                      setChoice(1);
                    }}
                    className="box red"
                  >
                    <button>1</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(4);
                      setChoice(4);
                    }}
                    className="box black"
                  >
                    <button>4</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(7);
                      setChoice(7);
                    }}
                    className="box red"
                  >
                    <button>7</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(10);
                      setChoice(10);
                    }}
                    className="box black"
                  >
                    <button>10</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(13);
                      setChoice(13);
                    }}
                    className="box black"
                  >
                    <button>13</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(16);
                      setChoice(16);
                    }}
                    className="box red"
                  >
                    <button>16</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(19);
                      setChoice(19);
                    }}
                    className="box red"
                  >
                    <button>19</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(22);
                      setChoice(22);
                    }}
                    className="box black"
                  >
                    <button>22</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(25);
                      setChoice(25);
                    }}
                    className="box red"
                  >
                    <button>25</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(28);
                      setChoice(28);
                    }}
                    className="box black"
                  >
                    <button>28</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(31);
                      setChoice(31);
                    }}
                    className="box black"
                  >
                    <button>31</button>
                  </div>
                  <div
                    onClick={() => {
                      isNumber(34);
                      setChoice(34);
                    }}
                    className="box red"
                  >
                    <button>34</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="roww2">
              <div className="row row2">
                <div
                  onClick={() => {
                    isIn(1, 12, 20);
                    setChoice("1 - 12");
                  }}
                  className="box"
                >
                  <button>1-12</button>
                </div>
                <div
                  onClick={() => {
                    isIn(13, 24, 20);
                    setChoice("13 - 24");
                  }}
                  className="box"
                >
                  <button>13-24</button>
                </div>
                <div
                  onClick={() => {
                    isIn(25, 36, 20);
                    setChoice("25 - 36");
                  }}
                  className="box"
                >
                  <button>25-36</button>
                </div>
              </div>
              <div className="row row3">
                <div
                  onClick={() => {
                    isIn(1, 18, 10);
                    setChoice("1 - 18");
                  }}
                  className="box"
                >
                  <button>1-18</button>
                </div>
                <div
                  onClick={() => {
                    isOdd();
                    setChoice("Odd");
                  }}
                  className="box"
                >
                  <button>Odd</button>
                </div>
                <div
                  onClick={() => {
                    isRed();
                    setChoice("Red");
                  }}
                  className="box red"
                >
                  <button></button>
                </div>
                <div
                  onClick={() => {
                    isBlack();
                    setChoice("Black");
                  }}
                  className="box black"
                >
                  <button></button>
                </div>
                <div
                  onClick={() => {
                    isEven();
                    setChoice("Even");
                  }}
                  className="box"
                >
                  <button>Even</button>
                </div>
                <div
                  onClick={() => {
                    isIn(19, 36, 10);
                    setChoice("19-36");
                  }}
                  className="box"
                >
                  <button>19-36</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="last">
          <h2 className="last-numbers">Last Numbers</h2>
        </div>
        <div className="number-container">
          {drawnNumbers.map((rouletteNumber, index) => (
            <div className="number-box" key={index}>
              {rouletteNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roulette;
