import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

interface SectionProps {
    background: string;
    children: ReactNode;
    rotate: MotionValue<string>;
}

const TrippyScrollEffect = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

    const NUM_SECTION = 3;
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
        <div ref={targetRef} className="relative z-0 h-[300vh]">
            <div className="sticky top-16 h-screen">
                <Trippy />
            </div>
        </div>
    )
}

export default TrippyScrollEffect;