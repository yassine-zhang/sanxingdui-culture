import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { notoSerifSC } from "@/app/ui/fonts";
import Link from "next/link";
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  showMoreLink?: boolean;
  bgImage: string;
}

function InfoCard({ title, children, bgImage }: InfoCardProps) {
  return (
    <div className="backdrop-blur-sm p-5 relative w-[320px] h-[400px] overflow-hidden">
      <Image
        src={bgImage}
        alt={`${title} background`}
        fill
        className="absolute inset-0 object-cover mix-blend-overlay"
      />
      <h3
        className={`${notoSerifSC.className} text-white font-bold text-2xl mb-4 relative`}
      >
        {title}
      </h3>
      <div className="text-white/80 space-y-2 relative">{children}</div>
    </div>
  );
}

export default function Visit() {
  return (
    <div className="w-full min-h-dvh bg-black relative px-6 md:px-16 lg:px-20">
      <h2
        className={`${notoSerifSC.className} text-4xl font-bold pt-32 flex items-center text-[#fff0bd]`}
      >
        前往三星堆进行参观
        <ChevronRightIcon className="w-6 h-6 mx-2" />
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-5 mt-10 [&>*:nth-child(even)]:mt-6 pb-4 min-w-fit xl:min-w-0">
          {/* 时间安排 */}
          <InfoCard title="时间安排" bgImage="/home/visit_bg_01.jpg">
            <div
              className={`${notoSerifSC.className} font-bold text-xl space-y-2`}
            >
              <p>陈列馆：08:30-18:00</p>
              <p>停止入馆时间：17:00</p>
              <p>修复馆：09:00-17:00</p>
            </div>
          </InfoCard>

          {/* 门票预约 */}
          <InfoCard title="门票预约" bgImage="/home/visit_bg_02.jpg">
            <div className="space-y-2">
              <p>
                三星堆博物馆年除夕闭馆一天，其余时间周期上不对外（临时公告闭馆除外）。
              </p>
              <p>
                黄金周、小长假和寒暑假（1、2、7、8月）实行延时服务，开放时间08:30~20:00，停止入馆时间18:00。
              </p>
            </div>
          </InfoCard>

          {/* 交通路线 */}
          <InfoCard title="交通路线" bgImage="/home/visit_bg_03.jpg">
            <div className="space-y-2">
              <p>高铁：城际列车前往广汉，转公交</p>
              <p>自驾：从成都108国道，成绵国道半小时达</p>
            </div>
          </InfoCard>

          {/* 讲解推荐 */}
          <InfoCard title="讲解推荐" bgImage="/home/visit_bg_04.jpg">
            <div className="space-y-2">
              <p>人工讲解：专业生动的知识讲解</p>
              <p>导览机讲解：根据个人兴趣进行探索</p>
              <p>地图导览：即开即用的导览讲解</p>
            </div>
          </InfoCard>
        </div>
      </div>

      <Link
        href="/guide"
        className="z-10 absolute bottom-16 left-16 border border-white/20 text-white px-8 py-3.5 hover:bg-white hover:text-black"
      >
        规划您的行程
      </Link>

      <Image
        width={1920}
        height={1080}
        src="/home/visit-preparation-footer.png"
        alt="Visit Preparation Footer"
        className="absolute bottom-0 inset-x-0 w-full"
      />
    </div>
  );
}
