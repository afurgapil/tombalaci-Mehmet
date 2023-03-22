import React, { Component } from "react";
import tree from "../../assets/5.png";
import "./notfound.scss";
function NotFound() {
  return (
    <div>
      <div id="notfound">
        <h1>SOON</h1>
        <img src={tree} alt="tree"></img>
      </div>
    </div>
  );
}
export default NotFound;
