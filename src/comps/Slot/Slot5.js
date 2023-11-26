/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import React from "react";
import getRandomInt from "../../utils/getRandomInt";

import GoBack from "../../Tools/GoBack";
//db
import { useUser } from "../../hooks/useUser";
import { UserContext } from "../../context/UserContext";
//mui
import Spinner from "../../Tools/Spinner";
import { Button } from "@mui/material";
import alertify from "alertifyjs";
import { Helmet } from "react-helmet";
function Slot() {
  const user = useUser();
  const { updateScoreContext } = useContext(UserContext);
  const { updateStatContext } = useContext(UserContext);
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
  const [row1, setRow1] = useState(false);
  const [row2, setRow2] = useState(false);
  const [row3, setRow3] = useState(false);
  const point = Number(process.env.REACT_APP_POINT);
  const game = process.env.REACT_APP_CORRECT_SLOT;
  const jackpot = process.env.REACT_APP_CORRECT_JACKPOT;

  function gameStart() {
    updateScoreContext(user.id, -point);
  }

  function spin() {
    setRow1(false);
    setRow2(false);
    setRow3(false);
    let nu1 = getRandomInt() % 5;
    let nu2 = getRandomInt() % 5;
    let nu3 = getRandomInt() % 5;
    let nu4 = getRandomInt() % 5;
    let nu5 = getRandomInt() % 5;
    let nu6 = getRandomInt() % 5;
    let nu7 = getRandomInt() % 5;
    let nu8 = getRandomInt() % 5;
    let nu9 = getRandomInt() % 5;
    let nu10 = getRandomInt() % 5;
    let nu11 = getRandomInt() % 5;
    let nu12 = getRandomInt() % 5;
    let nu13 = getRandomInt() % 5;
    let nu14 = getRandomInt() % 5;
    let nu15 = getRandomInt() % 5;
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
    if (row1 === true && row2 === true && row3 === true) {
      alertify.success("JACKPOT! +10000", 1);
      updateScoreContext(user.id, 1000 * point);
      updateStatContext(user.id, jackpot);
    } else if (row1 === true) {
      alertify.success("ROW1! +625", 1);
      updateScoreContext(user.id, 62.5 * point);
      updateStatContext(user.id, game);
    } else if (row2 === true) {
      alertify.success("ROW2! +625", 1);
      updateScoreContext(user.id, 62.5 * point);
      updateStatContext(user.id, game);
    } else if (row3 === true) {
      alertify.success("ROW3! +625", 1);
      updateScoreContext(user.id, 62.5 * point);
      updateStatContext(user.id, game);
    }
  }, [row1, row2, row3]);
  return (
    <div>
      <Helmet>
        <title> Cakir| Coin Flip</title>
        <meta name="description" content="medium slot game" />
      </Helmet>
      <div className="flex flex-row justify-center items-center min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-red-500">
        <div className="flex flex-row justify-center items-center p-4 shadow-md">
          <div className="flex flex-row items-center justify-center text-3xl text-white p-20 rounded-3xl">
            <div className="flex flex-col justify-center items-center bg-stone-800 border-4 border-yellow-500">
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col11}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col12}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col13}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-stone-800 border-4 border-yellow-500">
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col21}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col22}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col23}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-stone-800 border-4 border-yellow-500">
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col31}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col32}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col33}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-stone-800 border-4 border-yellow-500">
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col41}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col42}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col43}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-stone-800 border-4 border-yellow-500">
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col51}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col52}
              </p>
              <p className="flex justify-center items-center h-5 w-24 text-center my-4">
                {col53}
              </p>
            </div>
            <div className="slot-buttons"></div>
          </div>
          <Button
            onClick={() => {
              spin();
              gameStart();
            }}
          >
            <Spinner></Spinner>
          </Button>
        </div>
      </div>
      <GoBack></GoBack>
    </div>
  );
}
export default Slot;
