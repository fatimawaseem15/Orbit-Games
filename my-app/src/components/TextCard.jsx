import React from "react";

const TextCard = ({ icon, heading, heading2, paragraph }) => {
  return (
    <div className="relative max-w-xs w-full md:w-1/3 bg-blue-500 border border-solid border-gray-200 rounded-2xl overflow-hidden shadow-lg">
      <div className="p-4 flex items-center justify-center">
        <img src={icon} alt="Icon" className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full p-2" />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-1 capitalize">{heading}</h4>
        <h4 className="text-lg font-semibold text-white mb-1 capitalize">{heading2}</h4>
        <p className="text-base font-normal text-white leading-6 mb-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default TextCard;
