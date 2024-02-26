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
import gazeta from '../../../public/images/gazeta.jpg';

const solutions = [
  { name: 'poezja', description: 'Czym jest kurs i do kogo jest skierowany?', href: '/literaryWorks', icon: PencilIcon },
  { name: 'opowiadania', description: 'Co będzie twoim zadaniem na kursie i co zyskasz dzięki niemu?', href: '/literaryWorks', icon: LanguageIcon },
  { name: 'powieści', description: "Czyli jak pisać, aby porywać tłumy i pozostawić po sobie niezatarty ślad", href: '#', icon: FingerPrintIcon },
  { name: 'artykuły', description: 'Przekonaj się, że w grupie jest nie tylko raźniej, ale owocniej', href: '/literaryWorks', icon: SquaresPlusIcon, background: gazeta },
  { name: 'felietony', description: 'Napisz swoją historię marzeń i pozwól, aby przeczytali ją inni!', href: '/literaryWorks', icon: PaperAirplaneIcon },
  { name: 'spis wszystkich', description: 'Napisz swoją historię marzeń i pozwól, aby przeczytali ją inni!', href: '/literaryWorks', icon: PaperAirplaneIcon },
];

export default function Example() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative my-auto h-full">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="inline-flex items-center gap-x-px text-sm font-medium text-white h-full hover:text-cherry-pink"
      >
        <span>twórczość</span>
        <span className="h-5 w-5" aria-hidden="true">&#8595;</span>
        {isHovered && (
          <motion.div
            className="absolute z-10 -left-40 top-16 flex">
            <div className="w-96 overflow-hidden rounded-b-3xl bg-lavenda-pink text-sm text-gray-800 leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div key={item.name} className="relative flex flex-col flex-wrap gap-x-6 rounded-sm border-b-2 border-b-mimi-pink p-4 hover:bg-mimi-pink">

                    <a href={item.href} className="text-sm font-medium text-gray-800">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}