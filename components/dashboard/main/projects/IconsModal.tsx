"use client";
import { useAppContext } from "@/app/ContextApi";
import AllIcons, { allIconsArray, IconData } from "@/utils/allIconsData";
import React, { useState } from "react";
import { IoAppsOutline, IoCloseOutline } from "react-icons/io5";
const IconsModal = ({
  onUpdateIconSelected,
}: {
  onUpdateIconSelected: (icon: IconData) => void;
}) => {
  
  const [allIconsState, setAllIconsState] = useState<IconData[]>(allIconsArray);
  const {
    iconModalObject: { iconModalOpen, setIconModalOpen },
  } = useAppContext();
  return (
    <div
      className={`w-[400px] bg-white h-[420px] shadow-md left-1/2 top-[25px] rounded -translate-x-1/2 z-50 ${
        iconModalOpen ? "absolute" : "hidden"
      }`}
    >
      {/* header */}
      <div className="flex flex-col justify-between items-center pt-7 px-7 mb-8 ">
        <div className="flex items-center gap-7">
          <div className="w-[30px] h-[30px] bg-red-200 rounded-full flex items-center justify-center">
            <IoAppsOutline />
          </div>
          {/* category header */}

          <span className="font-semibold text-lg">Project Icons</span>
          <IoCloseOutline
            onClick={() => setIconModalOpen(false)}
            className="text-slate-700 bg-red-100 hover:bg-red-200 transition rounded-full text-[25px] cursor-pointer"
          />
        </div>
        {/* message */}
        <div className=" text-[12px] text-slate-400 mt-24">
          {`Please select the icon you'd like to use.`}
        </div>
        {/* all icons */}
        <div className="w-full flex flex-col  items-center ">
          <div className="border border-slate-100 w-[92%] h-[150px] overflow-auto rounded-md bg-slate-100 mt-4 p-4">
            <AllIcons
              allIconsState={allIconsState}
              setAllIconsState={setAllIconsState}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-end gap-4 mt-6 px-7 text-[12px]">
          <button
            onClick={() => setIconModalOpen(false)}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm px-4 py-2 rounded-md transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onUpdateIconSelected(
                allIconsState.filter((icon) => icon.isSelected)[0]
              );
              setIconModalOpen(false);
              
            }}
            className="px-4 py-2 bg-primary hover:bg-primary-hover rounded-md transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconsModal;
