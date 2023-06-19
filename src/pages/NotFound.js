import React from "react";
import tree from "../assets/5.png";
import "../style/notfound.scss";
import { Helmet } from "react-helmet";
function NotFound() {
  return (
    <div>
      <Helmet>
        <title>404 | Tombalaci Mehmet</title>
        <meta name="description" content="404 page for the Tombalaci Mehmet" />
      </Helmet>
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
