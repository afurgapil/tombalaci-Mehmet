import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./goback.scss";
import "animate.css/animate.min.css";

function GoBack() {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <button
      className="go-back animate__animated animate__bounce animate__infinite animate__slower"
      onClick={handleClick}
    >
      <FaArrowLeft />
    </button>
  );
}

export default GoBack;
