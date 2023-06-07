import { useSelector } from "react-redux";

export const useScore = () => {
  const score = useSelector((state) => state.user.score);
  return score;
};
