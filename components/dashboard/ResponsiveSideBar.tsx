"use client";
import { useAppContext } from "@/app/ContextApi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import SideBarLinks from "./SideBarLinks";
import LogoutButton from "../buttons/LogoutButton";

const ResponsiveSideBar = () => {
  const {
    showResponsiveSideBarObject: {
      showResponsiveSearchBar,
      setShowResSeachBar,
    },
  } = useAppContext();
  
  return (
    <div className="flex lg:hidden">
      {showResponsiveSearchBar ? (
        <IoCloseOutline
          onClick={() => setShowResSeachBar(false)}
          className="size-8 text-slate-500"
        />
      ) : (
        <CgMenuLeftAlt
          onClick={() => setShowResSeachBar(true)}
          className="size-8 text-slate-500"
        />
      )}
      <div className={`absolute top-[64px] left-0  z-10 flex flex-col gap-4 items-center transition-all justify-center bg-red-200 w-full h-full   ${showResponsiveSearchBar ? "ml-0" :"-ml-[100%]"}`}>
        <SideBarLinks isResp={true} />
        <LogoutButton />
      </div>
    </div>
  );
};

export default ResponsiveSideBar;
