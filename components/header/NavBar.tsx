"use client";
import React from "react";
import Logo from "../rootComp/Logo";
import AuthButtons from "./AuthButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "../buttons/LogoutButton";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session, status } = useSession();
  if(status === "loading"){
    return(
      <div className="">Loading</div>
    )
  }
  return (
    <div className="bg-red-100 ">
      <nav className="flex items-center justify-between  max-sm:flex-col mx-8 h-20  px-6">
        <Logo />
        {session ? <LogoutButton /> : <AuthButtons />}
      </nav>
    </div>
  );
};

export default NavBar;
