import type { V2_MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import Intro from "~/components/intro";
import Footer from "~/components/footer";
import Intro_PartTwo from "~/components/intro_PartTwo";
import InNumbers from "~/components/inNumbers";
import Feature from "~/components/feature";
import { motion, useTransform, useScroll } from "framer-motion";
import fota from '../../public/images/heroBackground.png'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kurs Pisania" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { scrollYProgress } = useScroll();
  //                                           0, 0.2, 1    0   -60 -660
  //                                           0, 60, 60    0, 120, 120 + 0. -660. -660    0, -660, -660

  const tiltX = useTransform(scrollYProgress, [0, 20], [0, 170]); // Przechylanie w lewo i w prawo
  const tiltY = useTransform(scrollYProgress, [0, 1], [0, 380]); // Dostosuj wartość, jeśli potrzebujesz inny stopień odchylania na osi Y
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
    <div className="grid grid-flow-row grid-cols-1 overflow-hidden ">
      <Navigation colSpan="" />
      <motion.div className="bg-cover bg-hero-pattern" style={{ perspective: perspectiveVal, rotate: '0deg', skewY: skewY, rotateY: '0deg', scaleX: scalEX, translateZ: '0px', translateX: '0px', translateY: transY,  rotateX: tiltY, transformOrigin: "bottom"}}>
        <motion.header className="flex flex-col  justify-center items-center h-screen" style={{ }}>
            <motion.h1 className="text-8xl mb-2 mt-auto text-magenta tracking-tighter drop-shadow-2xl" style={{ perspective: '1200px', rotateY: '0deg', scaleX: scaleEXName, scaleY: scaleNameY, translateZ: '0px', translateX: '0px', translateY: transYName,  rotateX: rotateNameX, transformOrigin: "bottom"}}>Amelia Pudzianowska</motion.h1>
            <h1 className="text-4xl mt-2 font-thin text-magenta">Przedstawia:</h1>
            <motion.h2 className="text-1 mt-auto font-extralight text-magenta mb-7 drop-shadow" style={{ perspective: '1200px', rotateY: '0deg', scaleX: scaleEXTownAndBlogName, skewY: skewYTownAndBlog, scaleY: scaleTowAndBlogY, translateZ: '0px', translateX: '0px', translateY: transYTownAndBlog,  rotateX: rotateNameX, transformOrigin: "bottom"}}>2023 Radom | blog & kurs</motion.h2>
        </motion.header>
      </motion.div>
      <Intro />
      <Intro_PartTwo />
      <Feature />
      <InNumbers />
      <Footer />
    </div>
  );
}
