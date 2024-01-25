import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

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
        <div ref={targetRef} className="relative z-0 h-[300vh]">
            <div className="sticky flex top-16 h-screen">
                <img src={"https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="h-40 w-40" alt="fotka2" />
                <img src={"https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="h-40 w-40" alt="fotka2" />
                <img src={"https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="h-20 w-40" alt="fotka2" />
                <img src={"https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="h-40 w-40" alt="fotka2" />
                <img src={"https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="h-40 w-40" alt="fotka2" />
                <img src={"https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="h-40 w-40" alt="fotka2" />
            </div>
        </div>
    )
}

export default TrippyScrollEffectTwo;