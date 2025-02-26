import type { Metadata } from "next";
import "./globals.css";
import { notoSansSC } from "@/app/ui/fonts";
import NavBar from "@/app/ui/global/nav-bar";

export const metadata: Metadata = {
  title: "三星堆博物馆",
  description: "三星堆博物馆 · 体验浪漫的三星堆文化",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansSC.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
