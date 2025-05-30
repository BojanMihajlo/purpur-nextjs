import type { Metadata } from "next";

import "./globals.css";
import Footer from "./home/Footer";




export const metadata: Metadata = {
  title:"PurPur",
  description: "Generated by Bojan",
  // icons: {
  //   icon: '/images/yarn31.webp', 
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
