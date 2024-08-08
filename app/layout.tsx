import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";

const rubik = Rubik({ subsets: ["latin"] ,variable:"--font-rubik",weight:["300","400","500","600","700","800","900"]});

export const metadata: Metadata = {
  title: "UIcraft",
  description: "Library of free and customizable UI elements where you can also build your own components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
 
        <div className="">
        {children}
        </div>
      </body>
    </html>
  );
}
