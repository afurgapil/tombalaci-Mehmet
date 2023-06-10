import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//hooks
import { useContract } from "../hooks/useContract";
import { parseEther } from "ethers/lib/utils";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
import { showErrorNotification } from "../utils/alertifyUtils";
import { ethers } from "ethers";
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import "../style/trade.scss";
function Trade() {
  const tradeContract = useContract();
  const [depositAmount, setDepositAmount] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(null);
  const [contractBalance, setContractBalance] = useState();
  const [balance, setBalance] = useState(0);
  const provider = useProvider();
  const signer = useSigner();
  const handleClose = () => setIsOpen(false);
  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      try {
        const userId = user.uid;
        const firestore = getFirestore();
        const userRef = doc(firestore, "users", userId);
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              setScore(userData.score);
            } else {
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  useEffect(() => {
    const checkUserBalance = async () => {
      if (!provider) return;
      try {
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.utils.formatEther(balance);
        const subBalance = formattedBalance.substring(0, 7);
        setBalance(subBalance);
      } catch (error) {
        console.error("Error connecting:", error);
        showErrorNotification("cekilise katilirken bir hata olustu");
      }
    };
    const checkContractBalance = async () => {
      if (!tradeContract) {
        return;
      }
      try {
        const txn = await tradeContract.getBalance();
        const balance = ethers.utils.formatUnits(txn, "ether");
        setContractBalance(balance);
      } catch (error) {
        console.error("Error while checking contract balance:", error);
      }
    };
    checkContractBalance();
    checkUserBalance();
  }, [tradeContract]);

  const handleDepositSliderChange = (event) => {
    setDepositAmount(event.target.value);
  };
  const handleWithdrawSliderChange = (event) => {
    setWithdrawAmount(event.target.value);
  };
  const deposit = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = parseEther(depositAmount);
      const newScore = score + depositAmount * 10000;
      const txn = await tradeContract.deposit({ value: parsedAmount });
      await txn.wait();
      setIsOpen(false);
      setDepositAmount("");
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
      setScore(newScore);
    } catch (error) {
      showErrorNotification("An error occurred while deposit amount.");
      setIsOpen(false);
    }
  };
  const withdraw = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = parseEther(withdrawAmount);
      const newScore = score - withdrawAmount * 10000;
      const txn = await tradeContract.withdraw(parsedAmount);
      await txn.wait();
      setIsOpen(false);
      setWithdrawAmount("");
      const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
      updateDoc(userDocRef, { score: newScore });
      setScore(newScore);
    } catch (error) {
      showErrorNotification("An error occurred while deposit amount.");
      setIsOpen(false);
    }
  };
  return (
    <div className="trade-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <ModalComponent handleClose={handleClose} />
      </Modal>
      <div className="info-section">
        <p>Your Balance:{balance} MATIC</p>
        <p>Pool Balance:{contractBalance} MATIC</p>
      </div>
      <div className="swap-container">
        <div className="deposit-container swap__item">
          <input
            className="slider"
            type="range"
            min={0}
            max={balance}
            defaultValue={balance / 2}
            step={balance / 100}
            value={depositAmount}
            onChange={handleDepositSliderChange}
          />
          <ul className="steps">
            <li onClick={() => setDepositAmount(0)}>%0</li>
            <li onClick={() => setDepositAmount(balance / 4)}>%25</li>
            <li onClick={() => setDepositAmount(balance / 2)}>%50</li>
            <li onClick={() => setDepositAmount((balance * 3) / 4)}>%75</li>
            <li onClick={() => setDepositAmount(balance)}>%100</li>
          </ul>
          <input
            type="text"
            value={depositAmount}
            placeholder="Deposit"
            onChange={handleDepositSliderChange}
          />
          <p>1 MATIC = 10000 Point</p>

          <button className="swap-btn deposit-btn" onClick={deposit}>
            Deposit
          </button>
        </div>
        <div className="withdraw-container swap__item">
          <input
            className="slider"
            type="range"
            min={0}
            max={contractBalance}
            step={contractBalance / 100}
            value={withdrawAmount}
            onChange={handleWithdrawSliderChange}
          />
          <ul className="steps">
            <li onClick={() => setWithdrawAmount(0)}>%0</li>
            <li onClick={() => setWithdrawAmount(contractBalance / 4)}>%25</li>
            <li onClick={() => setWithdrawAmount(contractBalance / 2)}>%50</li>
            <li onClick={() => setWithdrawAmount((contractBalance * 3) / 4)}>
              %75
            </li>
            <li onClick={() => setWithdrawAmount(contractBalance)}>%100</li>
          </ul>
          <input
            type="text"
            value={withdrawAmount}
            placeholder="Withdraw"
            onChange={(event) => setWithdrawAmount(event.target.value)}
          />
          <p>10000 Point = 1 MATIC</p>

          <button className="swap-btn withdraw-btn" onClick={withdraw}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trade;
