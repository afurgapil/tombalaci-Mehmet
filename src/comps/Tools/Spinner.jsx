import React from "react";
import "./Spinner.scss";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
function Spinner() {
  return (
    <div className="spinner-out">
      <div className="spinner-dots">
        <div className="spinner-in">
          <StarPurple500Icon className="star"></StarPurple500Icon>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
