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
import LiteraryAchievments from "~/components/views/literaryAchievments";
import VisitMyBlog from "~/components/views/visitMyBlog";

export default function Example() {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
    });


    const butterflyOpacity = useTransform(scrollYProgress, [0.33, 1], [1, 1]);
    const butterFlyX = useTransform(scrollYProgress, [0.33, 0.38, 0.45, 0.65, 0.83, 1], [100, -200, 100, 1800, 1800, -50]);
    const butterFlyY = useTransform(scrollYProgress, [0.33, 0.38, 0.45, 0.65, 0.83, 1], [100, -200, 0, 0, -100, 0]);
    const butterFlyRotate = useTransform(scrollYProgress, [0.35, 0.4], [0, 10]);
    const butterFlyScale = useTransform(scrollYProgress, [0.35, 0.367, 0.44, 0.45, 0.66, 1], [0, 0.65, 0.65, 0, 0, 0.65]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })
    

    return (
        <div ref={targetRef} className="bg-mimi-pink">
            <motion.img
            src={motyl}
            className="w-20 h-20 z-50 opacity-90 fixed top-1/2 left-1/2"
                style={{ translateX: butterFlyX, translateY: butterFlyY, rotateY: scrollY, opacity: butterflyOpacity, scale: butterFlyScale }}
            />
            <TrippyScrollEffectThree />
            <LiteraryAchievments />
            <CarouselExample />
            <VisitMyBlog />
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