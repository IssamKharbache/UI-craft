"use client";
import { useAppContext } from "@/app/ContextApi";
import { signOut } from "next-auth/react";
import React from "react";
import { HiLogout } from "react-icons/hi";



const LogoutButton = () => {
  const {
    sideBarOpen: {isOpen},
  } = useAppContext();

  return (
 
     <button
      onClick={() => signOut()}
      className={`flex gap-2  items-center py-2 border border-primary hover:bg-primary-hover hover:text-white transition rounded text-primary font-bold ${isOpen ? "ml-0  px-4":"ml-60 px-2"}`}
    >
      {
        isOpen &&   <span>Logout</span>
      }
      <HiLogout size={20} />
    
   
    </button>
   
  );
};

export default LogoutButton;
