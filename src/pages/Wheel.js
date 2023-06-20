import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ethers } from "ethers";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
//hooks
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useDispatch } from "react-redux";
import { useWheelContract } from "../hooks/useWheelContract";
import { setAccount, setAddress } from "../store/slicers/data";
import { showErrorNotification } from "../utils/alertifyUtils";
import Network from "../comps/Network";
import { PieChart } from "react-minimal-pie-chart";
import "../style/wheel.scss";
import { Helmet } from "react-helmet";
import { AiFillCloseCircle } from "react-icons/ai";
function Wheel() {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const wheelContract = useWheelContract();
  const [depositAmount, setDepositAmount] = useState("");
  const [balance, setBalance] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isParticipants, setIsParticipants] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [participantColors, setParticipantColors] = useState({});
  const [lastWinner, setLastWinner] = useState("");
  const [lastPrize, setLastPrize] = useState();
  const [showWarning, setShowWarning] = useState(true);
  const handleClose = () => setIsOpen(false);
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
        showErrorNotification("Error while connecting the website");
      }
    };
    connect();
  }, []);
  useEffect(() => {
    getContractData();
    getBalance();
    getWinner();
  }, []);
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

    generateParticipantColors();
  }, [participants]);
  const getContractData = async () => {
    try {
      const participantCount = await wheelContract.getParticipantCount();
      const participants = [];
      for (let i = 0; i < participantCount; i++) {
        const participantAddress = await wheelContract.participantAddresses(i);
        const participant = await wheelContract.participants(
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
      console.log(error);
    }
  };
  const getWinner = async () => {
    try {
      const txn = await wheelContract.getWinner();
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
      const txn = await wheelContract.totalDeposit();
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
  const data = participants.map((participant) => ({
    title: participant.address.substring(0, 8),
    value: participant.number,
    amount: participant.amount,
    color: participantColors[participant.address],
  }));
  return (
    <div className="wheel-container">
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
      {showWarning && (
        <div className="warning">
          <AiFillCloseCircle
            className="close-btn"
            onClick={handleHideWarning}
          />
          <h2>Attention</h2>
          <p>
            This project is a test project running on the Mumbai network. Please
            exercise caution while safeguarding your assets.
          </p>
        </div>
      )}
      {isParticipants && participants.length > 0 ? (
        <div className="chart-wrapper">
          <div className="chart">
            <PieChart
              data={data}
              radius={50}
              animate
              label={({ dataEntry }) => `${dataEntry.title}`}
            />
          </div>
          <div className="participant-list">
            <h3>Total Deposit:{balance} Matic</h3>
            {data.map((data) => (
              <div key={data.title} className="data">
                <div
                  className="color-box"
                  style={{ backgroundColor: data.color }}
                />
                <div className="title">{data.title}...</div>
                <div className="amount">{data.amount} MATIC</div>
                <div className="value">%{data.value}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="check">Checking Participants </div>
      )}

      <div className="deposit-container swap__item">
        <div className="input-wrapper">
          <input
            type="text"
            value={depositAmount}
            placeholder="Deposit"
            onChange={handleDepositSliderChange}
          />
        </div>
        <button
          className="button swap-btn deposit-btn"
          onClick={depositAndCalculate}
        >
          Deposit
        </button>
      </div>
      {lastWinner && (
        <div className="last">
          <h5 class="last-winner">Last Winner: {lastWinner}</h5>
          <h5 class="last-prize">Last Prize: {lastPrize} MATIC</h5>
        </div>
      )}
    </div>
  );
}

export default Wheel;
