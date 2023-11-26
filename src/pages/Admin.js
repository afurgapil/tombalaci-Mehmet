/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { useProvider } from "../hooks/useProvider";
import { useWheelContract } from "../hooks/useWheelContract";
import { Helmet } from "react-helmet";
import { WalletContext } from "../context/WalletContext";

function Admin() {
  const { initializeWallet } = useContext(WalletContext);
  const provider = useProvider();
  const wheelContract = useWheelContract();
  const [amount, setAmount] = useState("");
  const [scheduleInterval, setScheduleInterval] = useState(null);
  useEffect(() => {
    initializeWallet();
  }, []);

  useEffect(() => {
    const getAmount = async () => {
      try {
        const txn = await wheelContract.getLockedAmount();
        const txn1 = txn._hex;
        const txn2 = parseInt(txn1, 16) / 10 ** 18;
        setAmount(txn2);
      } catch (error) {
        console.log(error);
      }
    };
    getAmount();
  }, []);

  const withdraw = async () => {
    if (!provider) return;
    try {
      const txn1 = await wheelContract.withdrawLockedAmount();
      console.log(txn1);
      await txn1.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const playGame = async () => {
    if (!provider) return;

    try {
      const operator = new ethers.Wallet(
        process.env.REACT_APP_PRIVATE_KEY,
        provider
      );

      const txn1 = await wheelContract.connect(operator).drawWinner();
      await txn1.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const startSchedule = () => {
    console.log("Scheduled game started");
    const scheduleTimes = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];
    const interval = setInterval(() => {
      const currentDate = new Date();
      console.log(currentDate);
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentTime = `${currentHour}:${
        currentMinute < 10 ? "0" + currentMinute : currentMinute
      }`;

      if (scheduleTimes.includes(currentTime)) {
        console.log("Scheduled game triggered");
        playGame();
        console.log("Scheduled game played");
      }
    }, 60000);

    setScheduleInterval(interval);
  };

  const stopSchedule = () => {
    console.log("Scheduled game stopped");
    clearInterval(scheduleInterval);
    setScheduleInterval(null);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-start items-center">
      <Helmet>
        <title>Admin | Tombalaci Mehmet</title>
        <meta
          name="description"
          content="admin panel to execute contract transactions "
        />
      </Helmet>
      <div className="border-b-4 border-black w-full p-4 my-2 flex flex-col justify-center items-center">
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white"
          onClick={playGame}
        >
          Play Game
        </button>
      </div>
      <div className="border-b-4 border-black w-full p-4 my-2 flex flex-col justify-center items-center">
        <button
          className="bg-yellow-500 px-4 py-2 rounded text-white"
          onClick={withdraw}
        >
          Withdraw
        </button>
        <>Locked Amount: {amount}</>
      </div>
      <div className="border-b-4 border-black w-full p-4 my-2 flex flex-col justify-center items-center">
        <button
          className="bg-red-500 px-4 py-2 rounded text-white"
          onClick={startSchedule}
          disabled={scheduleInterval !== null}
        >
          Start Scheduled Game
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded text-white"
          onClick={stopSchedule}
          disabled={scheduleInterval === null}
        >
          Stop Scheduled Game
        </button>
      </div>
    </div>
  );
}

export default Admin;
