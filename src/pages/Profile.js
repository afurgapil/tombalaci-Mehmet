import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "../style/profile.scss";
//web3
import { ethers } from "ethers";
import { TRADE_ADDRESS } from "../constants/addresses";
import { TRADE_ABI } from "../constants/abi";
//hooks
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useAddress } from "../hooks/useAddress";
import { useContract } from "../hooks/useContract";
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
const Profile = ({ userId }) => {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const address = useAddress();
  const [wallet, setWallet] = useState();
  const [userStats, setUserStats] = useState({});
  const [name, setName] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
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
              setUserStats(userData);
              const displayName = userData.displayName;
              setName(displayName);
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
    <div className="profile">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <ModalComponent handleClose={handleClose} />
      </Modal>
      <ul className="profile-list">
        <li className="profile-list-item">
          <h2>{name}</h2>
        </li>
        <li className="profile-list-item">
          <p>CoinFlip Wins: {userStats.correctCoinflip || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>ToDice Wins: {userStats.correctDice || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Rock Paper Scissors Wins: {userStats.correctRps || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Roulette Wins: {userStats.correctRoulette || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Slot Wins: {userStats.correctSlot || 0}</p>
        </li>
        <li className="profile-list-item">
          <p>Jackpots: {userStats.correctJackpot || 0}</p>
        </li>
        <button
          className={`button ${address ? "connected" : "inconnect"}`}
          onClick={connect}
        >
          {address ? (
            <div className="wallet">
              <p>Connected</p>
              <p>{wallet}</p>
            </div>
          ) : (
            "Connect"
          )}
        </button>
        {address && <Trade></Trade>}
      </ul>
    </div>
  );
};

export default Profile;
