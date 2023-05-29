import React from "react";
import tree from "../assets/5.png";
import "../style/notfound.scss";
function NotFound() {
  return (
    <div>
      <div id="notfound">
        <img src={tree} alt="tree"></img>
        <div className="context">
          <h1>404</h1>
          <p>Sayfa Bulunamadı.</p>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
