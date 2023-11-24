import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useStats = () => {
  const { stats } = useContext(UserContext);
  return stats;
};
