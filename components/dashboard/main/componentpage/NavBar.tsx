"use client";
import { useAppContext } from "@/app/ContextApi";
import { KeyboardArrowLeftTwoTone } from "@mui/icons-material";
import { PiPlusCircleDuotone } from "react-icons/pi";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import SideBarLinks from "../../SideBarLinks";
import LogoutButton from "@/components/buttons/LogoutButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {selectedProjectObject:{selectedProject},editorObject:{setOpenEditorModal}} = useAppContext();
 
  return (
    <div className="flex items-center  justify-between   px-7 mb-4 h-16">
      {/* back button and name */}
      <LeftSide />
      {/* search */}
      <SearchInput />
      {/* add component button */}
      {selectedProject?.components.length !== 0 && (
      <button onClick={ ()=> setOpenEditorModal(true)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition">
        <PiPlusCircleDuotone size={25} />
        <span className="hidden md:block">Component</span>
      </button>
      )}

      <div className="block md:hidden">
        {!isOpen && (
          <MenuIcon
            onClick={() => setIsOpen(true)}
            fontSize="medium"
            className="cursor-pointer"
          />
        )}
        {isOpen && (
          <>
            <CloseIcon
              onClick={() => setIsOpen(false)}
              fontSize="medium"
              className="cursor-pointer"
            />
            <div
              className={`absolute top-[64px] left-0  z-10 flex flex-col gap-4 items-center transition-all justify-center bg-red-200 w-full h-full   ${
                isOpen ? "ml-0" : "-ml-[100%]"
              }`}
            >
              <SideBarLinks isResp={true} />
              <LogoutButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

//search component
const SearchInput = () => {
  
  return (
    <div className="hidden md:block">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 border-2 border-gray-300 px-4 rounded-full  outline-none focus:border-red-200"
      />
    </div>
  );
};
//left side component
const LeftSide = () => {
  
  const {
    showComponentPageObject: { setShowComponentPage, showComponentPage },
    selectedProjectObject: { selectedProject },
  } = useAppContext();
  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2 border border-red-200 rounded py-2 px-4"
        onClick={() => setShowComponentPage(false)}
      >
        <KeyboardArrowLeftTwoTone />
        <span className="hidden md:block">Back</span>
      </button>

      <div className="flex flex-col">
        <span className="font-bold text-md md:text-xl">{selectedProject?.name}</span>
        <span className="text-slate-400 text-sm ">{selectedProject?.components.length} components</span>
      </div>
    </div>
  );
};
