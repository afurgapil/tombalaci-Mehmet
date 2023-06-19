import React from "react";
import "../style/footer.scss";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  const githubUrl = "https://github.com/afurgapil";
  const myName = "Gapil";
  return (
    <footer className="footer">
      <div className="container">
        <span className="text">
          Just a Fun Project From
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {myName}
          </a>
        </span>
      </div>
      <div className="todocs">
        <a href="/docs" className="todocs">
          Docs
          <BsArrowUpRight></BsArrowUpRight>
        </a>
        <Link to="dashboard">Dash</Link>
      </div>
    </footer>
  );
};

export default Footer;
