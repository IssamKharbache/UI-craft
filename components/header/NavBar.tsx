"use client";
import Logo from "../rootComp/Logo";
import AuthButtons from "./AuthButtons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../buttons/Button";
import { useEffect } from "react";

const NavBar = () => {
  const { data: session, status, update } = useSession();

  if (status === "loading") {
    return (
      <div
        role="status"
        className="flex items-center justify-between   mx-8 h-20  px-6 animate-pulse"
      >
        <div className=" bg-gray-400 rounded w-32 h-10   mt-8"></div>
        <div className=" "></div>
        <div className="bg-white  w-32 h-10 rounded   mb-2.5 mx-auto mt-8 px-6"></div>
        <div className="">
          <div className="bg-gray-400  w-32 h-10 rounded   mb-2.5 mx-auto mt-8 px-6"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="bg-red-100 ">
      <nav className="flex items-center justify-between  max-sm:flex-col mx-8 h-20  px-6">
        <Logo />
        {session ? (
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button label="Dashboard" />
            </Link>
          </div>
        ) : (
          <AuthButtons />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
