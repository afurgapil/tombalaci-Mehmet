import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="border-none bg-transparent cursor-pointer text-2xl text-black-600 hover:text-gray-900 underline absolute top-28 md:top-44 left-8 md:left-10"
      onClick={handleGoBack}
    >
      <FaArrowLeft />
    </button>
  );
}

export default GoBack;
