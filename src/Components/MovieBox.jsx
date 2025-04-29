import React from "react";
import { useAuth } from "../context/AuthContext";

const MovieBox = ({
  imageSrc,
  label1,
  label2,
  label3,
  label4,
  title,
  redirectLink,
}) => {
  const { user } = useAuth();
  const handleBoxClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div
      className="w-[200px] h-[380px] p-1 lg:w-[270px] lg:h-[450px] lg:p-2 bg-gray-800 rounded-md shadow-lg lg:hover:scale-105 lg:transition-transform lg:duration-300 cursor-pointer"
      onClick={handleBoxClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[80%] object-cover rounded-md"
      />
      <div className="flex gap-2 mt-2">
        <span className="px-2 text-sm lg:py-1 lg:text-xs text-white bg-gray-600 rounded">
          {label1}
        </span>
        <span className="px-2 text-sm lg:py-1 lg:text-xs text-white bg-blue-600 rounded">
          {label2}
        </span>
        <span className="text-sm px-2 lg:py-1 text-white bg-green-600 rounded">
          {label3}
        </span>
        <span className="text-sm px-2 lg:py-1 text-white bg-pink-700 rounded">
          {label4}
        </span>
      </div>
      <h3 className="mt-2 text-xs lg:text-sm text-white">{title}</h3>
    </div>
  );
};

export default MovieBox;
