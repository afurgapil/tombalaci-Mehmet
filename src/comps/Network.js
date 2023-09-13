import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
