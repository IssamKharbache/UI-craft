"use client";
import React from "react";
import Logo from "../rootComp/Logo";
import AuthButtons from "./AuthButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "../buttons/LogoutButton";
import { useSession } from "next-auth/react";
import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";
import Link from "next/link";

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div className="">Loading</div>;
  }
  return (
    <div className="bg-red-100 ">
      <nav className="flex items-center justify-between  max-sm:flex-col mx-8 h-20  px-6">
        <Logo />
        {session ? (
          <div className="flex gap-4">
            <Link href="/dashboard">
              <BorderButton label="Dashboard" />
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <AuthButtons />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
