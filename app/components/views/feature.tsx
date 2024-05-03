import motyl from '../../../public/icons/butterflySVG.svg';
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import hands from '../../../public/movies/hands.mp4';

export default function Feature() {

  const { scrollYProgress } = useScroll();
  //                                           0, 0.2, 1    0   -60 -660
  //                                           0, 60, 60    0, 120, 120 + 0. -660. -660    0, -660, -660

  const tiltX = useTransform(scrollYProgress, [0, 20], [0, 170]); // Przechylanie w lewo i w prawo
  const tiltY = useTransform(scrollYProgress, [0, 1], [0, 380]); // Dostosuj wartość, jeśli potrzebujesz inny stopień odchylania na osi Y
  const scalEX = useTransform(scrollYProgress, [0, 1], [1, 2]); // Dostosuj wartość, aby zwężać obraz wzdłuż osi X
  const transY = useTransform(scrollYProgress, [0, 1], [0, -0.5]);
  const skewY = useTransform(scrollYProgress, [0, 4.3], [-530, 1100]);
  const perspectiveVal = useTransform(scrollYProgress, [0, 1], [1, 200]);
  const rotateNameX = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scaleNameY = useTransform(scrollYProgress, [0, 1], [1, 10]);
  
  const scaleEXName = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const transYName = useTransform(scrollYProgress, [0, 1], [0, -70]);
  
  const scaleTowAndBlogY = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const scaleEXTownAndBlogName = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const transYTownAndBlog = useTransform(scrollYProgress, [0, 1], [0, -430]);
  const skewYTownAndBlog = useTransform(scrollYProgress, [0, 1], [0, -0.5]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
})

  return (


    <section id='course_Sight' className="bg-lavenda-pink relative z-20 h-screen">
      <div className="grid grid-cols-4 grid-rows-1 gap-0">
        <div className='col-span-2'>
          <div className='relative w-full h-full'>
            <motion.video autoPlay muted loop className="h-full w-full top-20 left-0 mix-blend-lighten object-cover absolute z-10" src={hands} />
            <motion.img className='h-full w-full top-20 left-0 absolute mix-blend-normal object-contain p-6 lg-max:opacity-20 md-max:pt-20' src={motyl} style={ {rotate: '35deg', rotateZ: skewY} } />
          </div>
        </div>
        <div className="col-span-2 py-24 max-w-2xl lg:text-center z-10 relative px-24 xs:px-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900 tracking-tight">Czytaj & Pisz</h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900 tracking-tight">czyli:</h2>
          <p className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
          „Wszystko czego potrzebujesz aby stać się świadomym twórcą”
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900 text-justify tracking-tighter">
          W przeciwieństwie do całej gamy zajęć, które opierają się na nagranych lekcjach, kurs „Napisz historię marzeń!” jest prowadzony na żywo. Daje to możliwość komunikacji, ćwiczeń i zabawy podczas trwania zajęć. 
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900 text-justify tracking-tighter">
          Warsztaty prowadzone w małych grupkach pozwalają na integrację, nawiązywanie internetowych przyjaźni i wzajemnego wspierania się w twórczej drodze. Kurs prowadzony jest przez platformę Google Meets, składa się z pięciu spotkań, a jego celem jest umożliwienie uczestnikowi publikacji swojego pierwszego opowiadania we wspólnej antologii.
          </p>
        </div>
      </div>
    </section>
    

  )
}

{/* <section id='course_Sight' className="bg-lavenda-pink py-24 sm:py-32 relative z-20">
  <div className="mx-auto max-w-commonLayout px-6 lg:px-8 flex flex-row">
    <div className='w-96 h-96 mr-auto xs:mr-0 absolute'>
      <div className='relative w-96 h-96'>
        <video autoPlay muted loop className="w-full h-full top-0 left-0 mix-blend-lighten object-cover absolute z-50" src={typeWriterMachine} />
        <motion.img className='w-full h-full top-0 left-0 absolute mix-blend-normal object-cover butterFlySizer lg-max:opacity-20 md-max:pt-20  mb-12' src={motyl} style={ {rotate: '35deg', translateX: '-176px', translateY: "37px", scale: "2.5", rotateZ: skewY} } />
        <img className='w-full h-full top-0 left-0 absolute mix-blend-normal object-cover' src={motyl} />
        <motion.img className='w-96 h-96 absolute mix-blend-screen butterFlySizer lg-max:opacity-20 md-max:pt-20  mb-12' src={motyl} style={ {rotate: '35deg', translateX: '-176px', translateY: "37px", scale: "2.5", rotateZ: skewY} } />
      </div>
    </div>
    <div className="mx-auto max-w-2xl lg:text-center z-10 relative px-24 mr-0 xs:px-5">
      <h2 className="text-base font-semibold leading-7 text-gray-900 tracking-tight">Czytaj & Pisz</h2>
      <h2 className="text-base font-semibold leading-7 text-gray-900 tracking-tight">czyli:</h2>
      <p className="mt-2 text-3xl font-bold tracking-tighter  sm:text-4xl">
      „Wszystko czego potrzebujesz aby stać się świadomym twórcą”
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-900 text-justify tracking-tighter">
      W przeciwieństwie do całej gamy zajęć, które opierają się na nagranych lekcjach, kurs „Napisz historię marzeń!” jest prowadzony na żywo. Daje to możliwość komunikacji, ćwiczeń i zabawy podczas trwania zajęć. 
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-900 text-justify tracking-tighter">
      Warsztaty prowadzone w małych grupkach pozwalają na integrację, nawiązywanie internetowych przyjaźni i wzajemnego wspierania się w twórczej drodze. Kurs prowadzony jest przez platformę Google Meets, składa się z pięciu spotkań, a jego celem jest umożliwienie uczestnikowi publikacji swojego pierwszego opowiadania we wspólnej antologii.
      </p>
    </div>
  </div>
</section> */}