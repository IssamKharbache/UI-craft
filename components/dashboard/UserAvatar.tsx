"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserAvatar = () => {
  const { data: session } = useSession();
  const image = session?.user?.image;
  const name = session?.user?.name;

  return (
    <div>
      {image ? (
        <Image src={image} width={250} height={250} alt="Avatar" className="w-10 h-10 rounded-full" />
      ) : (
        <div>{name?.split(" ")[0]}</div>
      )}
    </div>
  );
};

export default UserAvatar;
