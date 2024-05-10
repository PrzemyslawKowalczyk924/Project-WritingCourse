import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import image1 from "../../../public/images/PióroAlone.png";
import image2 from "../../../public/images/kałamaż2.png";
import image3 from "../../../public/images/kropla.png";
import image4 from "../../../public/images/kleks.png";
import dwaKwiaty from "../../../public/images/dwaKwiaty.svg";

interface SectionProps {
    background: string;
    children: ReactNode;
    rotate: MotionValue<string>;
}

const TrippyScrollEffectTwo = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    function getTransformations(...valuesArray: [any[], any[]][]) {

        const transformationsArray = [];
        for (const valuesPair of valuesArray) {
            transformationsArray.push(useTransform(scrollYProgress, valuesPair[0], valuesPair[1]))
        }

        return transformationsArray;

    }

    const [imageOneX, imageOneY, imageOneRotate] = getTransformations(
        [[0, 0.25, 0.35, 0.5, 0.75, 1], [-10, -25, 0, -15, -15, 0]],
        [[0, 0.25, 0.35, 0.5, 0.75, 1], [10, -25, 15, -15, -15, 15]],
        [[0, 0.25, 0.35, 0.5, 0.75, 1], [5, -25, 0, -15, -15, 0]]
    );

    const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, 0, 0, 10, 10, 10, 10, 0.9]);

    const inkImageX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.56, 0.52, 0.75, 0.76, 1], [0, 4, 3, 3, 3, 4, 7, 6]);
    const inkImageY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.52, 0.75, 1], [0, -39, -40, -82, -82, -45, 370]);
    const inkScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.52, 0.75, 0.76, 1], [0, 0.5, 0.6, 0.65, 0.70, 0.75, 1, 0.4]);

    const inkImageRotate = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 0.8, 0.9, 1], [0, 0, 11, 5, 4, 7, -17, 17, -17, 17]);
    const splashOfInkOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.98, 1], [0, 0, 0, 0, 0, 0, 0, 10]);
    const splashOfInkScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.4, 0.5, 0.65, 0.86, 1], [0, 0, 0, 0, 0, 0.7, 0.97, 1.2]);

    /* console.log(imageOneX, imageOneY); */


    /* useMotionValueEvent(imageOneX, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })
 */
 

    const NUM_SECTION = 10;
    const PADDING = `${100 / NUM_SECTION / 2}vmin`;

    const generateSections = (count, color, rotate) => {
        if (count === NUM_SECTION) {
            return <></>;
        }

        const nextColor = color === "black" ? "white" : "black";

        return (
            <Section rotate={rotate} background={color}>
                {generateSections(count + 1, nextColor, rotate)}
            </Section>
        )

    }

    /* const Trippy = () => {
        return <div className="absolute inset-0 overflow-hidden bg-black">
            {generateSections(0, "black", rotate)}
        </div>
    } */

    const Section: React.FC<SectionProps> = ({ background, children, rotate }) => {
        return (
            <motion.div
                className="relative h-full w-full origin-centrt "
                style={{ background, rotate, padding: PADDING }} >
                {children}
            </motion.div >
        )
    }

    return (
        <section ref={targetRef} className="bg-lavenda-pink relative z-0 h-[400vh]">
            <motion.div className="sticky top-0 h-screen z-20">
                <motion.header className="flex flex-col justify-center items-center h-screen relative">
                    <img src={dwaKwiaty} className="absolute top-1/4 opacity-35" />
                    <div className="flex flex-col justify-center items-center mt-auto">
                        <motion.img src={image1} className="h-24 w-24 mr-20 mt-48 opacity-85" style={{ translateX: imageOneX, translateY: imageOneY, rotate: imageOneRotate }} alt="fotka2" />
                        <motion.img src={image2} className="h-12 z-20" alt="fotka2" />
                        <motion.img src={image3} className="w-4 h-6 -z-10" alt="fotka2" style={{ translateX: inkImageX, translateY: inkImageY, rotate: inkImageRotate, opacity: imageOpacity, scale: inkScale }} />
                    </div>
                    <motion.h1 className="text-8xl mb-2 pt-11 mt-auto text-magenta tracking-tighter drop-shadow-2xl xs:text-3xl">Amelia Pudzianowska&#8482;</motion.h1>
                    <h1 className="text-4xl mt-2 mb-20 font-thin text-magenta xs:text-xl">Przedstawia:</h1>
                    <div className="flex flex-col justify-center items-center">
                        <motion.img src={image4} className="w-14 h-14" alt="fotka4" style={{ opacity: splashOfInkOpacity, scale: splashOfInkScale }} />
                    </div>
                    <motion.h2 className="text-1 mt-auto font-extralight text-magenta mb-7 drop-shadow xs:text-base">2023 Radom | blog & kurs</motion.h2>
                </motion.header>
            </motion.div>
        </section>
    )
}

export default TrippyScrollEffectTwo;