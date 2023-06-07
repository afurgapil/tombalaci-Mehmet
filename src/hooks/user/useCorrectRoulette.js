import { useSelector } from "react-redux";

export const useCorrectRoulette = () => {
  const correctRoulette = useSelector((state) => state.user.correctRoulette);
  return correctRoulette;
};
