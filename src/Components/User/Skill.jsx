import React from "react";
import {
  HTML_IMG,
  CSS_IMG,
  JS_IMG,
  BOOTSTRAP_IMG,
  TAILWIND_IMG,
  REACT_IMG,
} from "../../assets/index";

export const Skill = () => {
  return (
    <div className="skill py-10 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col justify-center items-center gap-8">
      <div className="text-content mx-auto">
        <h1 className="text-white text-center font-[nusar] text-[2rem] md:text-[2.1rem] lg:text-[2.2rem] tracking-wide">
          Skills
        </h1>
      </div>
      <div className="skills flex flex-col md:flex-row gap-5 md:gap-32">
        <div className="left flex flex-col gap-5 md:gap-8">
          <div className="html flex justify-center items-center gap-5">
            <img src={HTML_IMG} alt="" className="w-[15%] md:w-[12%]" />
            <div className="w-full bg-gray-600 rounded-full h-4.5 dark:bg-gray-800">
              <div className="bg-gray-300 rounded-full w-[95%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                95%
              </div>
            </div>
          </div>
          <div className="css flex justify-center items-center gap-5">
            <img src={CSS_IMG} alt="" className="w-[15%] md:w-[12%]" />
            <div className="w-full bg-gray-600 rounded-full h-4.5 dark:bg-gray-800">
              <div className="bg-gray-300 rounded-full w-[95%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                95%
              </div>
            </div>
          </div>
          <div className="js flex justify-center items-center gap-5">
            <img src={JS_IMG} alt="" className="w-[15%] md:w-[12%]" />
            <div className="w-full bg-gray-600 rounded-full h-4.5 dark:bg-gray-800">
              <div className="bg-gray-300 rounded-full w-[80%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                80%
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col gap-5 md:gap-8">
          <div className="bootstap flex justify-center items-center gap-5">
            <img src={BOOTSTRAP_IMG} alt="" className="w-[15%] md:w-[12%]" />
            <div className="w-full bg-gray-600 rounded-full h-4.5 dark:bg-gray-800">
              <div className="bg-gray-300 rounded-full w-[95%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                95%
              </div>
            </div>
          </div>
          <div className="tailwind flex justify-center items-center gap-5">
            <img src={TAILWIND_IMG} alt="" className="w-[15%] md:w-[12%]" />
            <div className="w-full bg-gray-600 rounded-full h-4.5 dark:bg-gray-800">
              <div className="bg-gray-300 rounded-full w-[90%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                90%
              </div>
            </div>
          </div>
          <div className="react flex justify-center items-center gap-5">
            <img src={REACT_IMG} alt="" className="w-[15%] md:w-[12%]" />
            <div className="w-full bg-gray-600 rounded-full h-4.5 dark:bg-gray-800">
              <div className="bg-gray-300 rounded-full w-[20%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
