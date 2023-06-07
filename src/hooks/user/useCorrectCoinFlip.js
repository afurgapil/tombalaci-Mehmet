import { useSelector } from "react-redux";

export const useCorrectCoinflip = () => {
  const correctCoinflip = useSelector((state) => state.user.correctCoinflip);
  return correctCoinflip;
};
