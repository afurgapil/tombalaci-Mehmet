import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
export const useWheelContract = () => {
  const { wheelContract } = useContext(WalletContext);
  return wheelContract;
};
