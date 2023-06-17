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
        showErrorNotification("cekilise katilirken bir hata olustu");
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
  const schedulePlayGame = () => {
    console.log("start");
    const scheduleTimes = [
      "12:00:00",
      "12:00:01",
      "12:00:02",
      "12:00:03",
      "12:00:04",
      "12:00:05",
      "12:00:06",
      "12:00:07",
      "12:00:08",
      "12:00:09",
      "12:00:10",
      "12:00:11",
      "12:00:12",
      "12:00:13",
      "12:00:14",
      "12:00:15",
      "12:00:16",
      "12:00:17",
      "12:00:18",
      "12:00:19",
      "12:00:20",
      "12:00:21",
      "12:00:22",
      "12:00:23",
      "12:00:24",
      "12:00:25",
      "12:00:26",
      "12:00:27",
      "12:00:28",
      "12:00:29",
      "12:00:30",
      "12:00:31",
      "12:00:32",
      "12:00:33",
      "12:00:34",
      "12:00:35",
      "12:00:36",
      "12:00:37",
      "12:00:38",
      "12:00:39",
      "12:00:40",
      "12:00:41",
      "12:00:42",
      "12:00:43",
      "12:00:44",
      "12:00:45",
      "12:00:46",
      "12:00:47",
      "12:00:48",
      "12:00:49",
      "12:00:50",
      "12:00:51",
      "12:00:52",
      "12:00:53",
      "12:00:54",
      "12:00:55",
      "12:00:56",
      "12:00:57",
      "12:00:58",
      "12:00:59",
      "20:00:00",
      "20:00:01",
      "20:00:02",
      "20:00:03",
      "20:00:04",
      "20:00:05",
      "20:00:06",
      "20:00:07",
      "20:00:08",
      "20:00:09",
      "20:00:10",
      "20:00:11",
      "20:00:12",
      "20:00:13",
      "20:00:14",
      "20:00:15",
      "20:00:16",
      "20:00:17",
      "20:00:18",
      "20:00:19",
      "20:00:20",
      "20:00:21",
      "20:00:22",
      "20:00:23",
      "20:00:24",
      "20:00:25",
      "20:00:26",
      "20:00:27",
      "20:00:28",
      "20:00:29",
      "20:00:30",
      "20:00:31",
      "20:00:32",
      "20:00:33",
      "20:00:34",
      "20:00:35",
      "20:00:36",
      "20:00:37",
      "20:00:38",
      "20:00:39",
      "20:00:40",
      "20:00:41",
      "20:00:42",
      "20:00:43",
      "20:00:44",
      "20:00:45",
      "20:00:46",
      "20:00:47",
      "20:00:48",
      "20:00:49",
      "20:00:50",
      "20:00:51",
      "20:00:52",
      "20:00:53",
      "20:00:54",
      "20:00:55",
      "20:00:56",
      "20:00:57",
      "20:00:58",
      "20:00:59",
      "04:00:00",
      "04:00:01",
      "04:00:02",
      "04:00:03",
      "04:00:04",
      "04:00:05",
      "04:00:06",
      "04:00:07",
      "04:00:08",
      "04:00:09",
      "04:00:10",
      "04:00:11",
      "04:00:12",
      "04:00:13",
      "04:00:14",
      "04:00:15",
      "04:00:16",
      "04:00:17",
      "04:00:18",
      "04:00:19",
      "04:00:20",
      "04:00:21",
      "04:00:22",
      "04:00:23",
      "04:00:24",
      "04:00:25",
      "04:00:26",
      "04:00:27",
      "04:00:28",
      "04:00:29",
      "04:00:30",
      "04:00:31",
      "04:00:32",
      "04:00:33",
      "04:00:34",
      "04:00:35",
      "04:00:36",
      "04:00:37",
      "04:00:38",
      "04:00:39",
      "04:00:40",
      "04:00:41",
      "04:00:42",
      "04:00:43",
      "04:00:44",
      "04:00:45",
      "04:00:46",
      "04:00:47",
      "04:00:48",
      "04:00:49",
      "04:00:50",
      "04:00:51",
      "04:00:52",
      "04:00:53",
      "04:00:54",
      "04:00:55",
      "04:00:56",
      "04:00:57",
      "04:00:58",
      "04:00:59",
    ];

    const schedule = setInterval(() => {
      const currentDate = new Date().toLocaleString("tr-TR", {
        timeZone: "Europe/Istanbul",
      });
      const currentTime = currentDate.split(", ")[1];
      if (scheduleTimes.includes(currentTime)) {
        playGame();
      }
    }, 60000);

    const stopSchedule = () => {
      clearInterval(schedule);
      console.log("stopped");
    };
    return stopSchedule;
  };
  const stopSchedule = schedulePlayGame();
  return (
    <div>
      <div>
        <button className="swap-btn deposit-btn" onClick={playGame}>
          playGame
        </button>
      </div>
      <div>
        <button className="swap-btn deposit-btn" onClick={withdraw}>
          withdraw
        </button>
        <>Locked Amount:{amount}</>
      </div>
      <div>
        <button className="swap-btn deposit-btn" onClick={schedulePlayGame}>
          zortlat
        </button>
        <button className="swap-btn deposit-btn" onClick={stopSchedule}>
          zortu durdur
        </button>
      </div>
    </div>
  );
}

export default Admin;
