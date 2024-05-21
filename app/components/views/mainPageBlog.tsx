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
            <div className="sticky flex max-w-6xl justify-items-end items-center top-0 z-20 h-screen mx-auto gap-0">
                <img src={blog} className="absolute bottom-8 -left-36 z-0"/>
                <div className="absolute right-0 text-right mr-52 2xl:mr-0 max-w-sm justify-self-start z-10">
                    <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-8">Stuk-puk!</h1>
                    <p className="mb-8 text-lg leading-relaxed tracking-tighter text-justify">Zapraszam serdecznie i kolorowo na mojego bloga. Znajdziecie w nim najświeższe informacje o mojej twórczości. Będzie również o kulturze, zdziebko o nauce, nie pominę filozofii oraz tego czego "nie widać od razu". Piszę praktycznie o wszystkim! Dlatego jeśli nie straszna ci moja nieszablonowość:</p>
                    <div className="">
                        <button className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Wejdź!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}