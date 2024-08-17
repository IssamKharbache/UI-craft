import { AppProvider } from "@/app/ContextApi";
import AddProjectModal from "@/components/dashboard/main/projects/AddProjectModal";
import IconsModal from "@/components/dashboard/main/projects/IconsModal";

import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/SideBar";
import AuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";
import { Poppins, Rubik } from "next/font/google";
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
              <AddProjectModal />
              <IconsModal />
              <SideBar />
              <div className="flex flex-col flex-1">
                <NavBar />
                <div className="mt-16 ml-4">{children}</div>
              </div>
            </div>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
