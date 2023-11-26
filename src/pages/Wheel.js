/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import { ethers } from "ethers";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
//hooks
import { showErrorNotification } from "../utils/alertifyUtils";
import Network from "../comps/Network";
import ModalError from "../comps/ModalError";
import { PieChart } from "react-minimal-pie-chart";
import { Helmet } from "react-helmet";
import { AiFillCloseCircle } from "react-icons/ai";
import { WalletContext } from "../context/WalletContext";
import { useGlobalWheelContract } from "../hooks/useGlobalWheelContract";
import { useWheelContract } from "../hooks/useWheelContract";
function Wheel() {
  const { initializeWallet } = useContext(WalletContext);
  const globalWheelContract = useGlobalWheelContract();
  const wheelContract = useWheelContract();
  const [error, setError] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [balance, setBalance] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isParticipants, setIsParticipants] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [participantColors, setParticipantColors] = useState({});
  const [lastWinner, setLastWinner] = useState("");
  const [lastPrize, setLastPrize] = useState();
  const [showWarning, setShowWarning] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    initializeWallet();
  }, []);
  useEffect(() => {
    if (globalWheelContract) {
      getContractData();
      getBalance();
      getWinner();
    }
  }, [globalWheelContract]);

  useEffect(() => {
    const generateParticipantColors = () => {
      const colors = {};
      participants.forEach((participant) => {
        if (!participantColors[participant.address]) {
          colors[participant.address] =
            "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        } else {
          colors[participant.address] = participantColors[participant.address];
        }
      });
      setParticipantColors(colors);
    };
    if (participants.length > 0) {
      generateParticipantColors();
    }
  }, [participants]);
  const checkMetamask = async () => {
    if (!window.ethereum) {
      return false;
    }
    return true;
  };
  const getContractData = async () => {
    try {
      const participantCount = await globalWheelContract.getParticipantCount();
      const participants = [];
      for (let i = 0; i < participantCount; i++) {
        const participantAddress =
          await globalWheelContract.participantAddresses(i);
        const participant = await globalWheelContract.participants(
          participantAddress
        );
        const amount = participant.deposit._hex;
        const dec_amount = parseInt(amount, 16) / 10 ** 18;
        const number = participant.winningChance._hex;
        const dec_number = parseInt(number, 16);

        const participantData = {
          address: participantAddress,
          amount: dec_amount,
          number: dec_number,
        };

        participants.push(participantData);
      }

      setParticipants(participants);
      setIsParticipants(true);
    } catch (error) {
      console.log("EORRRR", error);
    }
  };
  const getWinner = async () => {
    try {
      const txn = await globalWheelContract.getWinner();
      setLastWinner(txn[0]);
      const hex = txn[1]._hex;
      const parsedHex = parseInt(hex) / 10 ** 18;
      setLastPrize(parsedHex);
    } catch (error) {
      console.error("Error while checking contract balance:", error);
    }
  };
  const getBalance = async () => {
    try {
      const txn = await globalWheelContract.totalDeposit();
      const balance = ethers.utils.formatUnits(txn, "ether");
      setBalance(balance);
    } catch (error) {
      console.error("Error while checking contract balance:", error);
    }
  };

  const depositAndCalculate = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = ethers.utils.parseEther(depositAmount);

      const depositTxn = await wheelContract.depositAndCalculateWinningChance({
        value: parsedAmount,
      });
      await depositTxn.wait();

      setIsOpen(false);
      setDepositAmount("");
      getBalance();
      getContractData();
    } catch (error) {
      showErrorNotification(
        "An error occurred while depositing and calculating."
      );
      setIsOpen(false);
    }
  };

  const handleDepositSliderChange = (event) => {
    setDepositAmount(event.target.value);
  };
  const handleHideWarning = () => {
    setShowWarning(false);
  };
  const handleHideAlert = () => {
    setShowAlert(false);
  };
  const handleCloseError = () => {
    setError(null);
  };
  const data = participants.map((participant) => ({
    title: participant.address.substring(0, 8),
    value: participant.number,
    amount: participant.amount,
    color: participantColors[participant.address],
  }));
  return (
    <div className="min-h-screen bg-bg flex flex-col justify-start items-center">
      <Helmet>
        <title>WOF | Tombalaci Mehmet</title>
        <meta name="description" content="a game built with solidity" />
      </Helmet>
      <Network />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <ModalComponent handleClose={handleClose} />
      </Modal>
      <div className="flex justify-center items-center">
        {error && <ModalError error={error} onClose={handleCloseError} />}
      </div>
      <div>
        {showWarning && (
          <div className="mt-8 relative bg-purple-100 border border-purple-200 rounded-md p-3">
            <AiFillCloseCircle
              className="text-red-500 text-3xl absolute right-1 top-1"
              onClick={handleHideWarning}
            />
            <h2 className="text-red-900 text-lg ">Attention</h2>
            <p className="text-red-900 text-lg ">
              This project is a test project running on the Mumbai network.
              Please exercise caution while safeguarding your assets.
            </p>
          </div>
        )}
        {isParticipants && participants.length > 0 ? (
          <div className="flex flex-row justify-between items-center my-12">
            <div className="w-4/5 text-[8px]">
              <PieChart
                data={data}
                radius={50}
                animate
                label={({ dataEntry }) => `${dataEntry.title}`}
              />
            </div>
            <div className="flex flex-col flex-wrap mx-4 w-auto">
              <h3 className="font-bold">Total Deposit: {balance} Matic</h3>
              {data.map((data) => (
                <div
                  key={data.title}
                  className="flex flex-row flex-nowrap items-center m-4 w-full"
                >
                  <div
                    className="w-5 h-5 m-1"
                    style={{ backgroundColor: data.color }}
                  />
                  <div className="">{data.title}...</div>
                  <div className="">{data.amount} MATIC</div>
                  <div className="font-bold">%{data.value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="font-bold text-6xl m-6 animate-pulse text-center ">
            No Participant For Now!
          </div>
        )}
        {wheelContract ? (
          <div className="flex flex-col justify-center items-center">
            <div className="relative mb-5">
              <input
                type="text"
                class="p-2 w-64 rounded-md shadow-md placeholder-gray-400"
                value={depositAmount}
                placeholder="Deposit"
                onChange={handleDepositSliderChange}
              />
            </div>
            <button
              className="px-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer shadow-lg transition-all duration-300 ease-linear  "
              onClick={depositAndCalculate}
            >
              Deposit
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-4 rounded  border-2 border-black py-4">
            <h2 className="text-5xl text-center w-full">
              You are not connected
            </h2>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-4/5"
              onClick={() => {
                if (checkMetamask() === true) {
                  initializeWallet();
                } else {
                  setError(true);
                }
              }}
            >
              CONNECT
            </button>
          </div>
        )}
        <div className="flex flex-col justify-center items-center swap__item">
          {showAlert && (
            <div className="flex flex-row justify-center items-center relative border border-solid border-black rounded  my-4">
              <p className="bg-red-900 w-full h-full px-8 py-4 text-white">
                The draw is done every hour
              </p>
              <AiFillCloseCircle
                className="close-btn absolute right-2 top-2"
                onClick={handleHideAlert}
                color="white"
              />
            </div>
          )}
        </div>
        {lastWinner && (
          <div className="flex flex-col justify-start items-start my-4">
            <h5 class="text-2xl font-extrabold mb-4 text-[#811c1c] border border-black shadow-xl p-1 rounded-xl w-full">
              Last Winner: {lastWinner}
            </h5>
            <h5 class="text-2xl font-extrabold mb-4 text-[#811c1c] border border-black shadow-xl p-1 rounded-xl w-full">
              Last Prize: {lastPrize} MATIC
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wheel;
