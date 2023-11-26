import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useScore = () => {
  const { score } = useContext(UserContext);
  return score;
};
