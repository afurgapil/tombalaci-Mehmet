import { useSelector } from "react-redux";

export const useCorrectSlot = () => {
  const correctSlot = useSelector((state) => state.user.correctSlot);
  return correctSlot;
};
