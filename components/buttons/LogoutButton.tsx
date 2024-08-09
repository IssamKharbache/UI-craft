"use client";
import { signOut } from "next-auth/react";
import React from "react";


const LogoutButton = () => {
  return (
 
     <button
      onClick={() => signOut()}
      className="py-2 px-4 border border-primary hover:bg-primary-hover hover:text-white transition rounded text-primary font-bold"
    >
      Logout
    </button>
   
  );
};

export default LogoutButton;
