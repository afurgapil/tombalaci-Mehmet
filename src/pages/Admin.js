import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useDispatch } from "react-redux";
import { useWheelContract } from "../hooks/useWheelContract";
import { setAccount, setAddress } from "../store/slicers/data";
import { setLastWinner } from "../store/slicers/user";
import { showErrorNotification } from "../utils/alertifyUtils";

function Admin() {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const wheelContract = useWheelContract();
  const [amount, setAmount] = useState("");
  const [scheduleInterval, setScheduleInterval] = useState(null);

  useEffect(() => {
    const connect = async () => {
      if (!window.ethereum) {
        alert("Metamask is not installed");
        return;
      }
      if (!provider) return;
      try {
        const accounts = await provider.send("eth_requestAccounts", []);
        dispatch(setAccount(accounts[0]));
        const address = await signer.getAddress();
        dispatch(setAddress(address));
      } catch (error) {
        console.error("Error connecting:", error);
        showErrorNotification("Çekilişe katılırken bir hata oluştu");
      }
    };
    connect();
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
      await txn1.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const setWinner = async () => {
    try {
      const txn = await wheelContract.getLastWinner();
      dispatch(setLastWinner(txn));
    } catch (error) {}
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
      setWinner();
    } catch (error) {
      console.log(error);
    }
  };

  const startSchedule = () => {
    console.log("Scheduled game started");
    const scheduleTimes = ["04:00", "12:00", "20:00", "13:15"];
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentTime = `${currentHour}:${
        currentMinute < 10 ? "0" + currentMinute : currentMinute
      }`;

      if (scheduleTimes.includes(currentTime)) {
        console.log("Scheduled game triggered");
        playGame();
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
    <div>
      <div>
        <button className="swap-btn deposit-btn" onClick={playGame}>
          Play Game
        </button>
      </div>
      <div>
        <button className="swap-btn deposit-btn" onClick={withdraw}>
          Withdraw
        </button>
        <>Locked Amount: {amount}</>
      </div>
      <div>
        <button
          className="swap-btn deposit-btn"
          onClick={startSchedule}
          disabled={scheduleInterval !== null}
        >
          Start Scheduled Game
        </button>
        <button
          className="swap-btn deposit-btn"
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
