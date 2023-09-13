import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

function ModalComponent({ handleClose }) {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-full flex justify-start items-center">
        <AiFillCloseSquare className="close-icon" onClick={handleClose}>
          Close
        </AiFillCloseSquare>
      </div>
      <h2 className="w-full flex justify-start items-center">
        Pending Transaction
      </h2>
      <p className="w-full flex justify-end items-center text-red-600 text-3xl">
        You can continue with the page after your transaction is completed.
      </p>
    </div>
  );
}

export default ModalComponent;
