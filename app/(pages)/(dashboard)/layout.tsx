import { AppProvider } from "@/app/ContextApi";
import SideBar from "@/components/dashboard/SideBar";
import AuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";
import { Rubik } from "next/font/google";
import React from "react";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={rubik.className}>
        <AuthProvider session={session}>
          <AppProvider>
             <div className="flex">
            <SideBar />
            <div className="mt-16 ml-4">{children}</div>
          </div>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
