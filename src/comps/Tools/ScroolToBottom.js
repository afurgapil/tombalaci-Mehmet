import { FaArrowCircleDown } from "react-icons/fa";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const ScroolToBottom = () => {
  return (
    <div
      className="scroll-to-bottom-icon"
      onClick={() => window.scrollTo(0, document.body.scrollHeight)}
    >
      <FaArrowCircleDown />
    </div>
  );
};
