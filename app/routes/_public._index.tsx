import type { V2_MetaFunction } from "@remix-run/node";
import Intro from "~/components/views/intro";
import Intro_PartTwo from "~/components/views/intro_PartTwo";
import InNumbers from "~/components/views/inNumbers";
import Feature from "~/components/views/feature";
import { motion, useTransform, useScroll } from "framer-motion";
import Enhance from "~/components/views/enhance";
import Ticker from "~/components/views/ticker";
import CallToAction from "~/components/views/cta";
import NewsLetter from "~/components/views/newsLetter";
import Publication from "~/components/views/publication";
import { useEffect, useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kurs Pisania" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

/* const useMobileViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Dostosuj wartość do swoich potrzeb
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
};


const isMobile = useMobileViewport(); */

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Dostosuj wartość do swoich potrzeb
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const { scrollYProgress } = useScroll();
  //                                           0, 0.2, 1    0   -60 -660
  //                                           0, 60, 60    0, 120, 120 + 0. -660. -660    0, -660, -660

  const tiltX = useTransform(scrollYProgress, [0, 20], [0, 170]); // Przechylanie w lewo i w prawo
  const tiltY = useTransform(scrollYProgress, [0, 1], 
   isMobile ? [0, 850] : [0, 380]
    ); // Dostosuj wartość, jeśli potrzebujesz inny stopień odchylania na osi Y
  const scalEX = useTransform(scrollYProgress, [0, 1], [1, 2]); // Dostosuj wartość, aby zwężać obraz wzdłuż osi X
  const transY = useTransform(scrollYProgress, [0, 1], [0, -0.5]);
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const perspectiveVal = useTransform(scrollYProgress, [0, 1], [1, 200]);
  const rotateNameX = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scaleNameY = useTransform(scrollYProgress, [0, 1], [1, 10]);
  
  const scaleEXName = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const transYName = useTransform(scrollYProgress, [0, 1], [0, -70]);
  
  const scaleTowAndBlogY = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const scaleEXTownAndBlogName = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const transYTownAndBlog = useTransform(scrollYProgress, [0, 1], [0, -430]);
  const skewYTownAndBlog = useTransform(scrollYProgress, [0, 1], [0, -0.5]);
  

  return (
    <div className="grid grid-flow-row grid-cols-1 overflow-hidden">
      <motion.div className="bg-cover bg-hero-pattern sm:bg-contain sm:bg-no-repeat xs:bg-right-bottom" style={{ perspective: perspectiveVal, rotate: '0deg', skewY: skewY, rotateY: '0deg', scaleX: scalEX, translateZ: '0px', translateX: '0px', translateY: transY,  rotateX: tiltY, transformOrigin: "bottom"}}>
        <motion.header className="flex flex-col  justify-center items-center h-screen">
            <motion.h1 className="text-8xl mb-2 mt-auto text-magenta tracking-tighter drop-shadow-2xl xs:text-3xl" style={{ perspective: perspectiveVal, rotateY: '0deg', scaleX: scaleEXName, scaleY: scaleNameY, translateZ: '0px', translateX: '0px', translateY: transYName,  rotateX: rotateNameX, transformOrigin: "bottom"}}>Amelia Pudzianowska&#8482;</motion.h1>
            <h1 className="text-4xl mt-2 font-thin text-magenta xs:text-xl">Przedstawia:</h1>
            <motion.h2 className="text-1 mt-auto font-extralight text-magenta mb-7 drop-shadow xs:text-base" style={{ perspective: perspectiveVal, rotateY: '0deg', scaleX: scaleEXTownAndBlogName, skewY: skewYTownAndBlog, scaleY: scaleTowAndBlogY, translateZ: '0px', translateX: '0px', translateY: transYTownAndBlog,  rotateX: rotateNameX, transformOrigin: "bottom"}}>2023 Radom | blog & kurs</motion.h2>
        </motion.header>
      </motion.div>
      <Intro />
      <Intro_PartTwo />
      <Ticker />
      <Feature />
      <Publication />
      <Enhance />
      <InNumbers />
      <CallToAction />
      <NewsLetter />
    </div>
  );
}

//bg-position: 90% center, bacground-size: 298%, bacground-repeat: no-repeat