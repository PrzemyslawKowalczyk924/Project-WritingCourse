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
        <section id='ctaId' className="bg-ctaBackground-pattern bg-cover bg-fixed md-max:h-140 md-max:bg-auto md-max:bg-repeat h-screen w-full dark:bg-gray-900 z-10 relative flex justify-center items-center flex-col">
            <div className='absolute  w-full h-full top-0'>
                <div className='absolute bg-zaslona-pattern w-96 h-96 top-0 left-0 -z-40 rounded-bl-full shadow-2xl transform -scale-x-100 2xs:w-1/2 md-max:w-5/12 md-max:h-1/4'></div>
                <div className='absolute bg-zaslona-pattern w-96 h-96 top-0 right-0 -z-40 rounded-bl-full shadow-2xl 2xs:w-1/2 md-max:w-5/12 md-max:h-1/4'></div>

                <div className='absolute bg-zaslona-pattern w-80 h-96 top-48 left-0 -z-50 rounded-bl-full shadow-2xl transform -scale-x-100 md-max:h-1/2 md-max:w-1/4 md-max:top-0'></div>
                <div className='absolute bg-zaslona-pattern w-80 h-96 top-48 right-0 -z-50 rounded-bl-full shadow-2xl md-max:h-1/2 md-max:w-1/4 md-max:top-0'></div>

                <div className='absolute bg-zaslona-pattern w-60 h-72 top-80 left-0 rounded-bl-full -z-50 shadow-2xl transform -scale-x-100 -skew-x-12 -skew-y-12 scale-y-150 -translate-x-14 md-max:w-1/4 md-max:h-1/2 md-max:top-0'></div>
                <div className='absolute bg-zaslona-pattern w-40 h-72 bottom-0 top-80 right-0 -z-50 rounded-bl-full shadow-2xl transform skew-x-12 skew-y-12 scale-y-150 translate-x-5 md-max:w-1/4 md-max:h-1/2 md-max:top-0'></div>

                <div className='absolute bg-zaslona-pattern bg-right-top w-72 h-72 bottom-0 left-0 -z-50 rounded-tl-full shadow-2xl transform -scale-x-100 scale-y-150 -rotate-12 -translate-x-32 md-max:w-1/3 md-max:1/2'></div>
                <div className='absolute bg-zaslona-pattern bg-right-top w-72 h-72 bottom-0 right-0 -z-50 rounded-bl-full shadow-2xl transform scale-x-100 -scale-y-150 rotate-12 translate-x-32 md-max:w-1/3 md-max:1/2'></div>
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
                    className="w-40 h-40 overflow-hidden m-0 -z-50 opacity-60 absolute"
                    animate={{
                        top: cursor.y - 75,
                        left: cursor.x - 75,
                        rotateX: cursor.x + cursor.y,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 2, restDelta: 0.001 }}
                />
            </motion.div>
            <div className="py-8 px-4 sm:py-16 lg:px-6 -z-10 max-w-commonLayout absolute opacity-90 xs:px-0 md-max:top-1/2 xs:py-0">
                <div className="bg-lavenda-pink mx-auto rounded-full text-center p-4 w-3/4 2xs:p-8">
                    <h2 className="z-10 my-4 text-4xl tracking-tighter font-black leading-tight text-gray-950 dark:text-white md-max:text-2xl 2xs:my-0 2sm:mx-3">Zacznij swoją przygodę z pisaniem!</h2>
                    <p className="my-6 z-10 px-32 font-light text-gray-800 dark:text-gray-800 md:text-lg md-max:p-0 2xs:mt-2 2xs:mb-0 md-max:m-3">Zapisz się na kurs i "Napisz historię marzeń". <span className='xs:hidden'>Już dziś dołącz do szerokiego grona ludzi, którzy z pisania uczynili swoje życiowe rzemiosło i pasję.</span></p>
                </div>
            </div>
            <div className='h-1/2 w-full flex items-center justify-center relative z-10'>
                <a href="pricing" className="absolute top-0 leading-9 text-gray-900 z-10 bg-lavenda-pink hover:bg-primary-800 shadow-2xl focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 mx-auto md-max:top-1/2 ">Cennik</a>
            </div>

        </section>
    );
};