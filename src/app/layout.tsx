import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";

const poppins = Poppins({
  variable:"--font-poppins", 
  subsets:["latin"],
  weight: ["300", "400", "500","600","700"]
})

export const metadata: Metadata = {
  title: "Lethabo's Music Blog",
  description: "A central hub for viewing insights and reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-background`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
