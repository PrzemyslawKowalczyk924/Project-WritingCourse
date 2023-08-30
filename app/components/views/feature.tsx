import motyl from '../../../public/icons/butterflySVG.svg'
import { motion, useTransform, useScroll } from "framer-motion";

export default function Feature() {

  const { scrollYProgress } = useScroll();
  //                                           0, 0.2, 1    0   -60 -660
  //                                           0, 60, 60    0, 120, 120 + 0. -660. -660    0, -660, -660

  const tiltX = useTransform(scrollYProgress, [0, 20], [0, 170]); // Przechylanie w lewo i w prawo
  const tiltY = useTransform(scrollYProgress, [0, 1], [0, 380]); // Dostosuj wartość, jeśli potrzebujesz inny stopień odchylania na osi Y
  const scalEX = useTransform(scrollYProgress, [0, 1], [1, 2]); // Dostosuj wartość, aby zwężać obraz wzdłuż osi X
  const transY = useTransform(scrollYProgress, [0, 1], [0, -0.5]);
  const skewY = useTransform(scrollYProgress, [0, 1], [300, 400]);
  const perspectiveVal = useTransform(scrollYProgress, [0, 1], [1, 200]);
  const rotateNameX = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scaleNameY = useTransform(scrollYProgress, [0, 1], [1, 10]);
  
  const scaleEXName = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const transYName = useTransform(scrollYProgress, [0, 1], [0, -70]);
  
  const scaleTowAndBlogY = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const scaleEXTownAndBlogName = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const transYTownAndBlog = useTransform(scrollYProgress, [0, 1], [0, -430]);
  const skewYTownAndBlog = useTransform(scrollYProgress, [0, 1], [0, -0.5]);


  return (
    <section className="bg-lavenda-pink py-24 sm:py-32 relative z-20">
      <div className="mx-auto max-w-commonLayout px-6 lg:px-8 flex flex-row">
        <div className='w-96 h-96 mr-auto xs:mr-0 xs:absolute'>
          <motion.img className='butterFlySizer xs:opacity-30' src={motyl} style={ {rotate: '30deg', translateX: '-176px', translateY: "-237px", scale: "2.5", rotateZ: skewY} } />
        </div>
        <div className="mx-auto max-w-2xl lg:text-center z-10 relative px-24 mr-0 xs:px-5">
          {/* <h2 className="text-base font-semibold leading-7 from-neutral-500">Publikuj szybciej & skuteczniej</h2> */}
          <h2 className="text-base font-semibold leading-7 from-neutral-500">Czytaj & Pisz</h2>
          <h2 className="text-base font-semibold leading-7 from-neutral-500">czyli:</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          „Wszystko czego potrzebujesz aby stać się świadomym twórcą”
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900 text-justify">
          W przeciwieństwie do całej gamy zajęć, które opierają się na nagranych lekcjach, kurs „Napisz historię marzeń!” jest prowadzony na żywo. Daje to możliwość komunikacji, ćwiczeń i zabawy podczas trwania zajęć. 
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900 text-justify">
          Warsztaty prowadzone w małych grupkach pozwalają na integrację, nawiązywanie internetowych przyjaźni i wzajemnego wspierania się w twórczej drodze. Kurs prowadzony jest przez platformę Google Meets, składa się z pięciu spotkań, a jego celem jest umożliwienie uczestnikowi publikacji swojego pierwszego opowiadania we wspólnej antologii.
          </p>
        </div>
       {/*  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl z-0">
          <img className='butterFlySizer' src={motyl} />
          <div className='butterFlySizer'></div>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cherry-pink">
                    <img src={feature.icon} className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </section>
  )
}
