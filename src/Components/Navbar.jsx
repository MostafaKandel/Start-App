import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="container flex items-center justify-between py-10">
        <Link
          to="/"
          className="font-extrabold text-3xl text-white tracking-widest uppercase"
        >
          START REACT
        </Link>
        
        <button
          className="flex items-center px-3 py-2 md:hidden text-black font-bold bg-secondary rounded"
          type="button"
          onClick={toggleMenu}
        >
           <i className="fa-solid fa-bars fa-sm ml-2 bg-secondary"></i>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 w-full md:w-auto`}
          id="navbarSupportedContent"
        >
          <ul className="flex flex-col md:flex-row justify-center items-center">
            <li className="mx-4 md:mx-10 my-2 md:my-0">
              <Link
                to="/portfolio"
                className={`text-l uppercase font-bold px-4 py-2 rounded-lg hover:text-primary ${
                  activeLink === "portfolio" ? "bg-primary text-white" : "text-white"
                }`}
                onClick={() => handleLinkClick("portfolio")}
              >
                Portfolio
              </Link>
            </li>
            <li className="mx-4 md:mx-10 my-2 md:my-0">
              <Link
                to="/about"
                className={`text-l uppercase font-bold px-4 py-2 rounded-lg hover:text-primary ${
                  activeLink === "about" ? "bg-primary text-white" : "text-white"
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </Link>
            </li>
            <li className="mx-4 md:mx-10 my-2 md:my-0">
              <Link
                to="/contact"
                className={`text-l uppercase font-bold px-4 py-2 rounded-lg hover:text-primary ${
                  activeLink === "contact" ? "bg-primary text-white" : "text-white"
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          
           
        </div>
      </div>
    </nav>
    
  );
}

