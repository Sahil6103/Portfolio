import React from "react";
import { Link } from "react-router-dom";
import { Menu09Icon, MultiplicationSignIcon } from "hugeicons-react";

export const Header = () => {
  return (
    <header className="relative flex justify-between items-center text-white py-5 md:py-7 px-5 sm:px-10 md:px-15 lg:px-20">
      <div className="logo font-extrabold text-3xl md:text-4xl lg:text-5xl">
        <Link to="/" className="select-none font-[airnt]">
          SD
        </Link>
      </div>
      <div className="toggle block md:hidden">
        <Menu09Icon color="white" size={28} />
      </div>
      <nav className="fixed md:static top-0 left-0 z-50 bg-black md:h-6 flex flex-col md:flex-row justify-center md:justify-end items-center space-y-8 md:space-y-0 md:space-x-8 ">
        <Link
          to="/about-me"
          className="font-extrabold tracking-widest text-[0.9rem] hover:text-gray-300 duration-300 cursor-pointer"
        >
          ABOUT ME
        </Link>
        <Link
          to="/projects"
          className="font-extrabold tracking-widest text-[0.9rem] hover:text-gray-300 duration-300 cursor-pointer"
        >
          PROJECTS
        </Link>
        <Link
          to="/contact-me"
          className="font-extrabold tracking-widest text-[0.9rem] hover:text-gray-300 duration-300 cursor-pointer"
        >
          CONTACT ME
        </Link>

        <span>
          <MultiplicationSignIcon
            color="white"
            size={28}
            className="absolute top-[30px] right-[30px] md:hidden"
          />
        </span>
      </nav>
    </header>
  );
};
