"use client";
import Logo from "../rootComp/Logo";
import SideBarLinks from "./SideBarLinks";
import LogoutButton from "../buttons/LogoutButton";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { useAppContext } from "@/app/ContextApi";

const SideBar = () => {
  const {
    sideBarOpen: { isOpen, setIsOpen },
  } = useAppContext();

  return (
    <div
      className={` ${
        isOpen ? "ml-0" : "-ml-[12%]"
      } h-screen w-[320px]  p-6 pt-12 relative bg-red-100/80 flex flex-col items-center justify-between duration-700 `}
    >
      <div className="flex justify-between gap-4 ">
        <Logo />
        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-0 mr-1 mt-4 bg-red-200 p-1 rounded-full"
          >
            <FaArrowLeft />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="absolute right-0 mr-1 mt-4 bg-red-200 p-1 rounded-full"
          >
            <FaArrowRight />
          </button>
        )}
      </div>
      <SideBarLinks />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
