import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const githubUrl = "https://github.com/afurgapil";
  const myName = "Gapil";
  return (
    <footer className="relative bottom-0 h-auto flex flex-row justify-between items-center p-4 text-center bg-darkBlue text-white">
      <div className="flex-1">
        <span className="text-antiqueWhite">
          Just a Fun Project From
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit relative transition-all duration-300 ease-linear font-[Teko]  text-3xl hover:rounded-3xl px-2 py4"
          >
            {myName}
          </a>
        </span>
      </div>
      <div className="text-white flex flex-0 justify-center items-center">
        <a href="/docs" className="mx-2">
          Docs
        </a>
        <Link to="dashboard">Dash</Link>
      </div>
    </footer>
  );
};

export default Footer;
