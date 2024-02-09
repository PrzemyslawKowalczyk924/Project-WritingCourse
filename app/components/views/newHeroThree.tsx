import { useTransform, useScroll, motion, MotionValue, useMotionValueEvent, easeOut } from "framer-motion";
import { useRef, ReactNode } from "react";
import image1 from "../../../public/images/PióroAlone.png";
import image2 from "../../../public/images/kałamaż2.png";
import image3 from "../../../public/images/kropla.png";
import image4 from "../../../public/images/kleks.png";
import motyl from '../../../public/icons/butterflySVG.svg';


interface SectionProps {
    background: string;
    children: ReactNode;
    rotate: MotionValue<string>;
}

const TrippyScrollEffectTwo = () => {

    const targetRef = useRef(null);
    /* const containerRef = useRef(null); */

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    /* const { scrollY } = useScroll({
        target: targetRef,
    }); */

    /*  useMotionValueEvent(scrollY, "change", (latest) => {
         console.log("Page scroll: ", latest)
     }) */



    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, 0, 0, 10, 10, 10, 10, 0.9]);

    const imageOneX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 1], [-10, -25, 0, -15, 0, -15, 0]);
    const imageOneY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [10, -25, 15, -15, 15, -15, -15, 15]);
    const imageOneRotate = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 1], [5, -25, 0, -15, 0, -15, 0]);

    const inkImageX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.56, 0.6, 0.75, 0.76, 1], [0, 6, 4, 4, 7, 3, 7, 6]);
    const inkImageY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, -41, -44, -82, -45, -78, -45, 370]);
    const inkScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 1], [0, 0.5, 0.5, 0.5, 0.6, 0.75, 1, 0.4]);
    const inkImageRotate = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.76, 0.8, 0.9, 1], [0, 0, 0, 0, 7, 7, -17, 17, -17, 17]);
    const splashOfInkOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.5, 0.6, 0.75, 0.98, 1], [0, 0, 0, 0, 0, 0, 0, 10]);
    const splashOfInkScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.4, 0.5, 0.75, 0.76, 1], [0, 0, 0, 0, 0, 0.1, 0.5, 1.2]);

    /* console.log(imageOneX, imageOneY); */

    /* useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
        if (scrollYProgress.get() == 1) {
            console.log('true');
            console.log(imageOneX.get());
             frame.render(() => {
                 imageOneX = useTransform(scrollYProgress, [0, 10], [25, -50])
             });
        }
    }); */

    /* useMotionValueEvent(imageOneX, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })
 */
    const imageTwoX = useTransform(scrollYProgress, [0, 10], [100, -900]);
    const imageTwoY = useTransform(scrollYProgress, [0, 10], [-200, 1800]);
    const imageTwoScale = useTransform(scrollYProgress, [0, 10], [0.5, 5.5]);

    const imageThreeX = useTransform(scrollYProgress, [0, 10], [-100, 900]);
    const imageThreeY = useTransform(scrollYProgress, [0, 10], [-50, 450]);

    const imageFourX = useTransform(scrollYProgress, [0, 10], [100, -900]);
    const imageFourY = useTransform(scrollYProgress, [0, 10], [50, -450]);
    ;
    const imageFiveX = useTransform(scrollYProgress, [0, 10], [-200, 1800]);
    const imageFiveY = useTransform(scrollYProgress, [0, 10], [-100, 900]);

    const imageSixX = useTransform(scrollYProgress, [0, 10], [200, -1800]);
    const imageSixY = useTransform(scrollYProgress, [0, 10], [200, -1800]);
    const imageSixScale = useTransform(scrollYProgress, [0, 10], [0.5, 5.5]);

    const NUM_SECTION = 10;
    const PADDING = `${100 / NUM_SECTION / 2}vmin`;

    /* const motionScroller = () => {
        
        
    }

    motionScroller(); */

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

    const Trippy = () => {
        return <div className="absolute inset-0 overflow-hidden bg-black">
            {generateSections(0, "black", rotate)}
        </div>
    }

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
        <section ref={targetRef} className="bg-lavenda-pink relative z-0 h-[300vh]">
            <motion.div className="sticky top-0 h-screen z-20">
                <motion.header className="flex flex-col justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center mt-auto">
                        <motion.img src={image1} className="h-24 w-24 mr-20 mt-48" style={{ translateX: imageOneX, translateY: imageOneY, rotate: imageOneRotate }} alt="fotka2" />
                        <motion.img src={image2} className="h-12" alt="fotka2" />
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