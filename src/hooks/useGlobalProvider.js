import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
export const useGlobalProvider = () => {
  const { globalProvider } = useContext(WalletContext);
  return globalProvider;
};
