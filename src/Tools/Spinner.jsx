import React from "react";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
function Spinner() {
  return (
    <div className="border-2 border-white bg-black p-1">
      <div className="border-8 border-dotted border-white p-1 animate-dot-color duration-10000 infinite">
        <div className="p-4 text-white text-center bg-black border-2 border-white animate-text-color duration-10000 infinite">
          <StarPurple500Icon className="text-5xl"></StarPurple500Icon>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
