import React, { useState } from "react";
import Modal from "react-modal";
//modal
import ModalComponent from "../comps/Modal";
import customStyles from "../style/customStyles";
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
    <div className="flex flex-col justify-start items-center min-h-screen bg-bg pt-10 w-full">
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
            className={`px-4 py-8 text-4xl bg-color-500 text-white rounded-lg cursor-pointer transition-all duration-300 ease-linear ${
              address ? "bg-green-500" : "bg-red-500"
            }`}
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
