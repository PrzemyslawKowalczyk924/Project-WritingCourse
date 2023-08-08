const navigation = [
  { name: 'kurs', href: '#', current: true },
  { name: 'o mnie', href: '#', current: false },
  { name: 'blog', href: '#', current: false },
  { name: 'kontakt', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <div className="flex space-x-4">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
  )
}
