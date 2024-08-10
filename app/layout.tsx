import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SessionProvider";

const rubik = Poppins({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UIcraft",
  description:
    "Library of free and customizable UI elements where you can also build your own components",
};

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
          <div className="">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
