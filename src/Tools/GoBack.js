import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./goback.scss";
import "animate.css/animate.min.css";

function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="go-back animate__animated animate__bounce animate__infinite animate__slower"
      onClick={handleGoBack}
    >
      <FaArrowLeft />
    </button>
  );
}

export default GoBack;
