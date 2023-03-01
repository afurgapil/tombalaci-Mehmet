import React from "react";
import "./footer.scss";

const Footer = () => {
  const githubUrl = "https://github.com/afurgapil";
  const myName = "Gapil";

  return (
    <footer className="footer">
      <div className="container">
        <span className="text">
          Just a Fun Project From{" "}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {myName}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
