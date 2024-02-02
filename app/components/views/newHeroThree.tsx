import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";
import image1 from "../../../public/images/PióroAlone.png";
import image2 from "../../../public/images/kałamaż2.png";
import image3 from "../../../public/images/kropla.png";
import image4 from "../../../public/images/kleks.png";

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

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
    const imageOpacity = useTransform(scrollYProgress, [0, 10], [0, 10]);

    const imageOneX = useTransform(scrollYProgress, [0, 10], [-200, 1800]);
    const imageOneY = useTransform(scrollYProgress, [0, 10], [-100, 900]);

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
        <section className="bg-lavenda-pink z-20">
            <motion.div className="z-20">
                <motion.header className="flex flex-col justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center mt-auto">
                        <motion.img src={image1} className="h-24 w-24 mr-20 mt-48" alt="fotka2" />
                        <motion.img src={image2} className="h-12" alt="fotka2" />
                        <motion.img src={image3} className="w-4 h-6" alt="fotka2" />
                    </div>
                    <motion.h1 className="text-8xl mb-2 pt-11 mt-auto text-magenta tracking-tighter drop-shadow-2xl xs:text-3xl">Amelia Pudzianowska&#8482;</motion.h1>
                    <h1 className="text-4xl mt-2 mb-20 font-thin text-magenta xs:text-xl">Przedstawia:</h1>
                    <div className="flex flex-col justify-center items-center">
                        <motion.img src={image4} className="w-14 h-14" alt="fotka4" />
                    </div>
                    <motion.h2 className="text-1 mt-auto font-extralight text-magenta mb-7 drop-shadow xs:text-base">2023 Radom | blog & kurs</motion.h2>
                </motion.header>
            </motion.div>
            <div ref={targetRef} className="relative z-0 h-[300vh] bg-lavenda-pink">
                <div className="sticky flex top-8 h-screen justify-center items-center flex-wrap flex-col">
                </div>
            </div>
        </section>
    )
}

export default TrippyScrollEffectTwo;