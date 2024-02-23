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
import MainPageBlog from "~/components/views/mainPageBlog";
import CheckUpMyCourse from "~/components/views/checkUpMyCourse";
import FindMeAlso from "~/components/views/findMeAlso";

export default function Example() {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
    });


    const butterflyOpacity = useTransform(scrollYProgress, [0.172, 0.173, 0.369, 0.37, 0.461, 0.462, 1], [0, 1, 1, 0, 0, 1, 1]);
    const butterFlyX = useTransform(scrollYProgress, [0.16, 0.18, 0.21, 0.462, 0.51, 0.57, 1], [-37, 20, 400, -37, 60, -40, 20]);
    const butterFlyY = useTransform(scrollYProgress, [0.16, 0.51, 1], [0, 170, 20]);
    const butterFlyRotate = useTransform(scrollYProgress, [0.16, 1], [0, 20]);
    const butterFlyScale = useTransform(scrollYProgress, [0.16, 0.18, 0.21, 0.31, 0.32, 0.349, 0.35, 0.462, 1], [0.5, 0.5, 0, 0, 0.5, 0.5, 0, 0.5, 0.5]);

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
            <MainPageBlog />
            <CheckUpMyCourse />
            <FindMeAlso />
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