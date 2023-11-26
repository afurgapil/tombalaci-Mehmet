import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
export const useTradeContract = () => {
  const { tradeContract } = useContext(WalletContext);
  return tradeContract;
};
