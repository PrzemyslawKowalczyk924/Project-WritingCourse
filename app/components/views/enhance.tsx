import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import boss from '../../../public/icons/boss_ceo.svg';
import art from '../../../public/icons/art.svg';
import megaphone from '../../../public/icons/megaphone.svg';
import typingMachine from '../../../public/icons/typingMachine.svg';
import slonecznik11 from '../../../public/images/grafika11.svg'

const features = [
  {
    name: 'Pisz jak szef!',
    description:
      'To ty decydujesz jaki będzie Twój styl i o czym napiszesz. Jednak każdy dobry pisarz ma swojego redaktora, który jest dla niego niczym stary dobry mistrz. Pod okiem mentora dowiesz się jak pisać, aby Twój styl stał się marką inspirującą innych pisarzy.',
    icon: boss,
  },
  {
    name: 'Ciesz się sztuką!',
    description:
      'Jeśli pisanie to dla Ciebie tylko czyste rzemiosło szybko się znudzisz. Musisz pokochać to co robisz. Delektować się tym. Puść wodze wyobraźni i baw się słowami. Poczuj to co zowie się sztuką! A wena? Nie martw się, sama przyjdzie.',
    icon: art,
  },
  {
    name: 'Powiedz, światu coś ważnego!',
    description:
      'To właśnie tu na naszym kursie, być może poraz pierwszy zadebiutujesz i usłyszą Cię inni. Efektem naszej wspólnej nauki będzie Twoje nazwisko umieszczone w gronie innych autorów naszej wspólnej antologii.',
    icon: megaphone,
  },
  {
    name: 'Rozpisz się!',
    description:
      'Kurs to dobry początek, ale na nim nasza przygoda się nie kończy. Liczna społeczność absolwentów naszych kursów to docelowe miejsce, w którym wciąż będziecie mogli publikować i szlifować swój warsztat literacki.',
    icon: typingMachine,
  },
]

export default function Enhance() {
  return (
    <section className="bg-lavenda-pink py-24 sm:py-32 z-20 relative">
      <img className='absolute w-96 h-80 top-1/3 right-auto  z-0' src={slonecznik11} />
      <div className="mx-auto max-w-commonLayout px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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
        </div>
      </div>
    </section>
  )
}