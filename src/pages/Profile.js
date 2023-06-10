import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
import "../style/profile.scss";
//web3
import { ethers } from "ethers";
import { TRADE_ADDRESS } from "../constants/addresses";
import { TRADE_ABI } from "../constants/abi";
//hooks
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useAddress } from "../hooks/useAddress";
import { useCorrectCoinflip } from "../hooks/user/useCorrectCoinFlip";
import { useCorrectRoulette } from "../hooks/user/useCorrectRoulette";
import { useCorrectDice } from "../hooks/user/useCorrectDice";
import { useCorrectJackpot } from "../hooks/user/useCorrectJackpot";
import { useCorrectRps } from "../hooks/user/useCorrectRps.js";
import { useCorrectSlot } from "../hooks/user/useCorrectSlot";
import { useDisplayName } from "../hooks/user/useDisplayName";
//redux
import { setDonateContract } from "../store/slicers/contract";
import { batch, useDispatch } from "react-redux";
import {
  setAccount,
  setAddress,
  setProvider,
  setSigner,
} from "../store/slicers/data";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Trade from "../comps/Trade";
import { showErrorNotification } from "../utils/alertifyUtils";
const Profile = ({ userId }) => {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const address = useAddress();
  const name = useDisplayName();
  const correctCoinflip = useCorrectCoinflip();
  const correctDice = useCorrectDice();
  const correctJackpot = useCorrectJackpot();
  const correctRoulette = useCorrectRoulette();
  const correctRps = useCorrectRps();
  const correctSlot = useCorrectSlot();
  const [wallet, setWallet] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isTradeOpen, setIsTradeOpen] = useState(true);
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
      <div className="profile section">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleClose}
          style={customStyles}
        >
          <ModalComponent handleClose={handleClose} />
        </Modal>
        <button className="toggle" onClick={() => setIsStatsOpen(!isStatsOpen)}>
          {isStatsOpen ? (
            <div className="toggle__item">
              <SlArrowUp />
              <p>Hide Stats</p>
            </div>
          ) : (
            <div className="toggle__item">
              <SlArrowDown />
              <p>Show Game Stats</p>
            </div>
          )}
        </button>
        {isStatsOpen && (
          <ul className="profile-list">
            <li className="profile-list-item">
              <h2>{name}</h2>
            </li>
            <li className="profile-list-item">
              <p>CoinFlip Wins: {correctCoinflip || 0}</p>
            </li>
            <li className="profile-list-item">
              <p>ToDice Wins: {correctDice || 0}</p>
            </li>
            <li className="profile-list-item">
              <p>Rock Paper Scissors Wins: {correctRps || 0}</p>
            </li>
            <li className="profile-list-item">
              <p>Roulette Wins: {correctRoulette || 0}</p>
            </li>
            <li className="profile-list-item">
              <p>Slot Wins: {correctSlot || 0}</p>
            </li>
            <li className="profile-list-item">
              <p>Jackpots: {correctJackpot || 0}</p>
            </li>
          </ul>
        )}
      </div>

      {isTradeOpen && (
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
      )}
    </div>
  );
};

export default Profile;
