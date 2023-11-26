import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
export const useNetwork = () => {
  const { network } = useContext(WalletContext);
  return network;
};
