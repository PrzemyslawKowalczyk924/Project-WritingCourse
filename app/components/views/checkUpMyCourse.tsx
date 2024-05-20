import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import kocha from "../../../public/images/kocha.jpg";
import napisacWiersz from "../../../public/images/napisacWiersz.jpg";
import doSyreny from "../../../public/movies/Do syreny film.mp4";
import dziewcze from "../../../public/images/dziewcze.svg";
import szkielet1 from "../../../public/images/szkielet-1.svg";
import szkielet2 from "../../../public/images/szkielet-2.svg";
import spider from "../../../public/images/spider.svg";
import tv from "../../../public/images/television.svg";

export default function CheckUpMyCourse() {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return (
        <section ref={targetRef} className="text-gray-600 body-font h-[300vh] bg-cherry-pink z-30 relative shadowForBox ">
            <div className="sticky top-0 max-w-commonLayout w-full h-screen m-auto flex px-5 py-24 md:flex-row flex-row justify-center items-center">
                <img src={dziewcze} className="absolute top-10 left-3/4" />
                <img src={tv} className="absolute bottom-0 left-0" />
                <div className="flex flex-col items-start justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-12">
                    <video autoPlay muted loop className="tv-screen mt-5 opacity-90" src={doSyreny} />
                    {/* <img src={napisacWiersz} className="grayscale flubber opacity-90" /> */}
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
                    <h1 className="text-10xl text-gray-900 m-auto tracking-tighter font-medium leading-tight">Napisz</h1>
                    <h2 className="text-6xl text-gray-900 m-auto tracking-tighter font-black mb-9">historię marzeń</h2>
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Kurs</h1> */}
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <button className="text-white bg-gray-800 hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">KURS</button>
                    {/* <div className="flex justify-center">
                    </div> */}
                </div>
            </div>
        </section>
    )
}