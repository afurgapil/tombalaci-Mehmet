import { useState, useEffect } from "react";
import React from "react";
import "./slot.scss";
import stick from "../../assets/stick.png";
import point from "../../assets/score.png";
import alertify from "alertifyjs";

function Slot() {
  const [score, setScore] = useState(localStorage.getItem("score"));
  const [col11, setCol11] = useState("\uD83D\uDCB0");
  const [col12, setCol12] = useState("\ud83c\udf47");
  const [col13, setCol13] = useState("\uD83D\uDCB0");
  const [col21, setCol21] = useState("\uD83C\uDF49");
  const [col22, setCol22] = useState("\uD83D\uDCB0");
  const [col23, setCol23] = useState("\uD83C\uDF50");
  const [col31, setCol31] = useState("\uD83D\uDCB0");
  const [col32, setCol32] = useState("\uD83C\uDF51");
  const [col33, setCol33] = useState("\uD83D\uDCB0");
  const [col41, setCol41] = useState("\uD83C\uDF52");
  const [col42, setCol42] = useState("\uD83D\uDCB0");
  const [col43, setCol43] = useState("\uD83C\uDF53");
  const [col51, setCol51] = useState("\uD83D\uDCB0");
  const [col52, setCol52] = useState("\uD83C\uDF31");
  const [col53, setCol53] = useState("\uD83D\uDCB0");
  const [spinstick1, setSpinstick1] = useState(false);
  const [spinstick2, setSpinstick2] = useState(true);
  const [row1, setRow1] = useState(false);
  const [row2, setRow2] = useState(false);
  const [row3, setRow3] = useState(false);
  useEffect(() => {
    const cachedScore = localStorage.getItem("score");
    if (cachedScore !== null) {
      setScore(parseInt(cachedScore));
    }
  }, []);

  function gameStart() {
    setScore(score - 10);
    localStorage.setItem("score", score - 10);
  }
  const handleDondur = () => {
    setSpinstick1(!spinstick1);
    setSpinstick2(!spinstick2);
  };
  function spin() {
    setRow1(false);
    setRow2(false);
    setRow3(false);
    let nu1 = Math.floor(Math.random() * (4 + 1));
    let nu2 = Math.floor(Math.random() * (4 + 1));
    let nu3 = Math.floor(Math.random() * (4 + 1));
    let nu4 = Math.floor(Math.random() * (4 + 1));
    let nu5 = Math.floor(Math.random() * (4 + 1));
    let nu6 = Math.floor(Math.random() * (4 + 1));
    let nu7 = Math.floor(Math.random() * (4 + 1));
    let nu8 = Math.floor(Math.random() * (4 + 1));
    let nu9 = Math.floor(Math.random() * (4 + 1));
    let nu10 = Math.floor(Math.random() * (4 + 1));
    let nu11 = Math.floor(Math.random() * (4 + 1));
    let nu12 = Math.floor(Math.random() * (4 + 1));
    let nu13 = Math.floor(Math.random() * (4 + 1));
    let nu14 = Math.floor(Math.random() * (4 + 1));
    let nu15 = Math.floor(Math.random() * (4 + 1));
    switch (nu1) {
      case 0:
        setCol11("\ud83c\udf47");
        break;
      case 1:
        setCol11("\uD83C\uDF49");
        break;
      case 2:
        setCol11("\uD83C\uDF51");
        break;
      case 3:
        setCol11("\uD83C\uDF4B");
        break;
      case 4:
        setCol11("\uD83C\uDF4F");
        break;
      case 5:
        setCol11("\uD83C\uDF52");
        break;
      case 6:
        setCol11("\uD83C\uDF4D");
        break;
      case 7:
        setCol11("\uD83C\uDF31");
        break;
      case 8:
        setCol11("\uD83C\uDF53");
        break;
      case 9:
        setCol11("\uD83C\uDF53");
        break;
      default:
        setCol11("\uD83D\uDCB0");
    }
    switch (nu2) {
      case 0:
        setCol12("\ud83c\udf47");
        break;
      case 1:
        setCol12("\uD83C\uDF49");
        break;
      case 2:
        setCol12("\uD83C\uDF51");
        break;
      case 3:
        setCol12("\uD83C\uDF4B");
        break;
      case 4:
        setCol12("\uD83C\uDF4F");
        break;
      case 5:
        setCol12("\uD83C\uDF52");
        break;
      case 6:
        setCol12("\uD83C\uDF4D");
        break;
      case 7:
        setCol12("\uD83C\uDF31");
        break;
      case 8:
        setCol12("\uD83C\uDF53");
        break;
      case 9:
        setCol12("\uD83C\uDF53");
        break;
      default:
        setCol12("\uD83D\uDCB0");
    }
    switch (nu3) {
      case 0:
        setCol13("\ud83c\udf47");
        break;
      case 1:
        setCol13("\uD83C\uDF49");
        break;
      case 2:
        setCol13("\uD83C\uDF51");

        break;
      case 3:
        setCol13("\uD83C\uDF4B");
        break;
      case 4:
        setCol13("\uD83C\uDF4F");
        break;
      case 5:
        setCol13("\uD83C\uDF52");
        break;
      case 6:
        setCol13("\uD83C\uDF4D");
        break;
      case 7:
        setCol13("\uD83C\uDF31");
        break;
      case 8:
        setCol13("\uD83C\uDF53");
        break;
      case 9:
        setCol13("\uD83C\uDF53");
        break;
      default:
        setCol13("\uD83D\uDCB0");
    }
    switch (nu4) {
      case 0:
        setCol21("\ud83c\udf47");
        break;
      case 1:
        setCol21("\uD83C\uDF49");
        break;
      case 2:
        setCol21("\uD83C\uDF51");

        break;
      case 3:
        setCol21("\uD83C\uDF4B");
        break;
      case 4:
        setCol21("\uD83C\uDF4F");
        break;
      case 5:
        setCol21("\uD83C\uDF52");
        break;
      case 6:
        setCol21("\uD83C\uDF4D");
        break;
      case 7:
        setCol21("\uD83C\uDF31");
        break;
      case 8:
        setCol21("\uD83C\uDF53");
        break;
      case 9:
        setCol21("\uD83C\uDF53");

        break;
      default:
        setCol21("\uD83D\uDCB0");
    }
    switch (nu5) {
      case 0:
        setCol22("\ud83c\udf47");
        break;
      case 1:
        setCol22("\uD83C\uDF49");
        break;
      case 2:
        setCol22("\uD83C\uDF51");

        break;
      case 3:
        setCol22("\uD83C\uDF4B");
        break;
      case 4:
        setCol22("\uD83C\uDF4F");
        break;
      case 5:
        setCol22("\uD83C\uDF52");
        break;
      case 6:
        setCol22("\uD83C\uDF4D");
        break;
      case 7:
        setCol22("\uD83C\uDF31");
        break;
      case 8:
        setCol22("\uD83C\uDF53");
        break;
      case 9:
        setCol22("\uD83C\uDF53");

        break;
      default:
        setCol22("\uD83D\uDCB0");
    }
    switch (nu6) {
      case 0:
        setCol23("\ud83c\udf47");
        break;
      case 1:
        setCol23("\uD83C\uDF49");
        break;
      case 2:
        setCol23("\uD83C\uDF51");

        break;
      case 3:
        setCol23("\uD83C\uDF4B");
        break;
      case 4:
        setCol23("\uD83C\uDF4F");
        break;
      case 5:
        setCol23("\uD83C\uDF52");
        break;
      case 6:
        setCol23("\uD83C\uDF4D");
        break;
      case 7:
        setCol23("\uD83C\uDF31");
        break;
      case 8:
        setCol23("\uD83C\uDF53");
        break;
      case 9:
        setCol23("\uD83C\uDF53");

        break;
      default:
        setCol23("\uD83D\uDCB0");
    }
    switch (nu7) {
      case 0:
        setCol31("\ud83c\udf47");
        break;
      case 1:
        setCol31("\uD83C\uDF49");
        break;
      case 2:
        setCol31("\uD83C\uDF51");

        break;
      case 3:
        setCol31("\uD83C\uDF4B");
        break;
      case 4:
        setCol31("\uD83C\uDF4F");
        break;
      case 5:
        setCol31("\uD83C\uDF52");
        break;
      case 6:
        setCol31("\uD83C\uDF4D");
        break;
      case 7:
        setCol31("\uD83C\uDF31");
        break;
      case 8:
        setCol31("\uD83C\uDF53");
        break;
      case 9:
        setCol31("\uD83C\uDF53");

        break;
      default:
        setCol31("\uD83D\uDCB0");
    }
    switch (nu8) {
      case 0:
        setCol32("\ud83c\udf47");
        break;
      case 1:
        setCol32("\uD83C\uDF49");
        break;
      case 2:
        setCol32("\uD83C\uDF51");

        break;
      case 3:
        setCol32("\uD83C\uDF4B");
        break;
      case 4:
        setCol32("\uD83C\uDF4F");
        break;
      case 5:
        setCol32("\uD83C\uDF52");
        break;
      case 6:
        setCol32("\uD83C\uDF4D");
        break;
      case 7:
        setCol32("\uD83C\uDF31");
        break;
      case 8:
        setCol32("\uD83C\uDF53");
        break;
      case 9:
        setCol32("\uD83C\uDF53");

        break;
      default:
        setCol32("\uD83D\uDCB0");
    }
    switch (nu9) {
      case 0:
        setCol33("\ud83c\udf47");
        break;
      case 1:
        setCol33("\uD83C\uDF49");
        break;
      case 2:
        setCol33("\uD83C\uDF51");

        break;
      case 3:
        setCol33("\uD83C\uDF4B");
        break;
      case 4:
        setCol33("\uD83C\uDF4F");
        break;
      case 5:
        setCol33("\uD83C\uDF52");
        break;
      case 6:
        setCol33("\uD83C\uDF4D");
        break;
      case 7:
        setCol33("\uD83C\uDF31");
        break;
      case 8:
        setCol33("\uD83C\uDF53");
        break;
      case 9:
        setCol33("\uD83C\uDF53");

        break;
      default:
        setCol33("\uD83D\uDCB0");
    }
    switch (nu10) {
      case 0:
        setCol41("\ud83c\udf47");
        break;
      case 1:
        setCol41("\uD83C\uDF49");
        break;
      case 2:
        setCol41("\uD83C\uDF51");

        break;
      case 3:
        setCol41("\uD83C\uDF4B");
        break;
      case 4:
        setCol41("\uD83C\uDF4F");
        break;
      case 5:
        setCol41("\uD83C\uDF52");
        break;
      case 6:
        setCol41("\uD83C\uDF4D");
        break;
      case 7:
        setCol41("\uD83C\uDF31");
        break;
      case 8:
        setCol41("\uD83C\uDF53");
        break;
      case 9:
        setCol41("\uD83C\uDF53");

        break;
      default:
        setCol41("\uD83D\uDCB0");
    }
    switch (nu11) {
      case 0:
        setCol42("\ud83c\udf47");
        break;
      case 1:
        setCol42("\uD83C\uDF49");
        break;
      case 2:
        setCol42("\uD83C\uDF51");

        break;
      case 3:
        setCol42("\uD83C\uDF4B");
        break;
      case 4:
        setCol42("\uD83C\uDF4F");
        break;
      case 5:
        setCol42("\uD83C\uDF52");
        break;
      case 6:
        setCol42("\uD83C\uDF4D");
        break;
      case 7:
        setCol42("\uD83C\uDF31");
        break;
      case 8:
        setCol42("\uD83C\uDF53");
        break;
      case 9:
        setCol42("\uD83C\uDF53");

        break;
      default:
        setCol42("\uD83D\uDCB0");
    }
    switch (nu12) {
      case 0:
        setCol43("\ud83c\udf47");
        break;
      case 1:
        setCol43("\uD83C\uDF49");
        break;
      case 2:
        setCol43("\uD83C\uDF51");

        break;
      case 3:
        setCol43("\uD83C\uDF4B");
        break;
      case 4:
        setCol43("\uD83C\uDF4F");
        break;
      case 5:
        setCol43("\uD83C\uDF52");
        break;
      case 6:
        setCol43("\uD83C\uDF4D");
        break;
      case 7:
        setCol43("\uD83C\uDF31");
        break;
      case 8:
        setCol43("\uD83C\uDF53");
        break;
      case 9:
        setCol43("\uD83C\uDF53");

        break;
      default:
        setCol43("\uD83D\uDCB0");
    }
    switch (nu13) {
      case 0:
        setCol51("\ud83c\udf47");
        break;
      case 1:
        setCol51("\uD83C\uDF49");
        break;
      case 2:
        setCol51("\uD83C\uDF51");

        break;
      case 3:
        setCol51("\uD83C\uDF4B");
        break;
      case 4:
        setCol51("\uD83C\uDF4F");
        break;
      case 5:
        setCol51("\uD83C\uDF52");
        break;
      case 6:
        setCol51("\uD83C\uDF4D");
        break;
      case 7:
        setCol51("\uD83C\uDF31");
        break;
      case 8:
        setCol51("\uD83C\uDF53");
        break;
      case 9:
        setCol51("\uD83C\uDF53");

        break;
      default:
        setCol51("\uD83D\uDCB0");
    }
    switch (nu14) {
      case 0:
        setCol52("\ud83c\udf47");
        break;
      case 1:
        setCol52("\uD83C\uDF49");
        break;
      case 2:
        setCol52("\uD83C\uDF51");

        break;
      case 3:
        setCol52("\uD83C\uDF4B");
        break;
      case 4:
        setCol52("\uD83C\uDF4F");
        break;
      case 5:
        setCol52("\uD83C\uDF52");
        break;
      case 6:
        setCol52("\uD83C\uDF4D");
        break;
      case 7:
        setCol52("\uD83C\uDF31");
        break;
      case 8:
        setCol52("\uD83C\uDF53");
        break;
      case 9:
        setCol52("\uD83C\uDF53");

        break;
      default:
        setCol52("\uD83D\uDCB0");
    }
    switch (nu15) {
      case 0:
        setCol53("\ud83c\udf47");
        break;
      case 1:
        setCol53("\uD83C\uDF49");
        break;
      case 2:
        setCol53("\uD83C\uDF51");

        break;
      case 3:
        setCol53("\uD83C\uDF4B");
        break;
      case 4:
        setCol53("\uD83C\uDF4F");
        break;
      case 5:
        setCol53("\uD83C\uDF52");
        break;
      case 6:
        setCol53("\uD83C\uDF4D");
        break;
      case 7:
        setCol53("\uD83C\uDF31");
        break;
      case 8:
        setCol53("\uD83C\uDF53");
        break;
      case 9:
        setCol53("\uD83C\uDF53");

        break;
      default:
        setCol53("\uD83D\uDCB0");
    }
  }
  useEffect(() => {
    if (
      col11 === col21 &&
      col21 === col31 &&
      col31 === col41 &&
      col41 === col51
    ) {
      setRow1(true);
    } else {
      setRow1(false);
    }
  }, [col11, col21, col31, col41, col51]);
  useEffect(() => {
    if (
      col12 === col22 &&
      col22 === col32 &&
      col32 === col42 &&
      col42 === col52
    ) {
      setRow2(true);
    } else {
      setRow2(false);
    }
  }, [col12, col22, col32, col42, col52]);
  useEffect(() => {
    if (
      col13 === col23 &&
      col23 === col33 &&
      col33 === col43 &&
      col43 === col53
    ) {
      setRow3(true);
    } else {
      setRow3(false);
    }
  }, [col13, col23, col33, col43, col53]);
  useEffect(() => {
    if (row1 === true) {
      alertify.success("row1! +10000", 1);
    } else if (row2 === true) {
      alertify.success("row2! +10000", 1);
    } else if (row3 === true) {
      alertify.success("row3! +10000", 1);
    } else if (row1 === true && row2 === true && row3 === true) {
      alertify.success("mucize! +10000", 1);
    }
  }, [row1, row2, row3]);
  return (
    <div>
      <div id="score">
        <img src={point} alt="" width="120px" height="80px" />
        <h1>Your Score: {score}</h1>
      </div>
      <div className="slot-table-container">
        {/* <div className="slot-title">
          <h1>SLOT MACHINE</h1>
        </div> */}
        <div className="slot-table">
          <div className="col">
            <p className="number">{col11}</p>
            <p className="number">{col12}</p>
            <p className="number">{col13}</p>
          </div>
          <div className="col">
            <p className="number">{col21}</p>
            <p className="number">{col22}</p>
            <p className="number">{col23}</p>
          </div>
          <div className="col">
            <p className="number">{col31}</p>
            <p className="number">{col32}</p>
            <p className="number">{col33}</p>
          </div>
          <div className="col">
            <p className="number">{col41}</p>
            <p className="number">{col42}</p>
            <p className="number">{col43}</p>
          </div>
          <div className="col">
            <p className="number">{col51}</p>
            <p className="number">{col52}</p>
            <p className="number">{col53}</p>
          </div>
          <div className="slot-buttons">
            <button
              className="spin-button"
              onClick={() => {
                spin();
                gameStart();
              }}
            >
              <img
                onClick={handleDondur}
                src={stick}
                alt="SLOT SPIN"
                className={spinstick1 ? "spinned" : "slot-bar"}
                id="slot-bar"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slot;
