import { useSelector } from "react-redux";

export const useDisplayName = () => {
  const displayName = useSelector((state) => state.user.displayName);
  return displayName;
};
