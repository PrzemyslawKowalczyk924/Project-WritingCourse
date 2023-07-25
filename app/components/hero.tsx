import { motion, useTransform, useScroll } from "framer-motion";

export default function Hero () {
    const { scrollYProgress } = useScroll();
    const tilt = useTransform(scrollYProgress, [0, 1], [0, -10]); // Wartość -10 oznacza, że strona będzie odchylała się do tyłu
    console.log(scrollYProgress)
    return (
      <motion.div style={{ perspective: "1000px", rotateX: tilt }}>
        <header className="flex flex-col bg-hero-pattern bg-cover justify-center items-center h-screen">
          <h1 className="text-8xl mb-2 mt-auto text-magenta tracking-tighter">Amelia Pudzianowska</h1>
          <h1 className="text-4xl mt-2 font-thin text-magenta">Przedstawia:</h1>
          <h2 className="text-1 mt-auto font-extralight text-magenta mb-7">2023 Radom | blog & kurs</h2>
      </header>
      </motion.div>
    );
  };