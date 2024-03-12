import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FingerPrintIcon,
  SquaresPlusIcon,
  PencilIcon,
  LanguageIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import gazeta from '../../../public/images/gazeta.jpg';

const solutions = [
  { name: 'poezja', description: 'Czym jest kurs i do kogo jest skierowany?', href: '/literaryWorks/poetry', icon: PencilIcon },
  { name: 'opowiadania', description: 'Co będzie twoim zadaniem na kursie i co zyskasz dzięki niemu?', href: '/literaryWorks/novels', icon: LanguageIcon },
  { name: 'powieści', description: "Czyli jak pisać, aby porywać tłumy i pozostawić po sobie niezatarty ślad", href: '/literaryWorks/articles', icon: FingerPrintIcon },
  { name: 'artykuły', description: 'Przekonaj się, że w grupie jest nie tylko raźniej, ale owocniej', href: '/literaryWorks/articles', icon: SquaresPlusIcon, background: gazeta },
  { name: 'felietony', description: 'Napisz swoją historię marzeń i pozwól, aby przeczytali ją inni!', href: '/literaryWorks/articles', icon: PaperAirplaneIcon },
  { name: 'inne', description: 'Napisz swoją historię marzeń i pozwól, aby przeczytali ją inni!', href: '/literaryWorks/articles', icon: PaperAirplaneIcon },
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
              <div className="">
                {solutions.map((item) => (
                  <div key={item.name} className="relative flex flex-col h-14 flex-wrap items-center justify-center gap-x-6 rounded-sm border-b-2 border-b-mimi-pink hover:bg-mimi-pink">
                    <a href={item.href} className="text-sm h-full w-full p-4 font-medium text-gray-800">
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