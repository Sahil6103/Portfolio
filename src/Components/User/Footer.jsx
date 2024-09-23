import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-10 px-5 sm:px-10 md:px-15 lg:px-20 text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="logo-part flex flex-col gap-4 w-full lg:w-[50%]">
          <div className="logo font-extrabold text-3xl md:text-4xl lg:text-[2.5rem] ">
            <span className="select-none font-[airnt]">SD</span>
          </div>
          <div className="text-content">
            <span className="text-gray-300 text-[1.1rem] w-[40%]">
              As a front-end developer, my role is to design and implement the
              user-facing aspects of websites and web applications. I focus on
              creating intuitive, responsive, and visually appealing interfaces
              that ensure a seamless user experience. My expertise lies in
              technologies like HTML, CSS, and JavaScript, along with frameworks
              and libraries such as React.js.
            </span>
          </div>
        </div>
        <div className="contact-part ">
          <div className="mobile flex flex-col">
            <span className="font-[900] text-[1.2rem]">Mobile No. :</span>
            <span className="text-gray-300 tracking-wider text-[1.1rem]">
              +0123456789
            </span>
          </div>
          <div className="email flex flex-col mt-3">
            <span className="font-[900] text-[1.2rem]">Email Address :</span>
            <span className="text-gray-300 tracking-wider text-[1.1rem]">
              example@abc.com
            </span>
          </div>
          <div className="flex gap-2">
            <div className="social flex justify-center lg:justify-start space-x-4 mt-8">
              <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-gray-300 hover:border-gray-300 duration-500 cursor-pointer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" text-gray-300 text-lg group-hover:text-black duration-300"
                />
              </span>
              <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-gray-300 hover:border-gray-300 duration-500 cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" text-gray-300 text-lg group-hover:text-black duration-300"
                />
              </span>
              <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-gray-300 hover:border-gray-300 duration-500 cursor-pointer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" text-gray-300 text-lg group-hover:text-black duration-300"
                />
              </span>
              <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-gray-300 hover:border-gray-300 duration-500 cursor-pointer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className=" text-gray-300 text-lg group-hover:text-black duration-300"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
