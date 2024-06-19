import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavOptions/Navbar";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="py-3 px-6 h-full w-full bg-blue-100">
          <div className="flex flex-col  max-w-7xl mx-auto">
          <Navbar />
          <hr className="w-full h-[2px] mt-2 bg-sky-300"/>
          {children}
          
          </div>
          </div>
          </body>
    </html>
    </ClerkProvider>
  );
}
