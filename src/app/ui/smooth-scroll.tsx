"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // 确保代码只在客户端执行
    if (typeof window === "undefined" || !scrollRef.current) return;

    const initLocomotiveScroll = async () => {
      try {
        const locomotiveModule = await import("locomotive-scroll");

        locomotiveScrollRef.current = new locomotiveModule.default({
          el: scrollRef.current as HTMLElement,
          smooth: true,
          lerp: 0.075,
          multiplier: 0.9,
          reloadOnContextChange: true,
          class: "is-inview",
          tablet: {
            smooth: true,
            breakpoint: 768,
          },
          smartphone: {
            smooth: true,
          },
        });

        // 更新滚动条大小
        setTimeout(() => {
          locomotiveScrollRef.current?.update();
        }, 500);

        // 监听窗口大小变化
        const handleResize = () => {
          locomotiveScrollRef.current?.update();
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          locomotiveScrollRef.current?.destroy();
        };
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    };

    initLocomotiveScroll();
  }, []);

  return (
    <main
      ref={scrollRef}
      data-scroll-container
      className="relative min-h-screen w-full"
    >
      <div data-scroll-section>{children}</div>
    </main>
  );
}
