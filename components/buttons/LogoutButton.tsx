"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="py-2 px-4 bg-primary hover:bg-primary-hover transition rounded text-white font-bold"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
