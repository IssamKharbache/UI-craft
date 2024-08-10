"use client";
import { getInitials } from "@/utils/getInitials";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import DropDown from "./DropDown";


const UserAvatar = () => {
  //session states
  const { data: session } = useSession();
  const image = session?.user?.image;
  const name = session?.user?.name;
  //states
  const [showDropDown,setShowDropDown] = useState(false);
  return (
    <div className="cursor-pointer" onClick={()=>setShowDropDown(prev=>!prev)}>
      {image ? (
        <Image src={image} width={250} height={250} alt="Avatar" className="w-10 h-10 rounded-full" />
      ) : (
        <div className="bg-red-200 rounded-full w-10 h-10 flex items-center justify-center">
          <p className="font-bold uppercase">{getInitials(name)}</p>
        </div>
      )}
      <DropDown showDropDown={showDropDown} />
    </div>
  );
};

export default UserAvatar;
