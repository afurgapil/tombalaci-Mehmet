import React, { useState, useEffect, useContext } from "react";
import { useAddress } from "../hooks/useAddress";
import { WalletContext } from "../context/WalletContext";
import { useNetwork } from "../hooks/useNetwork";
const NetworkSelection = () => {
  const { handleNetworkChange, initializeWallet } = useContext(WalletContext);
  const selectedNetwork = useNetwork();
  const [loading, setLoading] = useState(true);
  const wallet = useAddress();
  const [acc, setAcc] = useState("");
  useEffect(() => {
    initializeWallet();
  }, [initializeWallet]);
  useEffect(() => {
    if (wallet) {
      const accSubstring = wallet.substring(0, 9);
      setAcc(accSubstring);
      setLoading(false);
    }
  }, [wallet]);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="flex flex-row justify-center items-center absolute top-32 right-0">
      <div className=" flex justify-center items-center w-24 h-12 bg-docAside rounded-xl">
        <select
          value={selectedNetwork}
          onChange={handleNetworkChange}
          className="w-full h-full bg-transparent border border-white rounded-md"
        >
          <option value="polygon">Polygon</option>
          {/* <option value="bsc">BSC</option> */}
        </select>
      </div>
      <div className=" flex justify-center items-center w-24 h-12 bg-docAside rounded-xl">
        {acc}
      </div>
    </div>
  );
};

export default NetworkSelection;
