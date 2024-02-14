import CarouselExample from "~/components/views/carousel";
import TrippyScrollEffect from "~/components/views/newHero";
import TrippyScrollEffectTwo from "~/components/views/newHeroTwo";
import TrippyScrollEffectThree from "~/components/views/newHeroThree";
import { useTransform, useScroll, motion, useMotionValue, MotionValue, useMotionValueEvent, easeOut } from "framer-motion";
import motyl from '../../public/icons/butterflySVG.svg';
import wiersz from '../../public/images/wiersz.png';
import { useRef, ReactNode } from "react";
import ShuffleHero from "~/components/views/shuffleHero";
import { Card } from 'flowbite-react';
import doSyreny from '../../public/movies/Do syreny film.mp4';
import doPołowy_1 from '../../public/images/doPołowy-1.svg';
import doPołowy_2 from '../../public/images/doPołowy-2.svg';
import doPołowy_3 from '../../public/images/doPołowy-3.svg';
import doPołowy_4 from '../../public/images/doPołowy-4.svg';
import LiteraryAchievments from "~/components/views/literaryAchievments";

export default function Example() {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
    });


    const butterflyOpacity = useTransform(scrollYProgress, [0, 0.6, 0.80, 1], [0, 1, 1, 1]);
    const butterFlyX = useTransform(scrollYProgress, [0.57, 0.6, 0.65, 0.70, 0.75, 0.78, 0.80, 0.85, 1], [0, -10, -60, -120, -150, -20, 6, 70, 180]);
    const butterFlyY = useTransform(scrollYProgress, [0.51, 0.6, 0.65, 0.70, 0.75, 0.80, 0.85, 1], [0, 0, -100, 100, 200, 500, 700, 520]);
    const butterFlyRotate = useTransform(scrollYProgress, [0.5, 0.6, 0.65, 0.70, 0.75, 0.80, 0.85, 1], [15, 0, 25, 0, 45, 0, 55, 0]);
    const butterFlyScale = useTransform(scrollYProgress, [0.58, 0.6, 0.65, 0.70, 0.75, 0.80, 0.85, 1], [0, 0, 1, 0.5, 0.5, 0.5, 0.5, 0.5]);

    /* useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    }) */
    
    const imageOneRotate = useTransform(scrollYProgress, [0.75, 1], [-15, 0]);
    const imageTwoRotate = useTransform(scrollYProgress, [0.75, 1], [15, 0]);
    const imageThreeRotate = useTransform(scrollYProgress, [0.75, 1], [-15, 0]);
    const imageFourRotate = useTransform(scrollYProgress, [0.75, 1], [15, 0]);
    
    const imageOneX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [-10, -25, 0, -15, -15, 40]);
    const imageOneY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [10, -25, 15, -15, -15, 44]);
    
    const imageTwoX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [-10, -25, 0, -15, -15, -16]);
    const imageTwoY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [10, -25, 15, -15, -15, -1]);
    
    const imageThreeX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [-10, -25, 0, -15, -15, 80]);
    const imageThreeY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [10, -25, 15, -15, -15, -62]);
    
    const imageFourX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [-10, -25, 0, -15, -15, -56]);
    const imageFourY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.75, 1], [10, -25, 15, -15, -15, -105]);

    return (
        <div /* ref={targetRef} */ className="bg-mimi-pink ">
            <TrippyScrollEffectThree />
            <motion.img
            src={motyl}
            className="w-20 h-20 m-auto z-50 opacity-90"
                style={{ translateX: butterFlyX, translateY: butterFlyY, rotateY: scrollY, opacity: butterflyOpacity, scale: butterFlyScale }}
            />
            <LiteraryAchievments />
            <CarouselExample />
        </div>
    )
}
{/* <video autoPlay muted controls className="video object-cover object-center rounded-sm w-full h-full opacity-1" src={doSyreny}/> */}
{/*  <TrippyScrollEffect /> */}
{/* <ShuffleHero /> */}
{/* <CarouselExample /> */}
{/* <motion.img src={kartkaPapieru} className="h-96 w-96 rounded-sm shadow-2xl z-0 opacity-100 absolute"/>
<h2 className="text-xl font-normal text-gray-950 drop-shadow xs:text-base mb-10">Do połowy</h2>
<h2 className="text-xl font-normal text-gray-950 drop-shadow xs:text-base ">jestem czlowiek do połowy<br/>pół mam ręki pół mam głowy<br/>taka dziwna smutna dzika<br/>pół mam stopy pół języka<br/>wciąż narzekam płaczę stale<br/>pół wątroby serca wcale</h2> */}