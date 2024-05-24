import CarouselExample from "~/components/views/carousel";
import TrippyScrollEffectThree from "~/components/views/newHeroThree";
import { useTransform, useScroll, motion, useMotionValueEvent } from "framer-motion";
import motyl from '../../public/icons/butterflySVG.svg';
import { useRef } from "react";
import LiteraryAchievments from "~/components/views/literaryAchievments";
import MainPageBlog from "~/components/views/mainPageBlog";
import CheckUpMyCourse from "~/components/views/checkUpMyCourse";
import FindMeAlso from "~/components/views/findMeAlso";
import FilmSection from "~/components/views/filmSection";
import WorkWith from "~/components/views/workWith";

export default function Example() {

    const targetRef = useRef(null);

    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
    });


    const butterflyOpacity = useTransform(scrollYProgress, [0.1395, 0.1399, 0.173, 0.369, 0.37, 0.461, 0.462, 0.98, 1], [0, 1, 1, 1, 0, 0, 1, 1, 0]);
    const butterFlyX = useTransform(scrollYProgress, [0.16, 0.18, 0.21, 0.462, 0.51, 0.57, 0.62, 1], [-37, 20, 400, -37, 160, -40, -250, 320]);
    const butterFlyY = useTransform(scrollYProgress, [0.16, 0.51, 0.62, 0.83, 1], [0, 170, -120, 520, -120]);
    const butterFlyRotate = useTransform(scrollYProgress, [0.16, 1], [0, 20]);
    const butterFlyScale = useTransform(scrollYProgress, [0.16, 0.18, 0.21, 0.31, 0.32, 0.349, 0.35, 0.462, 1], [0.5, 0.5, 0, 0, 0.5, 0.5, 0, 0.5, 0.5]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    })
    

    return (
        <div ref={targetRef} className="bg-mimi-pink">
            <motion.img
            src={motyl}
            className="w-20 h-20 z-40 opacity-90 fixed top-1/2 left-1/2"
                style={{ translateX: butterFlyX, translateY: butterFlyY, rotateY: scrollY, opacity: butterflyOpacity, scale: butterFlyScale }}
            />
            <TrippyScrollEffectThree />
            <LiteraryAchievments />
            <CarouselExample />
            <MainPageBlog />
            <CheckUpMyCourse />
            <FilmSection />
            <WorkWith />
            <FindMeAlso />
        </div>
    )
}