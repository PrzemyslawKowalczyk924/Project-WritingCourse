import { useRef } from "react";
import { useScroll } from "framer-motion";
import doorsToBlog from '../../../public/images/doorsToBlog.png';``
import typeWriterMachine from '../../../public/movies/typewriter2.mp4';
import poem from '../../../public/movies/Do syreny film.mp4';
import kocha from '../../../public/images/kocha.jpg';
import licencja from '../../../public/images/licencja.jpg';
import pokolenie from '../../../public/images/pokolenie.jpg';

export default function VisitMyBlog() {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    /* transform: translateY(276px) translateX(-426px) rotate(348deg); */

    return (
        <section ref={targetRef} className="relative text-gray-600 body-font h-[300vh] bg-lavenda-pink z-0">
            {/* <video autoPlay muted loop className="video object-cover object-center rounded-sm w-full h-full absolute opacity-10" src={poem} /> */}
            <div className="sticky top-0 z-20 h-screen max-w-commonLayout mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="max-w-commonLayout lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
                    <div className="absolute font-black text-12xl text-cherry-pink scale-550 -rotate-12 -translate-y-8">&#66;</div>
                    <div className="absolute font-black text-12xl text-cherry-pink scale-400 rotate-12 -translate-y-8 translate-x-35rem">&#76;</div>
                    <div className="absolute font-black text-12xl text-cherry-pink scale-200 rotate-12 -translate-y-1 translate-x-40rem">&#79;</div>
                    <div className="absolute font-black text-12xl text-cherry-pink scale-200 rotate-12 translate-y-60 translate-x-55rem">&#71;</div>
                    {/* <img className="object-cover object-center shadow-2xl rounded-full w-96 h-96 opacity-75" alt="hero" src={kocha} /> */}
                    {/* <div className="font-black text-12xl opacity-100 text-cherry-pink scale-300 -rotate-12">&#7838;</div> */}
                </div>
                <div className="relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-end items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Stuk-puk!</h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Blog</button>
                    </div>
                </div>
            </div>
        </section>
    )
}