"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { notoSerifSC } from "../fonts";
import Link from "next/link";

// 收藏品数据
const collections = [
  {
    id: 1,
    title: "商青铜立人像",

    description:
      "在三星堆众多的青铜雕像群中，足以领衔群像的最高统治者非大立人像莫属，——不论是从服饰、形像还是体量等各方面看，这尊大立人像都堪称它们的“领袖”人物。以往殷墟出土的玉石铜人像与之相比，真可谓是“小巫”见“大巫”了。就全世界范围来看，三星堆青铜大立人也是同时期体量最大的青铜人物雕像。 雕像系采用分段浇铸法嵌铸而成，身体中空，分人像和底座两部分。人像头戴高冠，身穿窄袖与半臂式共三层衣，衣上纹饰繁复精丽，以龙纹为主，辅配鸟纹、虫纹和目纹等，身佩方格纹带饰。其双手手型环握中空，两臂略呈环抱状构势于胸前。脚戴足镯，赤足站立于方形怪兽座上。其整体形象典重庄严，似乎表现的是一个具有通天异禀、神威赫赫的大人物正在作法。其所站立的方台，即可理解为其作法的道场——神坛或神山。",
    image: "/home/item01.png",
    details: {
      era: "中国历史学年代,商(前1600~前1046)",
      level: "一级",
      material: "雕塑、造像",
      dimensions: "高260.8cm，人像高180cm，底座横宽48.5cm，纵长46.7cm，高35cm",
    },
  },
  {
    id: 2,
    title: "商青铜神树",
    description:
      "Ⅰ号大型铜神树由底座、树和龙三部分组成，采用分段铸造法铸造，使用了套铸、铆铸、嵌铸等工艺，通高3.96米，树干顶部及龙身后段略有残缺。在我国迄今为止所见的全部青铜文物中，这株神树也称得上是形体最大的一件。 铜树底座呈穹窿形，其下为圆形座圈，底座由三面弧边三角状镂空虚块面构成，三面间以内擫势的三足相连属，构拟出三山相连的“神山”意象，座上铸饰象征太阳的“☉”纹与云气纹。树铸于“神山之巅”的正中，卓然挺拔，有直接天宇之势。树分三层，每层三枝，共九枝；每枝上有一仰一垂的两果枝，果枝上立神鸟，树侧有一条缘树逶迤而下的身似绳索相辫的铜龙，整条龙造型怪异诡谲，莫可名状。 关于这株铜树的内涵，目前在学术界尚存在不同看法，但将铜树界定为“神树”，则是共识：一种意见认为，这株铜神树的造型与内涵应与《山海经》中记载的“建木”相关，铜树是古蜀人沟通人神、上下天地的天梯，反映了古蜀人交通于天人之际的特殊宗教权力被古蜀国神权政治集团所独占的情况。与此相对的观点则认为青铜神树并非建木，从其构型分析，更多的与《山海经》描述的“若木”相似。另一种意见认为，青铜神树具有“社”的功能，与载籍所记“桑林”一致，应为“社树”。一种意见认为，铜神树为古蜀人的宇宙树，反映了蜀人的世界观。还有一种观点认为，青铜神树起源于古人对日晕现象的认识，代表东西两极的扶桑与若木。",
    image: "/home/item02.png",
    details: {
      era: "中国历史学年代,商(前1600~前1046)",
      level: "一级",
      material: "铜器",
      dimensions: "最大径140，高396，树枝残高359，底座直径93.5厘米",
    },
  },
  {
    id: 3,
    title: "商金杖",
    description:
      "三星堆祭祀坑出土的金杖是已出土的中国同时期金器中体量最大的一件。金杖系用金条捶打成金皮后，再包卷在木杖上；出土时木杖已炭化，仅存金皮，金皮内还残留有炭化的木渣。在金杖一端，有长约46厘米长的一段图案，图案共分三组：靠近端头的一组，合拢看为两个前后对称，头戴五齿巫冠，耳饰三角形耳坠的人头像，笑容可掬。另外两组图案相同，其上下方分别皆是两背相对的鸟与鱼，在鸟的颈部和鱼的头部叠压着一支箭状物。",
    image: "/home/item03.png",
    details: {
      era: "中国历史学年代,商(前1600~前1046)",
      level: "一级",
      material: "金银器",
      dimensions: "长142，宽4，高2厘米",
    },
  },
  {
    id: 4,
    title: "商玉璋",
    description:
      "璋是我国古代最为重要的礼器之一，在所谓礼拜天地四方之中，璋被认为是用来“礼南方”的器物，一般认为它最主要的用途是祭山。二号祭祀坑出土的这件玉边璋是三星堆玉器中最有代表性的极品文物。器身两面线刻有祭祀图案，表现了庄严隆重的祭祀场面，为研究古蜀宗教祭祀礼仪提供了珍贵的资料。 该璋璋身图案分上下两幅，正反相对呈对称布局，每幅图案由五组构成：下方一组有两座山，两山外侧各插有一枚牙璋；第二组是三个跪坐的人像，头戴穹窿形帽，佩双环相套的耳饰，身着无袖短裙，两拳相抱，置于腹前；第三组是几何形图案；第四组又是两座山，两山中间有一略似船形的符号，两山外侧似有一人手握拳将拇指按捺在山腰；最上面的一组为三个并排站立的人像，人像头戴平顶冠，佩铃形耳饰，身着无袖短裙，双手作与第二组人像相同的动作。从图中山、山侧所插的璋、以及作拜祭状的人等情况分析，大体上可以推测该图所表现的正是所谓“山陵之祭”的隆重祭祀场面，而璋的祭祀用途尤其是作为祭山的用途也就彰显无疑了。",
    image: "/home/item04.png",
    details: {
      era: "中国历史学年代,商(前1600~前1046)",
      level: "一级",
      material: "玉石器、宝石",
      dimensions: "通长54.2，宽8.8，厚0.8厘米",
    },
  },
  {
    id: 5,
    title: "青铜神坛",
    description:
      "青铜神坛高41厘米，由三层组成，底层为三个跪坐人像，中层为四个站立人像，上层为一个圆形平台，平台上有一个高冠人头像。",
    image: "/home/item05.png",
  },
  {
    id: 6,
    title: "青铜太阳轮",
    description:
      "青铜太阳轮直径84厘米，中心为一个人面像，周围环绕着12个三角形光芒，象征着太阳神的形象。",
    image: "/home/item06.png",
  },
  {
    id: 7,
    title: "青铜面具",
    description:
      "青铜面具高40厘米，宽65厘米，是三星堆遗址出土的众多面具中保存最完好的一件。面具双目圆睁，鼻梁高挺，嘴角上扬，表情庄严肃穆。",
    image: "/home/item07.png",
  },
  {
    id: 8,
    title: "青铜人头像",
    description:
      "青铜人头像高28厘米，头戴高冠，面部特征鲜明，是三星堆文化中典型的人物形象。",
    image: "/home/item08.png",
  },
];

