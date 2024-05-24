import { useRef } from "react";
import { useTransform, useScroll, motion, useMotionValueEvent } from "framer-motion";
import doPołowy_1 from '../../../public/images/doPołowy-1.svg';
import doPołowy_2 from '../../../public/images/doPołowy-2.svg';
import doPołowy_3 from '../../../public/images/doPołowy-3.svg';
import doPołowy_4 from '../../../public/images/doPołowy-4.svg';
import gentelmens from '../../../public/images/gentelmens.svg';
import kolacja from '../../../public/images/kolacja.svg';
import lampa from '../../../public/images/lampa3.svg';
import head from '../../../public/images/head.svg';
import stara from '../../../public/images/stara.svg';
import windowDeco from '../../../public/images/windowDeco.svg';

const LiteraryAchievments = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const imageOneRotate = useTransform(scrollYProgress, [0.2, 0.8], [-15, 0]);
    const imageTwoRotate = useTransform(scrollYProgress, [0.2, 0.8], [15, 0]);
    const imageThreeRotate = useTransform(scrollYProgress, [0.2, 0.8], [-15, 0]);
    const imageFourRotate = useTransform(scrollYProgress, [0.2, 0.8], [15, 0]);

    const imageOneX = useTransform(scrollYProgress, [0.2, 0.8], [-15, 40]);
    const imageOneY = useTransform(scrollYProgress, [0.2, 0.8], [-15, 44]);

    const imageTwoX = useTransform(scrollYProgress, [0.2, 0.8], [-15, -16]);
    const imageTwoY = useTransform(scrollYProgress, [0.2, 0.8], [-15, -1]);

    const imageThreeX = useTransform(scrollYProgress, [0.2, 0.8], [-15, 80]);
    const imageThreeY = useTransform(scrollYProgress, [0.2, 0.8], [-15, -62]);

    const imageFourX = useTransform(scrollYProgress, [0.2, 0.8], [-15, -56]);
    const imageFourY = useTransform(scrollYProgress, [0.2, 0.8], [-15, -105]);


    /* useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    }) */

    return (
        <motion.div ref={targetRef} className="relative h-[300vh] z-20 max-w-7xl mx-auto">
            <motion.header className="sticky top-0 h-screen flex flex-row flex-nowrap z-0 justify-between">
                <img src={kolacja} className="absolute -left-48 top-0 right-1/4 opacity-[3%]" />
                <img src={lampa} className="absolute top-20 left-full right-0 opacity-10" />
                <img src={head} className="absolute bottom-0 -right-28 opacity-[4%]" />
                <div className="ml-10 w-1/2 h-1/2 flex flex-row flex-wrap justify-center items-center my-auto">
                    <h1 className="text-9xl font-semibold tracking-tighter drop-shadow-2xl xs:text-3xl text-gray-950 mx-auto mt-9">Dorobek<br/>Literacki</h1>
                    {/* <h1 className="text-9xl font-semibold tracking-tighter drop-shadow-2xl xs:text-3xl text-gray-950 mx-auto mb-9">Literacki</h1> */}
                    <h2 className="text-base font-extralight text-gray-950 drop-shadow xs:text-base">"Cierpię za miliony a nie mam z tego ani grosza"</h2>
                    <h2 className="text-base font-extralight text-gray-950 drop-shadow xs:text-base">Zapraszam do zapoznania się z moją twórczością: poezja, liryka, opowiadania, artykuły i dużo, dużo więcej - czytajcie!</h2>
                </div>
                <div className="relative flex flex-col flex-nowrap justify-center items-center">
                    <div className="mt-20 flex flex-row flex-nowrap justify-center items-center">
                        <motion.img src={doPołowy_1} className="z-0 opacity-100" style={{ translateX: imageOneX, translateY: imageOneY, rotate: imageOneRotate }} />
                        <motion.img src={doPołowy_2} className="z-0 opacity-100" style={{ translateX: imageTwoX, translateY: imageTwoY, rotate: imageTwoRotate }} />
                    </div>
                    <div className="flex flex-row flex-nowrap justify-center items-center">
                        <motion.img src={doPołowy_4} className="z-0 opacity-100" style={{ translateX: imageThreeX, translateY: imageThreeY, rotate: imageThreeRotate }} />
                        <motion.img src={doPołowy_3} className="z-0 opacity-100" style={{ translateX: imageFourX, translateY: imageFourY, rotate: imageFourRotate }} />
                    </div>
                    <button className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Wejdź!</button>
                </div>
            </motion.header>
        </motion.div>
    )
}

export default LiteraryAchievments;

