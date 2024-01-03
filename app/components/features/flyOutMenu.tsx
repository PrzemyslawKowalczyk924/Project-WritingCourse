import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  PencilIcon,
  LanguageIcon,
  PaperAirplaneIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

const solutions = [
  { name: 'Napisz historię marzeń', description: 'Czym jest kurs i do kogo jest skierowany?', href: '#', icon: PencilIcon },
  { name: 'Wyzwania', description: 'Co będzie twoim zadaniem na kursie i co zyskasz dzięki niemu?', href: '#', icon: LanguageIcon },
  { name: 'Ślad', description: "Czyli jak pisać, aby porywać tłumy i pozostawić po sobie niezatarty ślad", href: '#', icon: FingerPrintIcon },
  { name: 'Integrcja', description: 'Przekonaj się, że w grupie jest nie tylko raźniej, ale owocniej', href: '#', icon: SquaresPlusIcon },
  { name: 'Publikacja', description: 'Napisz swoją historię marzeń i pozwól, aby przeczytali ją inni!', href: '#', icon: PaperAirplaneIcon },
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
        onMouseLeave={() => setIsHovered(false)}
        className="pl-4 inline-flex items-center gap-x-px text-sm font-semibold text-white h-full hover:text-yellow-200"
        whileTap={{ scale: 0.9 }}
      >
        <span>kurs</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        {isHovered && (
          <motion.div
            transition={{
              type: "spring",
              stiffness: 190,
              damping: 10,
              ease: "linear",
              duration: 0.1,
              delay: 0.2
            }}
            initial={{ x: -250, y: -100, rotate: -25, opacity: 0 }}
            animate={{ x: -250, y: 0, rotate: 0, opacity: 1 }}
            whileTap={{ scale: 0.99 }}
            className="absolute left-1/2 z-10 top-16 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-b-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div>
                      <a href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
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