"use client";

import { useAppContext } from "@/app/ContextApi";
import { useEffect, useRef } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ContentCopy, DeleteOutlineOutlined } from "@mui/icons-material";
import { Component, Project } from "@/localData";
import { toast } from "sonner";

const DropDown = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const {
    dropDownObject: { openDropdown, setOpenDropdown, dropDownPositions },
    deleteModalObject: { openDeleteModal, setOpenDeleteModal },
    selectedComponentObject:{selectedComponent,setSelectedComponent}
  } = useAppContext();
  //close the dropdown when the delete modal is open and the user clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node) &&
        openDeleteModal
      ) {
        setOpenDropdown(false);
        if(openDeleteModal){
          setSelectedComponent(null);
        }
      }
    }
    function handleScroll() {
      setOpenDropdown(false);
      setSelectedComponent(null)
    }
    function handleWheel(event: WheelEvent) {
      if (event.deltaY !== 0) {
        setOpenDropdown(false);
        setSelectedComponent(null);
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
  //delete componnent function
  const deleteComponent = () => {
    setOpenDeleteModal(true);
    setOpenDropdown(false);
  };
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
      <div
        onClick={deleteComponent}
        className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-400"
      >
        <DeleteOutlineOutlined sx={{ fontSize: 21 }} className="text" />
        <span className="text-[14px]">Delete</span>
      </div>
    </div>
  );
};

export default DropDown;
