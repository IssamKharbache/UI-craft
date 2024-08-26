"use client";

import { useAppContext } from "@/app/ContextApi";
import { useEffect, useRef } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ContentCopy, DeleteOutlineOutlined } from "@mui/icons-material";

const DropDown = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const {
    dropDownObject: { openDropdown, setOpenDropdown, dropDownPositions },
    deleteModalObject:{openDeleteModal,setOpenDeleteModal},
  } = useAppContext();
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    }
    function handleScroll() {
      setOpenDropdown(false);
    }
    function handleWheel(event: WheelEvent) {
      if (event.deltaY !== 0) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setOpenDropdown]);
  return (
    <div
      ref={dropDownRef}
      style={{
        top: dropDownPositions.top + 54,
        left: dropDownPositions.left - 135,
        visibility: openDropdown ? "visible" : "hidden",
      }}
      className="bg-white z-50 px-5 border border-slate-50 fixed py-4 w-[160px] select-none  shadow-md flex flex-col gap-5"
    >
      {/* edit icon */}
      <div className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-400">
        <AppRegistrationIcon sx={{ fontSize: 21 }} className="text" />
        <span className="text-[14px]">Edit</span>
      </div>
      {/* copy icon */}
      <div className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-400">
        <ContentCopy sx={{ fontSize: 21 }} className="text" />
        <span className="text-[14px]">Copy code</span>
      </div>
      {/* devider line */}
      <hr className="border-t border-slate-200" />
      {/* delete icon  */}
      <div onClick={()=>setOpenDeleteModal(true)} className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-400">
        <DeleteOutlineOutlined sx={{ fontSize: 21 }} className="text" />
        <span className="text-[14px]">Delete</span>
      </div>
    </div>
  );
};

export default DropDown;
