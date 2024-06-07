

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  FingerPrintIcon,
  SquaresPlusIcon,
  PencilIcon,
  LanguageIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  PencilSquareIcon,
  NewspaperIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  TrophyIcon,
  HeartIcon,
  BookOpenIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';
import { GiGlassHeart, GiChewedHeart, GiHeartStake, GiHeartBottle,
  GiEvilBook, GiMicrophone, GiOldMicrophone, GiNotebook, GiCardJoker,
  GiFilmSpool,
 } from "react-icons/gi";

 import { BiCameraMovie } from "react-icons/bi";

 import { IoLibraryOutline, IoLibrary } from "react-icons/io5";
 import { FaFilter } from "react-icons/fa";

import inkDrop_2 from '../../../public/images/inkDrop_2.svg';
import HeartForPoem from '../../../public/images/HeartForPoem.svg';

const solutions = [
  { name: 'poezja', description: '"nie wierzę ranom milczącym i mamroczącym"', href: '/literaryWorks/poetry', icon: GiHeartBottle },
  { name: 'opowiadania', description: '"Pragnę być cyfrą w zbiorze liczb, liczbą..."', href: '/literaryWorks/novels', icon: GiEvilBook },
  { name: 'reportaże', description: '"Moja wena zaczęła się dwa dni temu..."', href: '/literaryWorks/articles', icon: GiMicrophone },
  { name: 'artykuły', description: 'Lorem ipsum dolor sit', href: '/literaryWorks/articles', icon: GiNotebook },
  { name: 'felietony', description: 'Lorem ipsum dolor sit amet', href: '/literaryWorks/articles', icon: GiCardJoker },
  { name: 'filmy', description: 'Lorem ipsum dolor sit amet', href: '/literaryWorks/articles', icon: GiFilmSpool },
];

const callsToAction = [
  { name: 'Przejrzyj wszystko', href: 'https://www.cozadzien.pl/radio-rekord/smutek-to-przyjaciel-artystow-o-warsztatach-literackich-i-poezji/100402', icon: IoLibrary, target: '_blank' },
  { name: 'Filtruj', href: 'pricing', icon: FaFilter, target: '_self' },
];

export default function Example() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative my-auto h-full">

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)

        }}
        className="inline-flex items-center gap-x-px text-sm font-medium text-black h-full border-gray-600"
      >
        <span className='pb-1 text-white'>twórczość</span>
        {/* <span className="h-5 w-5" aria-hidden="true">&#8601;</span> */}
        {isHovered && (
          <motion.div
            /*  transition={{
               type: "spring",
               stiffness: 190,
               damping: 13,
               ease: "linear",
               duration: 0.1,
               delay: 0.2
             }} */
            /* initial={{ x: -250, y: -100, rotate: -25, opacity: 0}}
            animate={{ x: -250, y: 0, rotate: 0, opacity: 1 }}
            whileTap={{ scale: 0.99 }}
            exit={{ x: -250, y: -100, rotate: -25, opacity: 0}} */
            className="absolute left-1/2 -z-50 top-16 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-b-3xl bg-gray-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-sm p-4 hover:bg-gray-800 border-b-2 border-gray-800 bg-gray-900 bg-dropdown-pattern">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-800">
                      <item.icon className="h-6 w-6 text-white group-hover:text-gray-200" aria-hidden="true" />
                    </div>
                    <div className='mx-auto'>
                      {/* <a href={item.href} className="font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a> */}
                      <a href={item.href} className="font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200/5 bg-gray-900">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-800"
                    target={item.target}
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}