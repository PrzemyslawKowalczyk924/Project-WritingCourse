import CarouselExample from "~/components/views/carousel";
import TrippyScrollEffect from "~/components/views/newHero";
import TrippyScrollEffectTwo from "~/components/views/newHeroTwo";
import TrippyScrollEffectThree from "~/components/views/newHeroThree";
import { useTransform, useScroll, motion, useMotionValue, MotionValue, useMotionValueEvent, easeOut } from "framer-motion";
import motyl from '../../public/icons/butterflySVG.svg';
import { useRef, ReactNode } from "react";

export default function Example() {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
    });

   
    const butterflyOpacity = useTransform(scrollYProgress, [0, 0.58, 0.60, 1], [0, 0, 1, 1]);
    const butterFlyX = useTransform(scrollYProgress, [0.57, 0.6, 0.65, 0.70, 0.75, 0.78, 0.80, 0.85, 1], [0, -30, -60, -120, -150, -20, 6, 70, 180]);
    const butterFlyY = useTransform(scrollYProgress, [0.51, 0.6, 0.65, 0.70, 0.75, 0.80, 0.85, 1], [-500, -150, -100, 100, 200, 500, 700, 520]);
    const butterFlyRotate = useTransform(scrollYProgress, [0.5, 0.6, 0.65, 0.70, 0.75, 0.80, 0.85, 1], [15, 0, 25, 0, 45, 0, 55, 0]);
    const butterFlyScale = useTransform(scrollYProgress, [0.58, 0.6, 0.65, 0.70, 0.75, 0.80, 0.85, 1], [0.1, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })

    return (
        <div ref={targetRef} className="bg-white">
            <TrippyScrollEffectThree />
            <div  className="z-0 h-[200vh] bg-lavenda-pink">
                <motion.img
                    src={motyl}
                    className="w-40 h-40 m-auto z-50 opacity-90"
                    /* transition={{ type: "spring", stiffness: 50, damping: 2, restDelta: 0.001 }} */
                    style={{ translateX: butterFlyX, translateY: butterFlyY, rotateY: scrollY, opacity: butterflyOpacity, scale: butterFlyScale}}
                />
                <div className="flex h-screen justify-center items-center flex-wrap flex-col">
                </div>
            </div>
        </div>
    )
}