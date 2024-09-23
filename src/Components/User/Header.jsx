import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center text-white py-5 md:py-7 px-5 sm:px-10 md:px-15 lg:px-20">
      <div className="logo font-extrabold text-3xl md:text-4xl lg:text-5xl">
        <Link to="/" className="select-none font-[airnt]">
          SD
        </Link>
      </div>
      <div className="toggle block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          color="#ffffff"
          fill="none"
          classNameName=""
        >
          <path
            d="M20 12L10 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5L4 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 19L4 19"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <nav className="hidden md:flex space-x-8 ">
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
      </nav>
    </header>
  );
};
