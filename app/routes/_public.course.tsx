import CarouselExample from "~/components/views/carousel";
import TrippyScrollEffect from "~/components/views/newHero";
import TrippyScrollEffectTwo from "~/components/views/newHeroTwo";
import TrippyScrollEffectThree from "~/components/views/newHeroThree";
import { useTransform, useScroll, motion, MotionValue, useMotionValueEvent, easeOut } from "framer-motion";
import motyl from '../../public/icons/butterflySVG.svg';
import { useRef, ReactNode } from "react";

export default function Example() {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const butterFlyX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.98, 1], [10, 20, 30, 40, 50, 6, 70, 80]);
    const butterFlyY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.4, 0.5, 0.75, 0.76, 1], [-220, -190, -230, -210, -210, -225, -2280, -220]);
    const butterFlyRotate = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.4, 0.5, 0.75, 0.76, 1], [1, 0, 1, 0, 1, 0.1, 0.5, 1.2]);


    return (
        <div ref={targetRef} className="bg-white">
            <TrippyScrollEffectThree />
            <div className=" z-0 h-[200vh] bg-lavenda-pink">
                <motion.img
                    src={motyl}
                    className="w-40 h-40 m-auto z-50 opacity-90"
                    transition={{ type: "spring", stiffness: 50, damping: 2, restDelta: 0.001 }}
                    style={{ translateX: butterFlyX, translateY: butterFlyY, /* rotate: butterFlyRotate */ }}
                />
                <div className="flex h-screen justify-center items-center flex-wrap flex-col">
                </div>
            </div>
        </div>
    )
}