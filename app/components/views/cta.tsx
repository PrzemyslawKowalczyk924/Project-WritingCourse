import fantasyBook from '../../../public/images/opened_book.jpg';
import creatiVeCourse from '../../../public/images/creatiVeCourse.jpg';
import motyl from '../../../public/icons/butterflySVG.svg';
import smonecznikAI from '../../../public/images/grafika9.png';
import smonecznik12 from '../../../public/images/grafika10.svg';
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../components/features/use-follow-pointer";

export default function CallToAction() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const componentRect = e.currentTarget.getBoundingClientRect();
        setCursor({
            x: e.clientX - componentRect.left,
            y: e.clientY - componentRect.top,
        });
    };

    return (
        <section id='ctaId' className="bg-lavenda-pink dark:bg-gray-900 min-h-3/4 h-96 z-10 relative flex justify-center items-center flex-col">
            <img className='absolute w-96 h-96 top-auto left-2/3 opacity-50 -z-50' src={smonecznik12} />
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
                    className=" w-40 h-40 overflow-hidden m-0 -z-50 opacity-5 absolute"
                    animate={{
                        top: cursor.y - 75,
                        left: cursor.x - 75,
                        rotateX: cursor.x + cursor.y,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 2, restDelta: 0.001  }}
                />
            </motion.div>
            <a href="pricing" className="text-gray-900 z-10 absolute top-2/3 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Cennik</a>
            <div className="py-8 px-4 sm:py-16 lg:px-6 -z-10 max-w-commonLayout absolute">
                <div className="mx-auto text-center">
                    <h2 className="z-10 mb-4 text-4xl tracking-tighter font-black leading-tight text-gray-950 dark:text-white">Zacznij swoją przygodę z pisaniem!</h2>
                    <p className="mb-6 z-10 px-56 font-light text-gray-800 dark:text-gray-800 md:text-lg">Zapisz się na kurs i "Napisz historię marzeń". Już dziś dołącz do szerokiego grona ludzi, którzy z pisania uczynili swoje życiowe rzemiosło i pasję.</p>
                </div>
            </div>

        </section>
    );
};