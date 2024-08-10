"use client";
import { useAppContext } from "@/app/ContextApi";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Search = () => {
  const {
    showSeachBarObject: { setShowSeachBar, showSearchBar },
  } = useAppContext();
  if (showSearchBar) {
    return (
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 rounded py-2 outline-none border-2 focus:border-red-200 "
        />

        <button className="flex items-center justify-center bg-slate-700 text-white rounded-full w-8 h-8">
          <BiSearch />
        </button>
        <button
          onClick={() => setShowSeachBar(false)}
          className="flex items-center justify-center bg-red-500 text-white rounded-full w-8 h-8 e "
        >
          <IoClose size={20} />
        </button>
      </div>
    );
  }
  return (
    <div
      onClick={() => setShowSeachBar(true)}
      className="relative bg-red-200 w-1/3 cursor-pointer hover:bg-red-300/65 transition-all p-[8px] flex gap-4 justify-center items-center rounded-md"
    >
      <BiSearch className="text-slate-500 " />
      <span className="text-slate-500 text-sm">Search</span>
    </div>
  );
};

export default Search;
