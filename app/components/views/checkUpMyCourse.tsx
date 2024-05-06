import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import kocha from "../../../public/images/kocha.jpg";
import napisacWiersz from "../../../public/images/napisacWiersz.jpg";
import doSyreny from "../../../public/movies/Do syreny film.mp4";

export default function CheckUpMyCourse() {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return (
        <section ref={targetRef} className="text-gray-600 body-font h-[300vh] bg-cherry-pink z-30 relative shadowForBox">
            <div className="sticky top-0 max-w-commonLayout w-full h-screen m-auto flex px-5 py-24 md:flex-row flex-row justify-center items-center">
                <div className="flex flex-col items-start justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-8">
                    <video autoPlay muted loop className="rounded-sm mt-14 mb-7" src={doSyreny} />
                    <img src={napisacWiersz} className=" shadow-2xl grayscale" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
                    <h1 className="text-10xl text-gray-900 m-auto tracking-tighter font-medium leading-tight shadowForHero">Napisz</h1>
                    <h2 className="text-6xl text-gray-900 m-auto tracking-tighter font-black mb-9 shadowForHero">historię marzeń</h2>
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Kurs</h1> */}
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <button className="text-white bg-gray-800 hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Więcej</button>
                    {/* <div className="flex justify-center">
                    </div> */}
                </div>
            </div>
        </section>
    )
}