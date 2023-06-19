import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
import "../style/swap.scss";
//hooks
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useAddress } from "../hooks/useAddress";
//redux
import { useDispatch } from "react-redux";
import { setAccount, setAddress } from "../store/slicers/data";
import Trade from "../comps/Trade";
import { showErrorNotification } from "../utils/alertifyUtils";
import { Helmet } from "react-helmet";
const Swap = () => {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const address = useAddress();
  const [wallet, setWallet] = useState();
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

  return (
    <div className="profile-container">
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
            className={`button ${address ? "connected" : "inconnect"}`}
            onClick={connect}
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
