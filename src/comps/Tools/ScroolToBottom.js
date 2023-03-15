import { FaArrowCircleDown } from "react-icons/fa";
import "./ScroolToBottom.scss";
import "animate.css/animate.min.css"; // Animate.css kütüphanesi

const ScroolToBottom = () => {
  return (
    <div
      className="scroll-to-bottom-icon animate__animated animate__bounce animate__infinite animate__slower"
      onClick={() => window.scrollTo(0, document.body.scrollHeight)}
    >
      <FaArrowCircleDown />
    </div>
  );
};

export default ScroolToBottom;
