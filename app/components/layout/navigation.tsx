import FlyOut from "../features/flyOutMenu";
import FlyOutForWorks from "../features/flyOutMenuForWorks";

const navigation = [
  /* { name: 'o mnie', href: 'about', current: false }, */
  { name: 'blog', href: 'blog', current: false },
  { name: 'kontakt', href: 'contact', current: false },
]

const oneElement = {
  name: 'o mnie',
  href: 'toon',
  current: true,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <div className="flex space-x-2 h-full items-center">
      <FlyOut />
      {
        <a
          key={oneElement.name}
          href={oneElement.href}
          className='text-white hover:bg-gray-700 hover:text-white hover:rounded-md px-3 py-2 text-sm font-medium'
          aria-current={oneElement.current ? 'page' : undefined}
        >
          {oneElement.name}
        </a>
      }
      <FlyOutForWorks />

      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-gray-300 rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}

    </div>
  )
}
