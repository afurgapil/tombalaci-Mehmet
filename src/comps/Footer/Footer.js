import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
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
        <Link to="/docs" className="todocs">
          Docs
          <BsArrowUpRight></BsArrowUpRight>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
