import { useEffect, useState } from "react";
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";

export default function Hero() {

  const { scrollYProgress } = useScroll();
  //                                           0, 0.2, 1    0   -60 -660
  //                                           0, 60, 60    0, 120, 120 + 0. -660. -660    0, -660, -660
  const useMobileViewport = () => {
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
  const isMobile = useMobileViewport();

  /*   const tiltY = useTransform(scrollYProgress, [0, 1],
      isMobile ? [0, 850] : [0, 380]); // Dostosuj wartość, jeśli potrzebujesz inny stopień odchylania na osi Y */

  const tiltY = useTransform(scrollYProgress, [0, 0.0685], [0, 85]); // Dostosuj wartość, jeśli potrzebujesz inny stopień odchylania na osi Y
  const transY = useTransform(scrollYProgress, [0, 0.0691], [0, -0.5]);
  const perspectiveVal = useTransform(scrollYProgress, [0, 1], [1, 200]);

  const scaleNameY = useTransform(scrollYProgress, [0, 0.0190, 0.0302, 0.0380, 0.0425, 0.0546, 0.0606, 0.065, 0.0685], [1, 1.25, 1.65, 1.95, 2.25, 3.75, 5.25, 7.7, 15]);
  const scaleNameYShadow = useTransform(scrollYProgress, [0, 0.0190, 0.0302, 0.0380, 0.0425, 0.0546, 0.0606, 0.065, 0.0685], [0, 0.95, 0.89, 0.80, 0.72, 0.64, 0.58, 0.48, 0.40]);
  const scaleEXName = useTransform(scrollYProgress, [0.046, 0.067, 0.0691], [0.99, 0.991, 1]);

  const rotateXShadow = useTransform(scrollYProgress, [0.046, 0.067, 0.0691], [0, 0.991, 1.57007]);


  const blurValue = useTransform(scrollYProgress, [0, 0.0966], ['0px', '2px']);
  const filter = useTransform(blurValue, value => `blur(${value})`);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  })
  return (
    <section id="course_Hero" className="min-h-screen brickWall z-20 relative">
      <motion.div className="absolute w-full h-full bg-hero-pattern bg-cover xs:bg-right-bottom z-0" style={{ perspective: perspectiveVal, translateY: transY, rotateX: tiltY, transformOrigin: "bottom" }}>
        <motion.header className="absolute top-0 right-0 left-0 flex flex-col  justify-center items-center h-screen">
          <motion.h1 className="relative text-5xl mb-2 mt-auto text-magenta tracking-tighter drop-shadow-2xl xs:text-3xl" style={{ perspective: perspectiveVal, scaleX: scaleEXName, scaleY: scaleNameY, transformOrigin: "bottom" }}>
            Amelia Pudzianowska&#8482;
            <motion.h1 className="absolute blur-[1px] opacity-85 top-0 left-0 -z-10 text-5xl mb-2 mt-auto text-gray-500 tracking-tighter xs:text-3xl" style={{ translateY: '-3px', scaleX: scaleEXName, scaleY: scaleNameYShadow, rotateX: rotateXShadow, transformOrigin: "bottom" }}>
              Amelia Pudzianowska&#8482;
            </motion.h1>
          </motion.h1>
          <motion.h1 className="text-3xl mt-2 font-thin text-magenta xs:text-xl" >Przedstawia:</motion.h1>
          <motion.h2 className="relative text-lg mt-auto font-extralight text-magenta mb-7 xs:text-base" style={{ scaleX: scaleEXName, scaleY: scaleNameY, transformOrigin: "bottom" }}>
            2023 Radom | blog & kurs
            <motion.h2 className="absolute top-0 left-0 -z-10 blur-[1px] text-lg mt-auto font-extralight text-magenta mb-7 xs:text-base" style={{ translateY: '-3px', scaleX: scaleEXName, scaleY: scaleNameYShadow, rotateX: rotateXShadow, transformOrigin: "bottom" }}>
              2023 Radom | blog & kurs
            </motion.h2>
          </motion.h2>
        </motion.header>
      </motion.div>
    </section>
  );
};