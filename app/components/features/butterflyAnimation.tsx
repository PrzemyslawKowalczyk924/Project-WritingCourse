import { useTransform, useScroll, motion, MotionValue, useMotionValueEvent, easeOut } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

import motyl from '../../../public/icons/butterflySVG.svg';

interface SectionProps {
    background: string;
    children: ReactNode;
    rotate: MotionValue<string>;
}

const ButterflyAnimation = () => {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

  
    
    
    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, 0, 0, 10, 10, 10, 10, 0.9]);
    
    const imageOneX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 1], [-10, -25, 0, -15, 0, -15, 0]);
    const imageOneY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [10, -25, 15, -15, 15, -15, -15, 15]);
    const imageOneRotate = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 1], [5, -25, 0, -15, 0, -15, 0]);
   
    const inkImageX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.56, 0.6, 0.75, 0.76, 1], [0, 6, 4, 4, 7, 3, 7, 6]);
    const inkImageY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, -41, -44, -82, -45, -78, -45, 370]);
    const inkScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, 0.5, 0.5, 0.5, 0.6, 0.75, 1, 0.4]);
    const inkImageRotate = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 0.8, 0.9, 1], [0, 0, 0, 0, 7, 7, -17, 17, -17, 17]);
    const splashOfInkOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.98, 1], [0, 0, 0, 0, 0, 0, 0, 10]);
    const splashOfInkScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.4, 0.5, 0.75, 0.76, 1], [0, 0, 0, 0, 0, 0.1, 0.5, 1.2]);

 

    const NUM_SECTION = 10;
    const PADDING = `${100 / NUM_SECTION / 2}vmin`;

    /* const motionScroller = () => {
        
        
    }

    motionScroller(); */

    const generateSections = (count, color, rotate) => {
        if (count === NUM_SECTION) {
            return <></>;
        }

        const nextColor = color === "black" ? "white" : "black";

        return (
            <Section rotate={rotate} background={color}>
                {generateSections(count + 1, nextColor, rotate)}
            </Section>
        )

    }

    const Trippy = () => {
        return <div className="absolute inset-0 overflow-hidden bg-black">
            {generateSections(0, "black", rotate)}
        </div>
    }

    const Section: React.FC<SectionProps> = ({ background, children, rotate }) => {
        return (
            <motion.div
                className="relative h-full w-full origin-centrt "
                style={{ background, rotate, padding: PADDING }} >
                {children}
            </motion.div >
        )
    }

    return (
        <section ref={targetRef} className="bg-lavenda-pink relative z-0 h-[300vh]">
            <motion.div className="sticky top-0 h-screen z-20">
                <motion.header className="flex flex-col justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center mt-auto">
                        <motion.img /* ref={targetReference} */ src={} className="h-24 w-24 mr-20 mt-48" style={{ translateX: imageOneX, translateY: imageOneY, rotate: imageOneRotate }} alt="fotka2" />
                    </div>
                    <motion.h1 className="text-8xl mb-2 pt-11 mt-auto text-magenta tracking-tighter drop-shadow-2xl xs:text-3xl">Amelia Pudzianowska&#8482;</motion.h1>
                    <h1 className="text-4xl mt-2 mb-20 font-thin text-magenta xs:text-xl">Przedstawia:</h1>
                    <div className="flex flex-col justify-center items-center">
                        <motion.img src={} className="w-14 h-14" alt="fotka4" style={{opacity: splashOfInkOpacity, scale: splashOfInkScale}} />
                    </div>
                    <motion.h2 className="text-1 mt-auto font-extralight text-magenta mb-7 drop-shadow xs:text-base">2023 Radom | blog & kurs</motion.h2>
                </motion.header>
            </motion.div>
        </section>
    )
}

export default ButterflyAnimation;