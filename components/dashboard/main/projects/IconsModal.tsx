'use client';
import { useAppContext } from "@/app/ContextApi";
import React from "react";
import { IoAppsOutline, IoCloseOutline } from "react-icons/io5";
const IconsModal = () => {
  const {
    iconModalObject: { iconModalOpen, setIconModalOpen },
  } = useAppContext();
  return (
    <div
      className={`w-[80%] md:w-[40%] bg-white h-[490px] shadow-md left-1/2 top-[25px] rounded -translate-x-1/2 z-50 ${
        iconModalOpen ? "absolute" : "hidden"
      }`}
    >
      {/* header */}
      <div className="flex justify-between items-center pt-7 px-7 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] bg-red-200 rounded-full flex items-center justify-center">
            <IoAppsOutline />
          </div>
          {/* category header */}
          <span className="font-semibold text-lg">Project Icons</span>
          <IoCloseOutline
            onClick={() => setIconModalOpen(false)}
            className="text-slate-700 text-[18px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default IconsModal;
