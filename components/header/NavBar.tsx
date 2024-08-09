"use client";
import Logo from "../rootComp/Logo";
import AuthButtons from "./AuthButtons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../buttons/Button";

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
