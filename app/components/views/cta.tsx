import motyl from '../../../public/icons/butterflySVG.svg';
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../components/features/use-follow-pointer";


export default function CallToAction() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
        const componentRect = e.currentTarget.getBoundingClientRect();
        setCursor({
            x: e.clientX - componentRect.left,
            y: e.clientY - componentRect.top,
        });
    };

    return (
        <section id='ctaId' className="bg-ctaBackground-pattern bg-cover bg-fixed bg-no-repeat bg-center h-screen dark:bg-gray-900 min-h-3/4 z-10 relative flex justify-center items-center flex-col">
            {/* <img className='absolute w-96 h-96 top-auto left-0 opacity-50 -z-50' src={slonecznik13} /> */}
            <div className='absolute  w-full h-full top-0'>
                <div className='absolute bg-zaslona-pattern w-96 h-96 top-0 left-0 -z-40 rounded-bl-full shadow-2xl transform -scale-x-100'></div>
                <div className='absolute bg-zaslona-pattern w-96 h-96 top-0 right-0 -z-40 rounded-bl-full shadow-2xl'></div>

                <div className='absolute bg-zaslona-pattern w-80 h-96 top-48 left-0 -z-50 rounded-bl-full shadow-2xl transform -scale-x-100'></div>
                <div className='absolute bg-zaslona-pattern w-80 h-96 top-48 right-0 -z-50 rounded-bl-full shadow-2xl'></div>

                {/* <div className='absolute bg-zaslona-pattern w-60 h-72 top-1/4 left-0 rounded-bl-full -z-50 shadow-2xl transform -scale-x-100'></div> */}
                {/* <div className='absolute bg-zaslona-pattern w-40 h-72 bottom-0 top-3/4 left-0 -z-50 rounded-tr-full shadow-2xl'></div> */}
                
                <div className='absolute bg-zaslona-pattern w-60 h-72 top-80 left-0 rounded-bl-full -z-50 shadow-2xl transform -scale-x-100 -skew-x-12 -skew-y-12 scale-y-150 -translate-x-14'></div>
                <div className='absolute bg-zaslona-pattern w-40 h-72 bottom-0 top-80 right-0 -z-50 rounded-bl-full shadow-2xl transform skew-x-12 skew-y-12 scale-y-150 translate-x-5'></div>

                <div className='absolute bg-zaslona-pattern bg-right-top w-72 h-72 bottom-0 left-0 -z-50 rounded-tl-full shadow-2xl transform -scale-x-100 scale-y-150 -rotate-12 -translate-x-32'></div>
                <div className='absolute bg-zaslona-pattern bg-right-top w-72 h-72 bottom-0 right-0 -z-50 rounded-bl-full shadow-2xl transform scale-x-100 -scale-y-150 rotate-12 translate-x-36'></div>
                {/* <img className='absolute w-h-60 h-60 py-40 bottom-0 right-0 opacity-75 -z-50 rounded-tl-full shadow-2xl' src={widokVahGogh}/> */}
            </div>
            <motion.div
                onMouseMove={handleMouseMove}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            >
                <motion.img
                    src={motyl}
                    className=" w-40 h-40 overflow-hidden m-0 -z-50 opacity-60 absolute fill-pink-600"
                    animate={{
                        top: cursor.y - 75,
                        left: cursor.x - 75,
                        rotateX: cursor.x + cursor.y,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 2, restDelta: 0.001 }}
                />
            </motion.div>
            <div className="py-8 px-4 sm:py-16 lg:px-6 -z-10 max-w-commonLayout absolute">
                <div className="bg-lavenda-pink mx-auto rounded-full text-center p-4 w-3/4 h-1/2">
                    <h2 className="z-10 mb-4 text-4xl tracking-tighter font-black leading-tight text-gray-950 dark:text-white">Zacznij swoją przygodę z pisaniem!</h2>
                    <p className="mb-6 z-10 px-32 font-light text-gray-800 dark:text-gray-800 md:text-lg">Zapisz się na kurs i "Napisz historię marzeń". Już dziś dołącz do szerokiego grona ludzi, którzy z pisania uczynili swoje życiowe rzemiosło i pasję.</p>
                </div>
            </div>
            <a href="pricing" className="text-gray-900 z-10 absolute top-2/3 bg-lavenda-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Cennik</a>

        </section>
    );
};