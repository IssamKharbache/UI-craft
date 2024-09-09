"use client";
import { getInitials } from "@/utils/getInitials";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const DropDown = ({ showDropDown }: { showDropDown: boolean }) => {
  const { data: session } = useSession();
  const image = session?.user?.image;
  const name = session?.user?.name;
  const email = session?.user?.email;
  return (
    <div
      className={` bg-slate-200  right-[25px] md:right-[40px] rounded shadow-xl w-72 md:w-96    ${
        showDropDown ? "absolute" : "hidden "
      }`}
    >
      {/* links */}
      <div className="flex flex-col text-slate-500 text-sm gap-8  justify-center ml-8 mb-5 mt-8    w-full ">
        <div className="flex gap-4 items-center">
          <div className="">
            {image ? (
              <Image
                src={image}
                width={250}
                height={250}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="bg-red-200 rounded-full w-10 h-10 flex items-center justify-center">
                <p className="font-bold uppercase">{getInitials(name)}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-slate-700 capitalize">{name}</h1>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <Link
          className="flex  items-center gap-4  text-sm  hover:text-slate-700 transition-all "
          href="/settings"
        >
          <IoMdSettings />
          <span>Manage account</span>
        </Link>
        <button
          className="flex  items-center gap-4  text-sm hover:text-slate-700 transition-all "
          onClick={() => signOut()}
        >
          <BiLogOut />
          <span>Sign out</span>
        </button>
      </div>

      <hr className="text-red-400" />
    </div>
  );
};

export default DropDown;
