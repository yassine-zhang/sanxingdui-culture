"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { notoSerifSC } from "@/app/ui/fonts";
import { PersonIcon } from "@radix-ui/react-icons";

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const linkClass = (path: string) =>
    `cursor-pointer transition-colors ${
      isActive(path) ? "text-[#fff0bd]" : "text-white hover:text-[#fff0bd]"
    }`;

  return (
    <header
      className={`${notoSerifSC.className} antialiased min-w-[1380px] fixed top-0 inset-x-0 z-50 flex text-white py-4 border-b border-white/10`}
    >
      <div className="mx-auto flex-1 flex items-center justify-center">
        <div>
          <ul className="flex items-center justify-center gap-8">
            <li className={linkClass("/guide")}>
              <Link href="/guide">前往参观</Link>
            </li>
            <li className={linkClass("/social-education")}>
              <Link href="/social-education">社会教育</Link>
            </li>
            <li className={linkClass("/news")}>
              <Link href="/news">资讯公告</Link>
            </li>
            <li className={linkClass("/collection")}>
              <Link href="/collection">馆藏文物</Link>
            </li>
          </ul>
        </div>
        <div className="ml-52 mr-40">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              priority
              width={388 / 2}
              height={88 / 2}
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            <li className={linkClass("/exhibition")}>
              <Link href="/exhibition">展览活动</Link>
            </li>
            <li className={linkClass("/heritage")}>
              <Link href="/heritage">文化遗产</Link>
            </li>
            <li className={linkClass("/research")}>
              <Link href="/research">学术研究</Link>
            </li>
            <li className={linkClass("/cultural-products")}>
              <Link href="/cultural-products">文创精品</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-30 flex items-center justify-center mr-5">
        <span className="border-l border-white/10 h-1/3 px-1"></span>
        <PersonIcon className="w-4 h-4" />
      </div>
    </header>
  );
}
