"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // 确保组件只在客户端渲染后处理路径
  useEffect(() => {
    setMounted(true);
  }, []);

  // 如果组件还未挂载到客户端，返回null以避免水合不匹配
  if (!mounted) {
    return null;
  }

  // 只在首页显示
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 flex">
      <p className="text-gray-500 text-xs writing-vertical-lr tracking-widest">
        滑动查看更多
      </p>
      <Image
        src="/home/slideDown.svg"
        alt="arrow"
        width={6}
        height={16}
        className="-mt-3"
      />
    </div>
  );
}
