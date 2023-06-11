import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
import "../style/swap.scss";
//web3
import { ethers } from "ethers";
import { TRADE_ADDRESS } from "../constants/addresses";
import { TRADE_ABI } from "../constants/abi";
//hooks
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useAddress } from "../hooks/useAddress";
//redux
import { setDonateContract } from "../store/slicers/contract";
import { batch, useDispatch } from "react-redux";
import {
  setAccount,
  setAddress,
  setProvider,
  setSigner,
} from "../store/slicers/data";
import Trade from "../comps/Trade";
import { showErrorNotification } from "../utils/alertifyUtils";
const Swap = () => {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const address = useAddress();
  const [wallet, setWallet] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!window.ethereum) {
      alert("Metamask is not installed");
      return;
    }

    const initialize = async () => {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tradeContract = new ethers.Contract(
          TRADE_ADDRESS,
          TRADE_ABI,
          signer
        );

        batch(() => {
          dispatch(setProvider(provider));
          dispatch(setDonateContract(tradeContract));
          dispatch(setSigner(signer));
        });
      } catch (error) {
        console.error("Error initializing:", error);
      }
    };

    initialize();
  }, [dispatch]);
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
