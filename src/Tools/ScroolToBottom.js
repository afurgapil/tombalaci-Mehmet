import { FaArrowCircleDown } from "react-icons/fa";
import "animate.css/animate.min.css";

const ScroolToBottom = () => {
  return (
    <div
      className="fixed bottom-10 right-10 text-3xl cursor-pointer"
      onClick={() => window.scrollTo(0, document.body.scrollHeight)}
    >
      <FaArrowCircleDown />
    </div>
  );
};

export default ScroolToBottom;
