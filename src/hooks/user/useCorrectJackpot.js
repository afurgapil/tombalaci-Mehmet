import { useSelector } from "react-redux";

export const useCorrectJackpot = () => {
  const correctJackpot = useSelector((state) => state.user.correctJackpot);
  return correctJackpot;
};
