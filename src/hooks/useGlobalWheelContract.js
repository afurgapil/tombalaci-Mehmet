import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
export const useGlobalWheelContract = () => {
  const { globalWheelContract } = useContext(WalletContext);
  return globalWheelContract;
};
