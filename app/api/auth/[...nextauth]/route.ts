import { connectDb } from "@/utils/db";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { Account, User as AuthUser } from "next-auth";
import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connectDb();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    //google oauth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    //github oauth
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET?? ""
    })
  ],
  callbacks: {
    async signIn({ user, account }:{user:AuthUser,account:Account}) {
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "google" || account?.provider =="github") {
        await connectDb();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              fullName: user.name,
            });
            await newUser.save();
            return true;
          }
          return true;
        } catch (error) {
          console.log("Error while saving user while OAuth");
        }
      }
    },
    // async session({ session, token }) {
      
    //   //setting up session data from database
    //   session.user.id = token.id;
    //   session.user.name = token.name;
    //   session.user.email = token.email;
    //   session.user.plan = plan;
    //   return session;
    // },
    // async jwt({ token, user, account }) {
    //   if (user) {
    //     token.id = user.id;
    //     token.fullName = user.fullName;
    //     token.email = user.email;
    //     token.plan = user.plan;
    //     token.provider = account.provider;
    //   }
    //   return token;
    // },
  },
};


export const handler = NextAuth(authOptions);

export {handler as GET,handler as POST};