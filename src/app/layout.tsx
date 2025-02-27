import type { Metadata } from "next";
import "./globals.css";
import { notoSansSC } from "@/app/ui/fonts";
import NavBar from "@/app/ui/global/nav-bar";
import SmoothScroll from "@/app/ui/smooth-scroll";
import ScrollIndicator from "@/app/ui/home/scroll-indicator";

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
    <html lang="zh-CN" className="has-scroll-smooth">
      <body className={`${notoSansSC.className} antialiased overflow-hidden`}>
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollIndicator />
      </body>
    </html>
  );
}
