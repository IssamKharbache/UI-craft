// types/next-auth.d.ts

import NextAuth from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the Session interface to include your custom properties
declare module "next-auth" {
  interface Session {
    user: {
      id: string | null; // Add the id property here
      name?: string;
      email?: string;
      image?: string;
    };
  }
}

// Extend the JWT interface if needed
declare module "next-auth/jwt" {
  interface JWT {
    id: string | null; // Add the id property here
  }
}
