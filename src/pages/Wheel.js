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
import { useWheelContract } from "../hooks/useWheelContract";
import { setAccount, setAddress } from "../store/slicers/data";
import { showErrorNotification } from "../utils/alertifyUtils";
import { parseEther } from "ethers/lib/utils";
function Wheel() {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const address = useAddress();
  const wheelContract = useWheelContract();
  const [depositAmount, setDepositAmount] = useState();
  const [balance, setBalance] = useState(0);
  const [wallet, setWallet] = useState();
  const [lastWinner, setLastWinner] = useState();
  const [participants, setParticipants] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
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
  const getBalance = async () => {
    try {
      const txn = await wheelContract.totalDeposit();
      const balance = ethers.utils.formatUnits(txn, "ether");
      setBalance(balance);
    } catch (error) {
      console.error("Error while checking contract balance:", error);
    }
  };

  const getContractData = async () => {
    try {
      const participantCount = await wheelContract.participantsLength();
      console.log(participantCount);
      const participants = [];

      for (let i = 0; i < participantCount; i++) {
        const participant = await wheelContract.participants(i);
        participants.push(participant);
      }
      setParticipants(participants);
    } catch (error) {
      console.log(error);
    }
  };

  const setWinner = async () => {
    try {
      const txn = await wheelContract.getLastWinner();
      setLastWinner(txn);
    } catch (error) {}
  };

  const depositAndCalculate = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = ethers.utils.parseEther(depositAmount);

      const depositTxn = await wheelContract.deposit({ value: parsedAmount });
      await depositTxn.wait();

      const operator = new ethers.Wallet(
        process.env.REACT_APP_PRIVATE_KEY,
        provider
      );
      try {
        const calculateTxn = await wheelContract
          .connect(operator)
          .calculateWinningChance();
        console.log("Calculate Transaction:", calculateTxn);
        await calculateTxn.wait();
      } catch (error) {
        console.log("erroe with autosign" + error);
      }

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

  const playGame = async () => {
    if (!provider) return;
    try {
      const txn1 = await wheelContract.drawWinner();
      await txn1.wait();
      setWinner();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDepositSliderChange = (event) => {
    setDepositAmount(event.target.value);
  };
  console.log(participants);
  return (
    <div className="profile-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <ModalComponent handleClose={handleClose} />
      </Modal>
      <>
        {!address && (
          <button
            className={`button ${address ? "connected" : "inconnect"}`}
            onClick={connect}
          ></button>
        )}
        <div className="deposit-container swap__item">
          <input
            type="text"
            value={depositAmount}
            placeholder="Deposit"
            onChange={handleDepositSliderChange}
          />

          <button
            className="swap-btn deposit-btn"
            onClick={depositAndCalculate}
          >
            Deposit
          </button>
          <button className="swap-btn deposit-btn" onClick={playGame}>
            playGame
          </button>
        </div>
      </>
    </div>
  );
}

export default Wheel;
