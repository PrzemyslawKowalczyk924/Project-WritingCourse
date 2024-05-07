import { useRef } from "react";
import { useScroll } from "framer-motion";
import krzesło from "../../../public/images/krzesło.svg"
import kot from "../../../public/images/kot.svg"
import blog from "../../../public/images/blog.png"

export default function VisitMyBlog() {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    /* transform: translateY(276px) translateX(-426px) rotate(348deg); */

    return (
        <section ref={targetRef} className="relative text-gray-600 body-font h-[300vh] bg-lavenda-pink z-0">
            <div className="sticky grid grid-cols-3 2xl:grid-cols-5 grid-rows-1 justify-items-end items-center top-0 z-20 h-screen mx-auto gap-0">
                <img src={blog} className="col-span-2 2xl:col-span-3 row-span-1 2xl:col-start-1"/>
                <div className=" col-span-1 row-span-1 2xl:col-start-4 right-0 text-right mr-52 2xl:mr-0 max-w-lg justify-self-start">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Stuk-puk!</h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="">
                        <button className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Blog</button>
                    </div>
                </div>
            </div>
        </section>
    )
}