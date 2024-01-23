import FlyOut from "../features/flyOutMenu";
import FlyOutForWorks from "../features/flyOutMenuForWorks";

const navigation = [
  { name: 'strona główna', href: 'start', current: false },
  { name: 'blog', href: 'blog', current: false },
  { name: 'kontakt', href: 'contact', current: false },
]

const oneElement = {
  name: 'o mnie',
  href: '/about',
  current: true,
}

export default function Navigation() {
  return (
    <div className="flex space-x-2 h-full w-full items-center justify-evenly">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={
            item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-gray-300 rounded-md px-3 py-2 text-sm font-medium'
          }
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}
      {
        <a
        key={oneElement.name}
        href={oneElement.href}
        className='text-white hover:bg-gray-700 hover:text-gray-300 hover:rounded-md px-3 py-2 text-sm font-medium'
        aria-current={oneElement.current ? 'page' : undefined}
        >
          {oneElement.name}
        </a>
      }
      <FlyOutForWorks />
      <FlyOut />
    </div>
  )
}
