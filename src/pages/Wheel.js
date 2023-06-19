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
import { useAddress } from "../hooks/useAddress";
import { useLastWinner } from "../hooks/user/useLastWinner";
import { useWheelContract } from "../hooks/useWheelContract";
import { setAccount, setAddress } from "../store/slicers/data";
import { showErrorNotification } from "../utils/alertifyUtils";
import Network from "../comps/Network";
import { PieChart } from "react-minimal-pie-chart";
import "../style/wheel.scss";
import { Helmet } from "react-helmet";

function Wheel() {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const address = useAddress();
  const wheelContract = useWheelContract();
  const [depositAmount, setDepositAmount] = useState("");
  const [balance, setBalance] = useState(null);
  const [wallet, setWallet] = useState();
  const lastWinner = useLastWinner();
  const [participants, setParticipants] = useState([]);
  const [isParticipants, setIsParticipants] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [participantColors, setParticipantColors] = useState({});

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
        const address2 = address.substring(0, 7);
        dispatch(setAddress(address));
        setWallet(address2);
      } catch (error) {
        console.error("Error connecting:", error);
        showErrorNotification("cekilise katilirken bir hata olustu");
      }
    };
    connect();
  }, []);
  useEffect(() => {
    getContractData();
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
  const data = participants.map((participant) => ({
    title: participant.address.substring(0, 8),
    value: participant.number,
    amount: participant.amount,
    color: participantColors[participant.address],
  }));
  return (
    <div className="profile-container">
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
        <div className="check">Katılımcı bulunamadı</div>
      )}

      <div className="deposit-container swap__item">
        <input
          type="text"
          value={depositAmount}
          placeholder="Deposit"
          onChange={handleDepositSliderChange}
        />
        <button className="swap-btn deposit-btn" onClick={depositAndCalculate}>
          Deposit
        </button>
      </div>
    </div>
  );
}

export default Wheel;
