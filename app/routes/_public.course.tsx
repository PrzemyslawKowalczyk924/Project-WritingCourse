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

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })
    
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
        <div ref={targetRef} className="bg-mimi-pink ">
            <TrippyScrollEffectThree />
            <motion.div className="relative h-[300vh] z-20 max-w-commonLayout mx-auto">
                <motion.header className="sticky top-0 h-screen flex flex-row flex-wrap z-0   justify-between">
                    <div className="w-1/2 h-1/2 flex flex-row flex-wrap justify-center items-center my-auto">
                        <h1 className="text-9xl font-semibold tracking-tighter drop-shadow-2xl xs:text-3xl text-gray-950 mx-auto mt-9">Dorobek</h1>
                        <h1 className="text-9xl font-semibold tracking-tighter drop-shadow-2xl xs:text-3xl text-gray-950 mx-auto mb-9">Literacki</h1>
                        <h2 className="text-base font-extralight text-gray-950 drop-shadow xs:text-base">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
                        <h2 className="text-base font-extralight text-gray-950 drop-shadow xs:text-base">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h2>
                    </div>
                    <div className="flex flex-col flex-wrap justify-center items-center">
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <motion.img src={doPołowy_1} className="z-0 opacity-100" style={{ translateX: imageOneX, translateY: imageOneY, rotate: imageOneRotate }}/>
                            <motion.img src={doPołowy_2} className="z-0 opacity-100" style={{ translateX: imageTwoX, translateY: imageTwoY, rotate: imageTwoRotate }}/>
                        </div>
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <motion.img src={doPołowy_4} className="z-0 opacity-100" style={{ translateX: imageThreeX, translateY: imageThreeY, rotate: imageThreeRotate }}/>
                            <motion.img src={doPołowy_3} className="z-0 opacity-100" style={{ translateX: imageFourX, translateY: imageFourY, rotate: imageFourRotate }}/>
                        </div>
                        <button type="submit" className="flex-none mx-auto rounded-md bg-cherry-pink px-3.5 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Więcej</button>
                    </div>
                </motion.header>
            </motion.div>
        </div>
    )
}
{/* <video autoPlay muted controls className="video object-cover object-center rounded-sm w-full h-full opacity-1" src={doSyreny}/> */}
{/*  <TrippyScrollEffect /> */}
{/* <ShuffleHero /> */}
{/* <CarouselExample /> */}
{/* <motion.img
src={motyl}
className="w-20 h-20 m-auto absolute top-6 z-50 opacity-90"
    transition={{ type: "spring", stiffness: 50, damping: 2, restDelta: 0.001 }}
    style={{ translateX: butterFlyX, translateY: butterFlyY, rotateY: scrollY, opacity: butterflyOpacity, scale: butterFlyScale }}
/> */}
{/* <motion.img src={kartkaPapieru} className="h-96 w-96 rounded-sm shadow-2xl z-0 opacity-100 absolute"/>
<h2 className="text-xl font-normal text-gray-950 drop-shadow xs:text-base mb-10">Do połowy</h2>
<h2 className="text-xl font-normal text-gray-950 drop-shadow xs:text-base ">jestem czlowiek do połowy<br/>pół mam ręki pół mam głowy<br/>taka dziwna smutna dzika<br/>pół mam stopy pół języka<br/>wciąż narzekam płaczę stale<br/>pół wątroby serca wcale</h2> */}