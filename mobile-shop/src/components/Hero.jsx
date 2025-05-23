import React, { useState } from "react";
import banner from "../assets/banner.png";
const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);
  return (
    <div className="mb-20">
      <img className="w-2xl mx-auto py-10" src={banner} alt="" />
      <div className="text-center mb-6 py-4 space-y-4">
        <h1 className="text-7xl font-thin">Browse, Search, View, Buy</h1>
        <p className="w-2/4 mx-auto text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time - FlagshipFaceOff
        </p>
      </div>

      <form
        onSubmit={(e) => {
          handleSearch(e, searchText);
          setSearchText("");
        }}
        className="flex justify-center  "
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search your product: "
          className="border rounded focus:outline-none border-gray-300 focus:shadow-outline p-4 w-2/4 mr-4 shadow-md shadow-gray-300"
          type="text"
        />

        <button type="submit" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative cursor-pointer">Search</span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
