import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ABOUT_IMG, RESUME } from "../../assets/index";

export const About = () => {
  return (
    <div className="about py-5 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="img sm:w-full md:w-1/2 lg:pe-10 ">
        <img src={ABOUT_IMG} alt="" className="rounded-lg" />
      </div>
      <div className="text-content sm:w-full md:w-1/2">
        <h1 className="mb-2 text-gray-300 text-[1.1rem] md:text-[1.2rem] font-bold tracking-wider ">
          I'm Sahil Dhandhukiya
        </h1>
        <span className="text-white text-[1.6rem] lg:text-[2.5rem] tracking-wider sm:leading-5 md:leading-8 lg:leading-[50px]">
          I'm a Front-end Developer
        </span>
        <p className="text-gray-300 text text-[1.2rem] mt-2">
          As a front-end developer, my role is to design and implement the
          user-facing aspects of websites and web applications. I focus on
          creating intuitive, responsive, and visually appealing interfaces that
          ensure a seamless user experience. My expertise lies in technologies
          like HTML, CSS, and JavaScript, along with frameworks and libraries
          such as React.js. I specialize in crafting layouts, stylingt
          Components, handling client-side logic, and optimizing performance to
          make sure the website looks great and works efficiently across all
          devices.
        </p>
        <a
          href={RESUME}
          download={"Sahil Dhandhukiya.pdf"}
          className="bg-gray-300 w-full md:w-[60%] lg:w-[50%] xl:w-[35%] flex justify-center items-center mt-6 py-3 text-[1.05rem] rounded-lg"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2 text-gray-500" />
          Download Resume
        </a>
      </div>
    </div>
  );
};
