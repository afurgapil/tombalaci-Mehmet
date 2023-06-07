import React, { useState } from "react";
import Modal from "react-modal";
//hooks
import { useContract } from "../hooks/useContract";
import { parseEther } from "ethers/lib/utils";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
function Trade() {
  const tradeContract = useContract();
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const deposit = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = parseEther(depositAmount);
      const txn = await tradeContract.deposit({ value: parsedAmount });
      await txn.wait();
      setIsOpen(false);
      setDepositAmount("");
    } catch (error) {
      //   showErrorNotification("An error occurred while deposit amount.");
      setIsOpen(false);
    }
  };
  const withdraw = async () => {
    try {
      setIsOpen(true);
      const parsedAmount = parseEther(withdrawAmount);
      const txn = await tradeContract.withdraw(parsedAmount);
      await txn.wait();
      setIsOpen(false);
      setWithdrawAmount("");
    } catch (error) {
      //   showErrorNotification("An error occurred while deposit amount.");
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
