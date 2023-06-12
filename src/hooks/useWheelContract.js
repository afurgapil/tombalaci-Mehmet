import { useSelector } from "react-redux";

export const useWheelContract = () => {
  const wheel = useSelector((state) => state.contracts.wheel);
  return wheel;
};
