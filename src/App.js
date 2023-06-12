import React, { useEffect } from "react";
import PreApp from "./routes/PreApp";
//contracts
import { ethers } from "ethers";
import { WHEEL_ADDRESS } from "./constants/addresses";
import { WHEEL_ABI } from "./constants/abi";
import { TRADE_ADDRESS } from "./constants/addresses";
import { TRADE_ABI } from "./constants/abi";

import { setWheelContract, setDonateContract } from "./store/slicers/contract";
import { batch, useDispatch } from "react-redux";
import { setProvider, setSigner } from "./store/slicers/data";
function App() {
  const dispatch = useDispatch();
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
        const wheelContract = new ethers.Contract(
          WHEEL_ADDRESS,
          WHEEL_ABI,
          signer
        );
        const tradeContract = new ethers.Contract(
          TRADE_ADDRESS,
          TRADE_ABI,
          signer
        );
        batch(() => {
          dispatch(setProvider(provider));
          dispatch(setSigner(signer));
          dispatch(setWheelContract(wheelContract));
          dispatch(setDonateContract(tradeContract));
        });
      } catch (error) {
        console.error("Error initializing:", error);
      }
    };

    initialize();
  }, [dispatch]);
  return <PreApp></PreApp>;
}

export default App;
