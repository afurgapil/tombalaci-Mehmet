import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import DisplayNameUtils from "../comps/DisplayNameUtils";
import SignOutButton from "../comps/SignOutButton";
//mui
import MenuIcon from "@mui/icons-material/Menu";
import Score from "../comps/Score";
import { useUser } from "../hooks/useUser";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useUser();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function OnLoginHeader() {
    return (
      <header className="flex flex-col md:flex-row justify-between items-center min-h-20 bg-darkBlue px-1 py-5 z-10">
        <div className="flex flex-row justify-between items-center w-full  md:w-auto">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-auto md:h-auto"
          />
          <div className="md:hidden ">
            <MenuIcon
              onClick={toggleMenu}
              style={{ color: "white" }}
            ></MenuIcon>
          </div>
        </div>
        <div className={`${isMenuOpen ? "flex " : "hidden"}  md:block w-full`}>
          <ul className="w-full flex flex-col md:flex-row md:justify-end items-center list-none ">
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/" exact="true" className="flex justify-center">
                Home
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink
                to="/wheel"
                className="flex justify-center text-yellow-400"
              >
                Wheel!
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/classics" className="flex justify-center">
                Classics
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/news" className="p-1">
                News
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/leaderboard" className="p-1">
                LeaderBoard
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center  md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/contact" className="p-1">
                Contact
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center  md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <Score></Score>
            </li>
            <div className="flex flex-row items-center justify-center">
              <Link>
                <DisplayNameUtils />
              </Link>
              <SignOutButton />
            </div>
          </ul>
        </div>
      </header>
    );
  }
  function OnNotLoginHeader() {
    return (
      <header className="flex flex-col md:flex-row justify-between items-center min-h-20 bg-darkBlue px-1 py-5 z-10">
        <div className="flex flex-row justify-between items-center w-full  md:w-auto">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 md:w-auto md:h-auto"
          />
          <div className="md:hidden ">
            <MenuIcon
              onClick={toggleMenu}
              style={{ color: "white" }}
            ></MenuIcon>
          </div>
        </div>
        <div className={`${isMenuOpen ? "flex " : "hidden"}  md:block w-full`}>
          <ul className="w-full flex flex-col md:flex-row md:justify-end items-center list-none ">
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/" exact="true" className="p-1">
                Home
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <NavLink to="/contact" className="p-1">
                Contact
              </NavLink>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <Link to="/signin" className="p-1">
                SignIn
              </Link>
            </li>
            <li className="w-full relative md:w-auto text-center md:border-none md:px-2 border-b border-white py-2 text-antiqueWhite no-underline transition-all duration-200 ease-linear">
              <Link to="/signup" className="p-1">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
  return (
    <div>
      {user && Object.keys(user).length > 0 ? (
        <OnLoginHeader></OnLoginHeader>
      ) : (
        <OnNotLoginHeader></OnNotLoginHeader>
      )}
    </div>
  );
}

export default Header;
