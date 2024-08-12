import React from "react";
import { CgEditFade } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { MdVisibility } from "react-icons/md";
import { TbTrash } from "react-icons/tb";

const FavoriteComponents = () => {
  return (
    <div className="bg-white w-full p-8 rounded-lg mt-4">
      {/* header */}
      <div className="flex justify-between">
        <span className="font-bold text-lg">Favorite Components</span>
        {/* button */}
        <button className="bg-primary hover:bg-primary-hover flex gap-2 items-center text-white text-[12px] p-2 px-4 rounded-md  transition font-bold">
          <MdVisibility fontSize="small" />
          <span className="max-sm:hidden text-md ">View all</span>
        </button>
      </div>
      {/* headers list */}
      <div className="grid grid-cols-4 mt-6 mb-4 text-sm items-center  text-slate-400 px-4 max-sm:grid-cols-2">
        <span>Component Name</span>
        <span className="max-sm:hidden">Day of creation</span>
        <span className="max-sm:hidden">Project</span>
        <span>Actions</span>
      </div>
      {/* components */}
      <div className="px-4 flex flex-col gap-1 mt-1">
        <SingleFavoriteComponent />
        <SingleFavoriteComponent />
        <SingleFavoriteComponent />
      </div>
    </div>
  );
};

export default FavoriteComponents;

const SingleFavoriteComponent = () => {
  return (
    <div className="grid grid-cols-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2">
        {/* name */}
      <span className="hover:text-red-400 cursor-pointer">Ui Form</span>
      {/* data */}
      <span className="max-sm:hidden">12 August 2024</span>
      {/* Project */}
      <span className="justify-self-start max-sm:hidden">
        <span className="inline-block rounded-2xl bg-red-400 text-white text-[12px] px-4 py-1 whitespace-nowrap">
            Forms
        </span>
      </span>
      {/* actions */}
      <div className="flex gap-2">
        {/* modify button */}
        <div className="bg-slate-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-slate-400 cursor-pointer transition">
            <CiEdit fontSize="large" />
        </div>
        {/* delete button */}
        <div className="bg-primary rounded-full w-7 h-7 flex items-center justify-center hover:bg-primary-hover cursor-pointer transition">
            <TbTrash fontSize="large" />
        </div>
      </div>
    </div>
  );
};
