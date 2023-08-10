import { useState, useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";

const links = [
    { name: 'Nauka z mentorem', href: '#' },
    { name: 'Nauka w grupie', href: '#' },
    { name: 'Praca własna', href: '#' },
    { name: 'Publikacja', href: '#' },
  ]
  
  export default function InNumbers() {
    
   /*  const [percent, setPercent] = useState(0);
    const [meetsNumber, setMeetsNumber] = useState(0);
    const [hour, setHour] = useState(0);
    const [weeks, setWeeksNumber] = useState(0);
    const [members, setMembersNumer] = useState(0); */

    
    /*  useEffect(() => {

      if (percent === 100) return;

      const timeout = setTimeout(() => {
        setPercent(percent + 1);
      }, 1 + percent * 3);
    }, [percent]); */


    const countH1 = useMotionValue(0);
    const countH2 = useMotionValue(0);
    const countH3 = useMotionValue(0);
    const countH4 = useMotionValue(0);
    const countH5 = useMotionValue(0);

    const roundedH1 = useTransform(countH1, Math.round);
    const roundedH2 = useTransform(countH2, Math.round);
    const roundedH3 = useTransform(countH3, Math.round);
    const roundedH4 = useTransform(countH4, Math.round);
    const roundedH5 = useTransform(countH5, Math.round);

    const createAnimation = (motionValue: any, targetValue: number, duration: number) => {
      return animate(motionValue, targetValue, { duration: duration });
    };

    useEffect(() => {
      const animations = [
        createAnimation(countH1, 5, 3),
        createAnimation(countH2, 60, 3),
        createAnimation(countH3, 3, 3),
        createAnimation(countH4, 8, 5),
        createAnimation(countH5, 100, 10),
      ];

      return () => {
        animations.forEach((animation) => animation.stop());
      };
    }, []);


     const stats = [
       { name: 'Spotkania', value: roundedH1},
       { name: 'Godzina zegarowa zajęć', value: roundedH2, symbol: 'min'},
       { name: 'Intensywne tygodnie zajęć', value: roundedH3},
       { name: 'Uczestników', value: roundedH4 },
       { name: 'Satysfakcja', value:  roundedH5, symbol: '%' },
     ]


    return (
      <div className="relative isolate overflow-hidden bg-mimi-pink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-6xl">„Napisz historię marzeń!” w liczbach:</h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
            Warsztaty prowadzone w małych grupkach pozwalają na integrację, nawiązywanie internetowych przyjaźni i wzajemnego wspierania się w twórczej drodze.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.name} className={`flex flex-col-reverse items-center justify-center last:col-span-4 last:mt-4 `}>
                  <dt className="text-xl leading-7 text-gray-700">{stat.name}</dt>
                  <motion.dd className={`text-5xl mb-3 font-bold leading-10 tracking-tight text-black ${
                  index === 1 ? 'second-child-ofValue' : ''
                } ${index === stats.length - 1 ? 'last-child-ofValue' : ''} `}>{stat.value}</motion.dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  