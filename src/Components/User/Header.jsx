import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu09Icon, MultiplicationSignIcon } from "hugeicons-react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex justify-between items-center text-white py-5 md:py-7 px-5 sm:px-10 md:px-15 lg:px-20">
      <div className="logo font-extrabold text-3xl md:text-4xl lg:text-5xl">
        <Link to="/" className="select-none font-[airnt]">
          SD
        </Link>
      </div>

      {/* Toggle button for opening and closing the menu */}
      <div className="toggle block md:hidden" onClick={toggleMenu}>
        <Menu09Icon color="white" size={28} />
      </div>

      {/* Navigation menu */}
      <nav
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } fixed md:static top-0 z-50 bg-black md:bg-transparent w-full md:w-auto h-full md:h-auto transition-all duration-300 flex flex-col md:flex-row justify-center md:justify-end items-center space-y-8 md:space-y-0 md:space-x-8`}
      >
        <Link
          to="/about-me"
          onClick={() => setMenuOpen(false)}
          className="font-extrabold tracking-widest text-[0.9rem] hover:text-gray-300 duration-300 cursor-pointer"
        >
          ABOUT ME
        </Link>
        <Link
          to="/projects"
          onClick={() => setMenuOpen(false)}
          className="font-extrabold tracking-widest text-[0.9rem] hover:text-gray-300 duration-300 cursor-pointer"
        >
          PROJECTS
        </Link>
        <Link
          to="/contact-me"
          onClick={() => setMenuOpen(false)}
          className="font-extrabold tracking-widest text-[0.9rem] hover:text-gray-300 duration-300 cursor-pointer"
        >
          CONTACT ME
        </Link>

        {/* Close button inside the menu */}

        <span
          className="absolute top-0 right-[30px] md:hidden"
          onClick={toggleMenu}
        >
          <MultiplicationSignIcon color="white" size={28} />
        </span>
      </nav>
    </header>
  );
};
