import React from "react";

export const SkillsCard = ({ src, per }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <img src={src} alt="" className="w-[15%] md:w-[12%]" />
        <div className="w-full bg-gray-600 rounded-full h-4.5">
          <div
            className="bg-gray-200 rounded-full h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none"
            style={{ width: `${per}%` }}
          >
            {per}
          </div>
        </div>
      </div>
    </>
  );
};
