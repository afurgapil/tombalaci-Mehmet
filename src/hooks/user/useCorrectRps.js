import { useSelector } from "react-redux";

export const useCorrectRps = () => {
  const correctRps = useSelector((state) => state.user.correctRps);
  return correctRps;
};
