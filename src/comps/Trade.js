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

function Trade() {
  const tradeContract = useContract();
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(null);
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
  const deposit = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = parseEther(depositAmount);
      const newScore = score + depositAmount * 1000;
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
      const newScore = score - withdrawAmount * 1000;
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
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <ModalComponent handleClose={handleClose} />
      </Modal>
      <div>
        <p>1 MATIC= 1000 Point</p>
      </div>
      <div>
        <input
          type="text"
          value={depositAmount}
          placeholder="Deposit"
          onChange={(event) => setDepositAmount(event.target.value)}
        />
        <button className="change-address-btn" onClick={deposit}>
          Deposit
        </button>
      </div>
      <div>
        <input
          type="text"
          value={withdrawAmount}
          placeholder="Withdraw"
          onChange={(event) => setWithdrawAmount(event.target.value)}
        />
        <button className="change-address-btn" onClick={withdraw}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default Trade;
