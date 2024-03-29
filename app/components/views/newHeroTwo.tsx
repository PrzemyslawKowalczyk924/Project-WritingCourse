import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";
import image1 from "../../../public/images/image1.webp";
import image2 from "../../../public/images/image2.webp";
import image3 from "../../../public/images/image3.webp";
import image4 from "../../../public/images/image4.webp";
import image5 from "../../../public/images/image5.webp";
import image6 from "../../../public/images/image6.webp";

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
        <div ref={targetRef} className="relative z-0 h-[300vh] bg-lavenda-pink">
            <div className="sticky flex top-8 h-screen justify-center items-center flex-wrap flex-col">
                <div className="flex">
                    <motion.img src={image1} className="h-48 w-72" alt="fotka2" style={{translateX: imageOneX, translateY: imageOneY, opacity: imageOpacity}} />
                    <motion.img src={image2} className="h-48 w-72" alt="fotka2" style={{translateX: imageTwoX, translateY: imageTwoY, scale: imageTwoScale, opacity: imageOpacity}}/>
                </div>
                <div className="flex">
                    <motion.img src={image3} className="h-48 w-72" alt="fotka2" style={{translateX: imageThreeX, translateY: imageThreeY, opacity: imageOpacity}}/>
                    <motion.img src={image4} className="h-48 w-72" alt="fotka2" style={{translateX: imageFourX, translateY: imageFourY, opacity: imageOpacity}}/>
                </div>
                <div className="flex">
                    <motion.img src={image5} className="h-48 w-72" alt="fotka2" style={{translateX: imageFiveX, translateY: imageFiveY, opacity: imageOpacity}}/>
                    <motion.img src={image6} className="h-48 w-72" alt="fotka2" style={{translateX: imageSixX, translateY: imageSixY, scale: imageSixScale, opacity: imageOpacity}}/>
                </div>
            </div>
        </div>
    )
}

export default TrippyScrollEffectTwo;