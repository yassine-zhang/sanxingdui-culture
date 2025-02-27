import {
  GlobeAltIcon,
  QrCodeIcon,
  VideoCameraIcon,
  HashtagIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "公众号", icon: <QrCodeIcon className="w-6 h-6" /> },
    { name: "小程序", icon: <QrCodeIcon className="w-6 h-6" /> },
    { name: "视频号", icon: <VideoCameraIcon className="w-6 h-6" /> },
    { name: "微博", icon: <HashtagIcon className="w-6 h-6" /> },
    { name: "抖音号", icon: <MusicalNoteIcon className="w-6 h-6" /> },
  ];

  const friendlyLinks = [
    "四川博物院",
    "成都博物馆",
    "重庆中国三峡博物馆",
    "成都武侯祠博物馆",
    "成都金沙遗址博物馆",
    "成都杜甫草堂博物馆",
    "自贡恐龙博物馆",
  ];

  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* 顶部内容 */}
      <div className="container mx-auto px-4 py-8 border-b border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* 网站访问量 */}
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">5213647</span>
            <span className="text-sm">网站访问量</span>
          </div>

          {/* 社交媒体链接 */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  {link.icon}
                </div>
                <span className="text-xs mt-1">{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部内容 */}
      <div className="container mx-auto px-4 py-6">
        {/* 友情链接 */}
        <div className="mb-6 flex flex-wrap items-center">
          <span className="mr-2 font-medium">友情链接：</span>
          {friendlyLinks.map((link, index) => (
            <span
              key={index}
              className="mr-4 text-sm hover:text-blue-600 cursor-pointer transition-colors"
            >
              {link}
            </span>
          ))}
        </div>

        {/* 版权信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
            <div className="flex items-center">
              <GlobeAltIcon className="w-5 h-5 mr-1" />
              <Link
                href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51068102510847"
                target="_blank"
                className="text-xs hover:text-blue-600 transition-colors"
              >
                川公网安备 xxxxx xxxx xxxxx号
              </Link>
            </div>
            <Link
              href="https://beian.miit.gov.cn/"
              target="_blank"
              className="text-xs hover:text-blue-600 transition-colors"
            >
              ICP备案：蜀ICP备xxxxxxxxxx号-1
            </Link>
            <span className="text-xs">电话：xxxx-xxxxxxx</span>
          </div>
          <div className="text-xs">21数媒3班+何晓蓉 毕业设计</div>
        </div>
      </div>
    </footer>
  );
}
