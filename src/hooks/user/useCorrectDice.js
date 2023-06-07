import { useSelector } from "react-redux";

export const useCorrectDice = () => {
  const correctDice = useSelector((state) => state.user.correctDice);
  return correctDice;
};
