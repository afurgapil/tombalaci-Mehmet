import React, { useState, useEffect } from "react";
import { useProvider } from "../hooks/useProvider";
import { useSigner } from "../hooks/useSigner";
import { useDispatch } from "react-redux";
import { useWheelContract } from "../hooks/useWheelContract";
import { setAccount, setAddress } from "../store/slicers/data";
import { showErrorNotification } from "../utils/alertifyUtils";
function Admin() {
  const dispatch = useDispatch();
  const provider = useProvider();
  const signer = useSigner();
  const wheelContract = useWheelContract();
  useEffect(() => {
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
        dispatch(setAddress(address));
      } catch (error) {
        console.error("Error connecting:", error);
        showErrorNotification("cekilise katilirken bir hata olustu");
      }
    };
    connect();
  }, []);
  const withdraw = async () => {
    if (!provider) return;
    try {
      const txn1 = await wheelContract.withdrawLockedAmount();
      await txn1.wait();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="swap-btn deposit-btn" onClick={withdraw}>
        withdraw
      </button>
    </div>
  );
}

export default Admin;
