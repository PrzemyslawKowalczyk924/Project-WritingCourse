import { useRef } from "react";
import { useTransform, useScroll, motion, useMotionValueEvent } from "framer-motion";
import doPołowy_1 from '../../../public/images/doPołowy-1.svg';
import doPołowy_2 from '../../../public/images/doPołowy-2.svg';
import doPołowy_3 from '../../../public/images/doPołowy-3.svg';
import doPołowy_4 from '../../../public/images/doPołowy-4.svg';
import gentelmens from '../../../public/images/gentelmens.svg';

const LiteraryAchievments = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const imageOneRotate = useTransform(scrollYProgress, [0.2, 1], [-15, 0]);
    const imageTwoRotate = useTransform(scrollYProgress, [0.2, 1], [15, 0]);
    const imageThreeRotate = useTransform(scrollYProgress, [0.2, 1], [-15, 0]);
    const imageFourRotate = useTransform(scrollYProgress, [0.2, 1], [15, 0]);

    const imageOneX = useTransform(scrollYProgress, [0.2, 1], [-15, 40]);
    const imageOneY = useTransform(scrollYProgress, [0.2, 1], [-15, 44]);

    const imageTwoX = useTransform(scrollYProgress, [0.2, 1], [-15, -16]);
    const imageTwoY = useTransform(scrollYProgress, [0.2, 1], [-15, -1]);

    const imageThreeX = useTransform(scrollYProgress, [0.2, 1], [-15, 80]);
    const imageThreeY = useTransform(scrollYProgress, [0.2, 1], [-15, -62]);

    const imageFourX = useTransform(scrollYProgress, [0.2, 1], [-15, -56]);
    const imageFourY = useTransform(scrollYProgress, [0.2, 1], [-15, -105]);


    /* useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    }) */

    return (
        <motion.div ref={targetRef} className="relative h-[300vh] z-20 max-w-commonLayout mx-auto">
            <motion.header className="sticky top-0 h-screen flex flex-row flex-wrap z-0 justify-between">
                <img src={gentelmens} className="absolute left-1/2" />
                <div className="w-1/2 h-1/2 flex flex-row flex-wrap justify-center items-center my-auto">
                    <h1 className="text-9xl font-semibold tracking-tighter drop-shadow-2xl xs:text-3xl text-gray-950 mx-auto mt-9">Dorobek</h1>
                    <h1 className="text-9xl font-semibold tracking-tighter drop-shadow-2xl xs:text-3xl text-gray-950 mx-auto mb-9">Literacki</h1>
                    <h2 className="text-base font-extralight text-gray-950 drop-shadow xs:text-base">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
                    <h2 className="text-base font-extralight text-gray-950 drop-shadow xs:text-base">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h2>
                </div>
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <div className="flex flex-row flex-nowrap justify-center items-center">
                        <motion.img src={doPołowy_1} className="z-0 opacity-100" style={{ translateX: imageOneX, translateY: imageOneY, rotate: imageOneRotate }} />
                        <motion.img src={doPołowy_2} className="z-0 opacity-100" style={{ translateX: imageTwoX, translateY: imageTwoY, rotate: imageTwoRotate }} />
                    </div>
                    <div className="flex flex-row flex-nowrap justify-center items-center">
                        <motion.img src={doPołowy_4} className="z-0 opacity-100" style={{ translateX: imageThreeX, translateY: imageThreeY, rotate: imageThreeRotate }} />
                        <motion.img src={doPołowy_3} className="z-0 opacity-100" style={{ translateX: imageFourX, translateY: imageFourY, rotate: imageFourRotate }} />
                    </div>
                    <button type="submit" className="flex-none mx-auto rounded-md bg-cherry-pink px-3.5 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Więcej</button>
                </div>
            </motion.header>
        </motion.div>
    )
}

export default LiteraryAchievments;

