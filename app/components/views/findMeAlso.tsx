import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import mountain1 from '../../../public/images/mountain1.svg'
import mountain2 from '../../../public/images/mountain2.svg'
import mountain3 from '../../../public/images/mountain3.svg'
import mountain4 from '../../../public/images/mountain4.svg'
import mountain5 from '../../../public/images/mountain5.svg'
import wiersz from '../../../public/images/kocha.jpg'

export default function FindMe() {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const imageOneY = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
    const imageTwoY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
    const imageThreeY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const imageFourY = useTransform(scrollYProgress, [0, 1], ["15%", "0%"]);
    const imageFiveY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
    const titleOpacity = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);

    return (
        <section ref={targetRef} className="bg-lavenda-pink  relative z-0 h-[400vh]">
            <motion.div className="sticky top-0 h-screen z-20">
                <motion.img className='absolute z-50 bottom-0  opacity-80   w-screen' src={mountain1} style={{ translateY: imageOneY }} />
                <motion.img className='absolute z-40 bottom-12 opacity-95  blur-xs w-screen' src={mountain2} style={{ translateY: imageTwoY }} />
                <motion.img className='absolute z-30 bottom-24 opacity-95  blur-xs w-screen' src={mountain3} style={{ translateY: imageThreeY }} />
                <motion.img className='absolute z-20 bottom-40 opacity-95  blur-xs w-screen' src={mountain4} style={{ translateY: imageFourY }} />
                <motion.img className='absolute z-10 bottom-60 opacity-25  blur-xs w-screen' src={mountain5} style={{ translateY: imageFiveY }} />
                <motion.div className="absolute right-0 flex flex-col top-1/4 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2 className="text-end mb-10 mr-28 text-lg font-semibold leading-8 text-gray-900 md-max:mx-auto md-max:text-center" style={{opacity: titleOpacity}}>
                        Znajdziesz mnie również na:
                    </motion.h2>
                    <div className="flex flex-row items-end justify-end">
                        <motion.a href="https://www.facebook.com/amelia.pudzianowska" target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center mr-12" style={{opacity: titleOpacity}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{ color: "#1877f2" }}
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            <p className="ml-3">𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸</p>
                        </motion.a>
                        <motion.a href="https://www.instagram.com/nizejpodpisana/" target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center mr-24" style={{opacity: titleOpacity}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{ color: "#c13584" }}
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <p className="ml-3">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</p>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}