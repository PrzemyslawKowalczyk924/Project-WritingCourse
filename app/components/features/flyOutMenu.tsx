import { useState } from 'react';
import { motion} from 'framer-motion';
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PencilSquareIcon,
  NewspaperIcon,
  PencilIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const solutions = [
  { name: 'Napisz historię marzeń', description: 'Czym jest kurs i do kogo jest skierowany?', href: '/course', id: '#course_Intro', icon: PencilSquareIcon },
  { name: 'Wyzwania', description: 'Co będzie twoim zadaniem na kursie i co zyskasz dzięki niemu?', href: '/course', id: '#course_Enhance', icon: TrophyIcon },
  { name: 'Ślad', description: "Czyli jak pisać, aby porywać tłumy i pozostawić po sobie niezatarty ślad", href: '/course', id: '#course_Sight', icon: FingerPrintIcon },
  { name: 'Integrcja', description: 'Przekonaj się, że w grupie jest nie tylko raźniej, ale owocniej', href: '/course', id: '#course_Enhance', icon: UserGroupIcon },
  { name: 'Publikacja', description: 'Napisz swoją historię marzeń i pozwól, aby przeczytali ją inni!', href:'/course', id: '#course_Publication', icon: PaperAirplaneIcon },
];

const callsToAction = [
  { name: 'Obejrzyj demo', href: '#', icon: PlayCircleIcon },
  { name: 'Zapisz się', href: 'pricing', icon: ShoppingCartIcon },
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
        className="pl-4 inline-flex items-center gap-x-px text-sm font-medium text-white h-full hover:text-cherry-pink border-solid border-2 rounded-full border-gray-600"
      >
        <span>kurs</span>
        <span className="h-5 w-5" aria-hidden="true">&#8601;</span>
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
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-b-3xl bg-mimi-pink text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {solutions.map((item) => (
                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-light-pink">
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cherry-pink ">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-gray-800" aria-hidden="true" />
                      </div>
                      <div>
                        {/* <a href={item.href} className="font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a> */}
                        <a href={item.href + item.id} className="font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-lavenda-pink">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
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