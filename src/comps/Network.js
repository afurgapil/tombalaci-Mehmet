import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../style/network.scss";
import { setNetwork } from "../store/slicers/data";
import { useAddress } from "../hooks/useAddress";

const NetworkSelection = () => {
  const [selectedNetwork, setSelectedNetwork] = useState("polygon");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const wallet = useAddress();
  const [acc, setAcc] = useState("");

  const handleNetworkChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setSelectedNetwork(selectedValue);
    dispatch(setNetwork(selectedValue));
  };

  useEffect(() => {
    if (wallet) {
      const accSubstring = wallet.substring(0, 9);
      setAcc(accSubstring);
      setLoading(false);
    }
  }, [wallet]);

  if (loading) {
    return <div>...</div>;
  }

  return (
    <div className="network">
      <div className="network-selection network__item">
        <select
          value={selectedNetwork}
          onChange={handleNetworkChange}
          className="network-selection__dropdown"
        >
          <option value="polygon">Polygon</option>
          <option value="bsc">BSC</option>
        </select>
      </div>
      <div className="acc network__item">{acc}</div>
    </div>
  );
};

export default NetworkSelection;
