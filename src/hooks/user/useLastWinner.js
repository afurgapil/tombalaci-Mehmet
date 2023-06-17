import { useSelector } from "react-redux";

export const useLastWinner = () => {
  const lastWinner = useSelector((state) => state.user.lastWinner);
  return lastWinner;
};
