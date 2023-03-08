import { useState, useEffect } from "react";
import React from "react";
import "./slot.scss";
import stick from "../../assets/stick.png";

function Slot() {
  const [col11, setCol11] = useState(0);
  const [col12, setCol12] = useState(0);
  const [col13, setCol13] = useState(0);
  const [col21, setCol21] = useState(0);
  const [col22, setCol22] = useState(0);
  const [col23, setCol23] = useState(0);
  const [col31, setCol31] = useState(0);
  const [col32, setCol32] = useState(0);
  const [col33, setCol33] = useState(0);
  const [col41, setCol41] = useState(0);
  const [col42, setCol42] = useState(0);
  const [col43, setCol43] = useState(0);
  const [col51, setCol51] = useState(0);
  const [col52, setCol52] = useState(0);
  const [col53, setCol53] = useState(0);
  const [spinstick1, setSpinstick1] = useState(false);
  const [spinstick2, setSpinstick2] = useState(true);

  const handleDondur = () => {
    setSpinstick1(!spinstick1);
    setSpinstick2(!spinstick2);
  };
  function spin() {
    let numbergenerator1 = setInterval(() => {
      let nu1 = Math.floor(Math.random() * (9 + 1));
      let nu2 = Math.floor(Math.random() * (9 + 1));
      let nu3 = Math.floor(Math.random() * (9 + 1));
      setCol11(nu1);
      setCol12(nu2);
      setCol13(nu3);
    }, 100);
    let numbergenerator2 = setInterval(() => {
      let nu4 = Math.floor(Math.random() * (9 + 1));
      let nu5 = Math.floor(Math.random() * (9 + 1));
      let nu6 = Math.floor(Math.random() * (9 + 1));

      setCol21(nu4);
      setCol22(nu5);
      setCol23(nu6);
    }, 100);
    let numbergenerator3 = setInterval(() => {
      let nu7 = Math.floor(Math.random() * (9 + 1));
      let nu8 = Math.floor(Math.random() * (9 + 1));
      let nu9 = Math.floor(Math.random() * (9 + 1));

      setCol31(nu7);
      setCol32(nu8);
      setCol33(nu9);
    }, 100);
    let numbergenerator4 = setInterval(() => {
      let nu10 = Math.floor(Math.random() * (9 + 1));
      let nu11 = Math.floor(Math.random() * (9 + 1));
      let nu12 = Math.floor(Math.random() * (9 + 1));

      setCol41(nu10);
      setCol42(nu11);
      setCol43(nu12);
    }, 100);
    let numbergenerator5 = setInterval(() => {
      let nu13 = Math.floor(Math.random() * (9 + 1));
      let nu14 = Math.floor(Math.random() * (9 + 1));
      let nu15 = Math.floor(Math.random() * (9 + 1));

      setCol51(nu13);
      setCol52(nu14);
      setCol53(nu15);
    }, 100);

    setTimeout(() => {
      clearInterval(numbergenerator1);
      let no1 = Math.floor(Math.random() * (9 + 1));
      let no2 = Math.floor(Math.random() * (9 + 1));
      let no3 = Math.floor(Math.random() * (9 + 1));
      setCol11(no1);
      setCol12(no2);
      setCol13(no3);
    }, 4000);
    setTimeout(() => {
      clearInterval(numbergenerator2);

      let no1 = Math.floor(Math.random() * (9 + 1));
      let no2 = Math.floor(Math.random() * (9 + 1));
      let no3 = Math.floor(Math.random() * (9 + 1));
      setCol21(no1);
      setCol22(no2);
      setCol23(no3);
    }, 5000);
    setTimeout(() => {
      clearInterval(numbergenerator3);

      let no1 = Math.floor(Math.random() * (9 + 1));
      let no2 = Math.floor(Math.random() * (9 + 1));
      let no3 = Math.floor(Math.random() * (9 + 1));
      setCol31(no1);
      setCol32(no2);
      setCol33(no3);
    }, 6000);
    setTimeout(() => {
      clearInterval(numbergenerator4);

      let no1 = Math.floor(Math.random() * (9 + 1));
      let no2 = Math.floor(Math.random() * (9 + 1));
      let no3 = Math.floor(Math.random() * (9 + 1));
      setCol41(no1);
      setCol42(no2);
      setCol43(no3);
    }, 7000);
    setTimeout(() => {
      clearInterval(numbergenerator5);

      let no1 = Math.floor(Math.random() * (9 + 1));
      let no2 = Math.floor(Math.random() * (9 + 1));
      let no3 = Math.floor(Math.random() * (9 + 1));
      setCol51(no1);
      setCol52(no2);
      setCol53(no3);
    }, 8000);
  }
  function spin1() {
    let no1 = Math.floor(Math.random() * (9 + 1));
    let no2 = Math.floor(Math.random() * (9 + 1));
    let no3 = Math.floor(Math.random() * (9 + 1));
    setCol11(no1);
    setCol12(no2);
    setCol13(no3);
  }

  function spin2() {
    let no1 = Math.floor(Math.random() * (9 + 1));
    let no2 = Math.floor(Math.random() * (9 + 1));
    let no3 = Math.floor(Math.random() * (9 + 1));
    setCol21(no1);
    setCol22(no2);
    setCol23(no3);
  }
  function spin3() {
    let no1 = Math.floor(Math.random() * (9 + 1));
    let no2 = Math.floor(Math.random() * (9 + 1));
    let no3 = Math.floor(Math.random() * (9 + 1));
    setCol31(no1);
    setCol32(no2);
    setCol33(no3);
  }
  function spin4() {
    let no1 = Math.floor(Math.random() * (9 + 1));
    let no2 = Math.floor(Math.random() * (9 + 1));
    let no3 = Math.floor(Math.random() * (9 + 1));
    setCol41(no1);
    setCol42(no2);
    setCol43(no3);
  }
  function spin5() {
    let no1 = Math.floor(Math.random() * (9 + 1));
    let no2 = Math.floor(Math.random() * (9 + 1));
    let no3 = Math.floor(Math.random() * (9 + 1));
    setCol51(no1);
    setCol52(no2);
    setCol53(no3);
  }

  return (
    <div>
      <div className="slot-table">
        <div className="col">
          <p className="number">
            {col11}
            &#x1F347;
          </p>
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
              // spin1();
              // spin2();
              // spin3();
              // spin4();
              // spin5();
              spin();
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
  );
}
export default Slot;
