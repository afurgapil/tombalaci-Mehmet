import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

function ModalComponent({ handleClose }) {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="w-full flex justify-start items-center text-4xl my-2">
          Pending Transaction
        </h2>
        <AiFillCloseSquare
          className="close-icon"
          onClick={handleClose}
          color="red"
          fontSize="30px"
        >
          Close
        </AiFillCloseSquare>
      </div>

      <p className="w-full flex justify-end items-center text-white text-xl">
        You can continue with the page after your transaction is completed.
      </p>
    </div>
  );
}

export default ModalComponent;