// 背景图片数组
const backgroundMasks = [
  "/home/background-masks/1.png",
  "/home/background-masks/2.png",
  "/home/background-masks/3.png",
  "/home/background-masks/4.png",
  "/home/background-masks/5.png",
  "/home/background-masks/6.png",
  "/home/background-masks/7.png",
  "/home/background-masks/8.png",
];

// 混合图层数组
const overlayMasks = [
  "/home/overlay-masks/1.png",
  "/home/overlay-masks/2.png",
  "/home/overlay-masks/3.png",
  "/home/overlay-masks/4.png",
  "null",
  "null",
  "null",
  "null",
];

export default function Collection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [shouldUpdateProgress, setShouldUpdateProgress] = useState(true);
  const [direction, setDirection] = useState(0); // 添加方向状态，1表示向右，-1表示向左
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideInterval = 5000; // 5秒切换一次

  // 获取前一个、当前和后一个展品的索引
  const getPrevIndex = () =>
    (currentIndex - 1 + collections.length) % collections.length;
  const getNextIndex = () => (currentIndex + 1) % collections.length;

  // 切换到下一个收藏品
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldUpdateProgress(false); // 暂停进度条更新
    setDirection(1); // 设置向右方向
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundMasks.length);
    setOverlayIndex((prevIndex) => (prevIndex + 1) % overlayMasks.length);
    setProgress(0);
  };

  // 切换到上一个收藏品
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldUpdateProgress(false); // 暂停进度条更新
    setDirection(-1); // 设置向左方向
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + collections.length) % collections.length
    );
    setBackgroundIndex(
      (prevIndex) =>
        (prevIndex - 1 + backgroundMasks.length) % backgroundMasks.length
    );
    setOverlayIndex(
      (prevIndex) => (prevIndex - 1 + overlayMasks.length) % overlayMasks.length
    );
    setProgress(0);
  };

  // 直接跳转到指定收藏品
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setShouldUpdateProgress(false); // 暂停进度条更新
    // 设置方向：如果目标索引大于当前索引，则向右；否则向左
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setBackgroundIndex(index % backgroundMasks.length);
    setOverlayIndex(index % overlayMasks.length);
    setProgress(0);
  };

  // 进度条和自动播放
  useEffect(() => {
    // 清除之前的定时器
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // 只有在非动画状态下才更新进度条和设置自动播放
    if (!isAnimating) {
      // 设置进度条更新
      const progressStep = 100 / (slideInterval / 100); // 每100ms更新一次
      progressIntervalRef.current = setInterval(() => {
        if (shouldUpdateProgress) {
          setProgress((prev) => {
            if (prev >= 100) {
              return 0;
            }
            return prev + progressStep;
          });
        }
      }, 100);

      // 设置自动播放
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, slideInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isAnimating, shouldUpdateProgress]);

  // 动画完成后重置状态
  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setShouldUpdateProgress(true); // 恢复进度条更新
  };

  return (
    <div className="w-full h-dvh flex overflow-hidden bg-black text-white">
      {/* 左侧展示区域 */}
      <div className="flex-1 relative flex items-center justify-center pt-16">
        {/* 三个展品展示区域 */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* 展品轮播区域 - 使用整体滑动效果 */}
          <div className="relative w-full h-full">
            {/* 使用AnimatePresence包裹整个滑动容器 */}
            <AnimatePresence initial={false} custom={direction}>
              {/* 创建一个包含三个展品的容器，整体移动 */}
              <motion.div
                key={`carousel-${currentIndex}`}
                className="absolute inset-0 flex items-center justify-center"
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? "33%" : "-33%",
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction: number) => ({
                    x: direction > 0 ? "-33%" : "33%",
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={handleAnimationComplete}
              >
                {/* 展品容器 */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* 左侧展品 */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 w-1/4 h-3/5 opacity-50 z-10">
                    <div className="relative w-full h-full">
                      <Image
                        src={collections[getPrevIndex()].image}
                        alt={collections[getPrevIndex()].title}
                        fill
                        className="object-contain filter blur-[1px]"
                      />
                    </div>
                  </div>

                  {/* 中间展品 */}
                  <div className="relative w-3/5 h-4/5 z-20">
                    <div className="relative w-full h-full">
                      <Image
                        src={collections[currentIndex].image}
                        alt={collections[currentIndex].title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* 右侧展品 */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-1/4 h-3/5 opacity-50 z-10">
                    <div className="relative w-full h-full">
                      <Image
                        src={collections[getNextIndex()].image}
                        alt={collections[getNextIndex()].title}
                        fill
                        className="object-contain filter blur-[1px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 分页指示器 - 移到左侧底部，确保不被遮挡 */}
        <div className="absolute bottom-8 left-8 flex flex-col space-y-4 z-30">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-6 flex items-center justify-center transition-all group relative ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-transparent hover:bg-white/10"
              }`}
              disabled={isAnimating}
            >
              <span
                className={`absolute inset-0 border ${
                  currentIndex === index
                    ? "border-white"
                    : "border-transparent group-hover:border-white/50"
                }`}
              ></span>
              <span
                className={`text-xs ${
                  currentIndex === index ? "text-black" : "text-white"
                }`}
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 右侧信息区域 */}
      <div className="flex-1 h-full relative flex flex-col items-center justify-center">
        {/* 背景图层 */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${backgroundIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={backgroundMasks[backgroundIndex]}
                alt="背景"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 混合图层 */}
        <div className="absolute inset-0 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`overlay-${overlayIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-1/2 h-[80%] right-4 bottom-0"
            >
              {overlayMasks[overlayIndex] !== "null" && (
                <Image
                  src={overlayMasks[overlayIndex]}
                  alt="混合图层"
                  fill
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 内容区域 */}
        <div className="relative z-20 px-12 py-8 flex flex-col items-start justify-center">
          <div className="mt-20">
            <div className="flex items-center ml-4 mb-16">
              <div className="h-px w-8 bg-[#FFF0BD]"></div>
              <h2
                className={`text-4xl mx-4 text-[#FFF0BD] font-medium ${notoSerifSC.className}`}
              >
                欣赏不容错过的必看馆藏
              </h2>
              <div className="h-px w-8 bg-[#FFF0BD]"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1
                  className={`text-4xl font-bold mb-6 ${notoSerifSC.className}`}
                >
                  {collections[currentIndex].title}
                </h1>
                <p className="text-lg text-gray-300 mb-16 max-w-xl line-clamp-3">
                  {collections[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* 带进度条的切换按钮 */}
            <div className="flex items-center space-x-6 mb-32">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors relative"
                disabled={isAnimating}
              >
                <span className="absolute inset-0 rounded-full border border-white"></span>
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors relative"
                disabled={isAnimating}
              >
                <span className="absolute inset-0 rounded-full bg-black/20 "></span>
                {/* 进度条 */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="27"
                    fill="none"
                    strokeWidth="1"
                    stroke="white"
                    strokeDasharray={`${progress * 1.7} 170`}
                    className="transition-all duration-100"
                  />
                </svg>
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>
            </div>

            <Link
              href="/collection"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
