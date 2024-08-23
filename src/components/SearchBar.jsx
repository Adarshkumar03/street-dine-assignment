import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-2 w-full mb-10">
      <svg
        className="w-5 h-5 text-gray-500 ml-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.35 12.15z"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search Your Menu Here"
        className="bg-transparent outline-none pl-3 w-full text-gray-700 placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
