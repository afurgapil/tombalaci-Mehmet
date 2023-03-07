import React, { useState, useEffect } from "react";
import "./roulette.scss";
import alertify from "alertifyjs";
import point from "../../assets/score.png";

function Roulette() {
  const [rouletteNumber, setRouletteNumber] = useState(31);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [score, setScore] = useState(localStorage.getItem("score"));
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);
  function returnNumber() {
    let randomNumber = Math.floor(Math.random() * (36 + 1));
    setRouletteNumber(randomNumber);
    setDrawnNumbers([...drawnNumbers, rouletteNumber]);
  }

  function isNumber(number) {
    returnNumber();

    if (number === rouletteNumber) {
      setScore(score + 350);
      localStorage.setItem("score", score + 350);
      alertify.success("Congrats! +350", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }
  function isIn(a, b, rate) {
    returnNumber();
    if (rouletteNumber >= a && rouletteNumber <= b) {
      setScore(score + rate);
      localStorage.setItem("score", score + rate);
      alertify.success(`Congrats! ${rate}`, 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }
  function isOdd() {
    returnNumber();
    if (rouletteNumber % 2 === 1) {
      setScore(score + 10);
      localStorage.setItem("score", score + 10);
      alertify.success("Congrats! +10", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }
  function isEven() {
    returnNumber();
    if (rouletteNumber % 2 === 0) {
      setScore(score + 10);
      localStorage.setItem("score", score + 10);
      alertify.success("Congrats! +10", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }
  function isRed() {
    const red = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ];
    returnNumber();
    if (red.includes(rouletteNumber)) {
      setScore(score + 10);
      localStorage.setItem("score", score + 10);
      alertify.success("Congrats! +10", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }
  function isBlack() {
    const black = [
      2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
    ];
    returnNumber();
    if (black.includes(rouletteNumber)) {
      setScore(score + 10);
      localStorage.setItem("score", score + 10);
      alertify.success("Congrats! +10", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }
  function isGreen() {
    returnNumber();
    if (rouletteNumber === 0) {
      setScore(score + 350);
      localStorage.setItem("score", score + 350);
      alertify.success("Are you Polat ALEMDAR??? +350", 1);
    } else {
      setScore(score - 10);
      localStorage.setItem("score", score - 10);
      alertify.error(`Ups! Unlucky. -10`, 1);
    }
  }

  return (
    <div id="roulette-main">
      <div id="score">
        <img src={point} alt="" width="120px" height="80px" />
        <h1>Your Score: {score}</h1>
      </div>
      <div className="mainpage">
        <div id="table">
          <div className="roww">
            <div onClick={isGreen} className="col1 green">
              <button>0</button>
            </div>
            <div className=" col2">
              <div className="row">
                <div
                  onClick={() => {
                    isNumber(3);
                  }}
                  className="box red"
                >
                  <button>3</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(6);
                  }}
                  className="box black"
                >
                  <button>6</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(9);
                  }}
                  className="box red"
                >
                  <button>9</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(12);
                  }}
                  className="box red"
                >
                  <button>12</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(15);
                  }}
                  className="box black"
                >
                  <button>15</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(18);
                  }}
                  className="box red"
                >
                  <button>18</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(21);
                  }}
                  className="box red"
                >
                  <button>21</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(24);
                  }}
                  className="box black"
                >
                  <button>24</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(27);
                  }}
                  className="box red"
                >
                  <button>27</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(30);
                  }}
                  className="box red"
                >
                  <button>30</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(33);
                  }}
                  className="box black"
                >
                  <button>33</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(36);
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
                  }}
                  className="box black "
                >
                  <button>2</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(5);
                  }}
                  className="box red"
                >
                  <button>5</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(8);
                  }}
                  className="box black"
                >
                  <button>8</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(11);
                  }}
                  className="box black"
                >
                  <button>11</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(14);
                  }}
                  className="box red"
                >
                  <button>14</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(17);
                  }}
                  className="box black"
                >
                  <button>17</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(20);
                  }}
                  className="box black"
                >
                  <button>20</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(23);
                  }}
                  className="box red"
                >
                  <button>23</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(26);
                  }}
                  className="box black"
                >
                  <button>26</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(29);
                  }}
                  className="box black"
                >
                  <button>29</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(32);
                  }}
                  className="box red"
                >
                  <button>32</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(35);
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
                  }}
                  className="box red"
                >
                  <button>1</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(4);
                  }}
                  className="box black"
                >
                  <button>4</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(7);
                  }}
                  className="box red"
                >
                  <button>7</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(10);
                  }}
                  className="box black"
                >
                  <button>10</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(13);
                  }}
                  className="box black"
                >
                  <button>13</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(16);
                  }}
                  className="box red"
                >
                  <button>16</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(19);
                  }}
                  className="box red"
                >
                  <button>19</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(22);
                  }}
                  className="box black"
                >
                  <button>22</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(25);
                  }}
                  className="box red"
                >
                  <button>25</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(28);
                  }}
                  className="box black"
                >
                  <button>28</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(31);
                  }}
                  className="box black"
                >
                  <button>31</button>
                </div>
                <div
                  onClick={() => {
                    isNumber(34);
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
              <div onClick={() => isIn(1, 12, 20)} className="box">
                <button>1-12</button>
              </div>
              <div onClick={() => isIn(13, 24, 20)} className="box">
                <button>13-24</button>
              </div>
              <div onClick={() => isIn(25, 36, 20)} className="box">
                <button>25-36</button>
              </div>
            </div>
            <div className="row row3">
              <div onClick={() => isIn(1, 18, 10)} className="box">
                <button>1-18</button>
              </div>
              <div onClick={isOdd} className="box">
                <button>Odd</button>
              </div>
              <div onClick={isRed} className="box red">
                <button></button>
              </div>
              <div onClick={isBlack} className="box black">
                <button></button>
              </div>
              <div onClick={isEven} className="box">
                <button>Even</button>
              </div>
              <div onClick={() => isIn(19, 36, 10)} className="box">
                <button>19-36</button>
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
