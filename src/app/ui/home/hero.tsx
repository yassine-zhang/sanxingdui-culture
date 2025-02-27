"use client";

import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-dvh">
        <video
          className="min-w-full min-h-full w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/home/newhomevideo.mp4" type="video/mp4" />
          你的浏览器不支持视频播放
        </video>

        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110">
          <Image
            src="/home/logo&text-vertical.png"
            alt="logo"
            width={362 / 2.2}
            height={342 / 2.2}
          />
          <Image
            src="/home/title.png"
            alt="logo"
            width={2218 / 4.8}
            height={1152 / 4.8}
          />
          <Link href="/" className="text-white">
            <Image
              src="/home/enter.png"
              alt="logo"
              width={322 / 2.3}
              height={97 / 2.3}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
