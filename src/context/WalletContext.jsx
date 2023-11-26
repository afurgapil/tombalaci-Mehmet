import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { WHEEL_ADDRESS, TRADE_ADDRESS } from "../constants/addresses";
import { WHEEL_ABI, TRADE_ABI } from "../constants/abi";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [globalProvider, setGlobalProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState("polygon");
  const [globalWheelContract, setGlobalWheelContract] = useState(null);
  const [wheelContract, setWheelContract] = useState(null);
  const [tradeContract, setTradeContract] = useState(null);
  useEffect(() => {
    const infuraProvider = new ethers.providers.InfuraProvider(
      "maticmum",
      process.env.REACT_APP_INFURA_API
    );

    setGlobalProvider(infuraProvider);
  }, []);

  useEffect(() => {
    if (globalProvider) {
      const globalWheelContract = new ethers.Contract(
        WHEEL_ADDRESS,
        WHEEL_ABI,
        globalProvider
      );
      setGlobalWheelContract(globalWheelContract);
    }
  }, [globalProvider]);

  const initializeWallet = async () => {
    if (!window.ethereum) {
      alert("Metamask is not installed");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await provider.send("eth_requestAccounts", []);
      const address = await signer.getAddress();
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

      setProvider(provider);
      setSigner(signer);
      setAccounts(accounts);
      setAddress(address);
      setWheelContract(wheelContract);
      setTradeContract(tradeContract);
    } catch (error) {
      console.error("Error initializing wallet:", error);
    }
  };
  const handleNetworkChange = (event) => {
    const newNetwork = event.target.value;
    setNetwork(newNetwork);
  };

  //   useEffect(() => {
  //     initializeWallet();
  //   }, []);

  return (
    <WalletContext.Provider
      value={{
        provider,
        globalProvider,
        signer,
        accounts,
        address,
        network,
        globalWheelContract,
        wheelContract,
        tradeContract,
        initializeWallet,
        handleNetworkChange,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
