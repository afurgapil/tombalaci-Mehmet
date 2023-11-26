import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
//hooks
import Trade from "../comps/Trade";
import { Helmet } from "react-helmet";
import { useAddress } from "../hooks/useAddress";
import { WalletContext } from "../context/WalletContext";
const Swap = () => {
  const { initializeWallet } = useContext(WalletContext);
  const address = useAddress();
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    initializeWallet();
  }, [initializeWallet]);

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-bg pt-10 w-full">
      <Helmet>
        <title>Swap | Tombalaci Mehmet</title>
        <meta name="description" content="swap point page " />
      </Helmet>
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
            className={`px-4 py-8 text-4xl bg-color-500 text-white rounded-lg cursor-pointer transition-all duration-300 ease-linear ${
              address ? "bg-green-500" : "bg-red-500"
            }`}
            onClick={initializeWallet}
          >
            {!address && <p>Connect Wallet</p>}
          </button>
        )}
        {address && <Trade></Trade>}
      </>
    </div>
  );
};

export default Swap;
