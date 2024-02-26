import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Poezja', href: '#' },
    { name: 'Opowiadania', href: '#' },
    { name: 'Powieści', href: '#' },
    { name: 'Artykuły', href: '#' },
    { name: 'Felietony', href: '#' },
]
const filters = [
    /* {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    }, */
    {
        id: 'category',
        name: 'Dodatkowe kategorie',
        options: [
            { value: 'new-arrivals', label: 'Filozofia', checked: false },
            { value: 'sale', label: 'Horror', checked: false },
            { value: 'travel', label: 'Komedia', checked: true },
            { value: 'organization', label: 'Romans', checked: false },
            { value: 'accessories', label: 'Dramat', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Długość',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Dobytek literacki</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3 bg-lavenda-pink">
                                {/* Your content */}
                                <p className='overflow-scroll h-screen'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla in nulla ut molestie. Nunc et lacus venenatis, viverra risus rhoncus, facilisis nisi. Proin id justo convallis, tristique diam id, eleifend augue. Cras tristique magna vitae ullamcorper porttitor. Ut tempus metus lectus, at aliquet dui lacinia eget. Maecenas porttitor nunc tellus, sed condimentum sem elementum iaculis. Ut accumsan erat ipsum, vel molestie ipsum ornare eget. Nullam pretium nisi aliquet, hendrerit tellus et, efficitur eros. Aenean porta blandit ipsum, vitae sagittis nulla porta sit amet. Proin dignissim nibh eu erat tempus blandit. Nunc pretium elit nec suscipit consectetur. Sed tempor orci id sodales pretium. Vestibulum eget metus et orci convallis congue vitae eu ante.

Maecenas sed dui erat. Morbi sed risus id leo vehicula volutpat at non massa. Aliquam eu ultricies sem. Curabitur pulvinar justo sed ex congue porttitor. Vivamus convallis mauris sit amet tellus porta suscipit. Nunc sagittis, sem quis accumsan porttitor, leo mi hendrerit elit, ac feugiat libero ipsum eu massa. Praesent iaculis est eu scelerisque dictum. Ut eu viverra elit, ac venenatis lacus. Sed tincidunt, sapien sed consequat commodo, justo lectus semper sapien, at cursus ante ipsum nec neque. Vivamus suscipit est eget arcu elementum bibendum. Duis iaculis ex in justo porttitor rutrum. Sed blandit efficitur lacus non auctor.

Etiam vel orci sodales, consectetur diam vel, elementum risus. Sed volutpat dui id auctor suscipit. Nunc justo tortor, scelerisque sed posuere laoreet, feugiat tincidunt velit. Nulla ut sem eu sapien lacinia porttitor. Suspendisse tristique augue nisi, sed eleifend lectus molestie eget. In hac habitasse platea dictumst. Nullam ultrices condimentum ipsum, vitae tristique magna imperdiet ut. Nunc ullamcorper nunc id enim pretium molestie. Sed tellus ante, volutpat vel nibh ut, scelerisque porta mi. Vestibulum sollicitudin sapien porttitor rhoncus posuere. Curabitur quis nulla tortor. Nunc tincidunt tellus in massa blandit euismod. Nulla tempus vitae ipsum ac vehicula. Vestibulum a diam ac ligula malesuada imperdiet et id eros.

Vestibulum efficitur massa libero. Curabitur eleifend lacus vitae tincidunt tempor. Curabitur luctus commodo nisi quis pellentesque. Nullam pellentesque luctus semper. Mauris at justo malesuada, pretium mi non, malesuada nulla. Phasellus sit amet blandit tortor. Nulla nulla urna, aliquam quis eleifend vel, dignissim eget magna. Sed non libero ac felis aliquet euismod aliquam aliquet metus. Duis pellentesque, massa in pellentesque tempus, metus augue porta nulla, a ullamcorper libero ex blandit erat. Proin mauris magna, gravida consectetur ultrices ac, bibendum eget eros. In id urna consectetur, fermentum arcu ut, commodo justo. Fusce a semper felis, id efficitur urna. Vivamus quam urna, suscipit ac fringilla quis, ultricies non nulla. Duis non odio non quam facilisis semper non quis nibh.

Duis vitae ligula in augue laoreet consectetur a congue odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dapibus dapibus nisi id venenatis. Quisque tempor nisl ut diam scelerisque vestibulum. Vestibulum tellus velit, pharetra at lorem sit amet, vehicula scelerisque risus. Suspendisse sagittis ultrices dapibus. Morbi nec tincidunt ante, vel pretium leo. Quisque posuere eleifend ipsum sit amet vestibulum. Praesent neque arcu, ornare non leo a, faucibus iaculis justo. Aliquam lobortis eros mauris, blandit vestibulum enim placerat nec. Duis vitae consequat nisi, nec tincidunt metus. Sed eu purus eget velit placerat cursus. Praesent tincidunt velit in hendrerit elementum. Fusce vehicula mi eget varius lacinia. Morbi eget neque nulla. Nunc pretium tincidunt ligula quis suscipit.

Praesent non suscipit nulla, id sollicitudin nibh. Mauris sagittis vel massa ac sodales. Vivamus ac rhoncus augue. Cras a placerat arcu. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique lacinia egestas. Phasellus bibendum mi est, sit amet rutrum magna posuere lobortis. Proin ultricies facilisis aliquet.

Nulla tristique arcu eu lacinia vehicula. Vivamus ornare convallis egestas. Donec semper molestie consequat. Suspendisse lacinia volutpat condimentum. Ut et dolor justo. Ut sed volutpat erat. Fusce mollis tincidunt est, in elementum nunc pretium in. Aenean ullamcorper bibendum nunc, vitae maximus ligula. Cras commodo tempor nisi. Ut in orci vitae augue egestas lacinia dapibus eu leo. Donec eget sem sed magna lobortis facilisis ac ac tellus. Fusce tincidunt metus et arcu interdum interdum. Etiam non lacus metus.

Aenean dui orci, ullamcorper quis posuere sit amet, commodo eu velit. Nam non nibh metus. Sed ac tincidunt ligula, vitae interdum libero. Nunc bibendum, metus at congue volutpat, neque augue fermentum velit, ac aliquet nulla elit non magna. Maecenas porttitor eget nisl et tincidunt. Fusce posuere elementum dolor, id venenatis nibh dapibus ultricies. Suspendisse eget euismod est. Quisque at tellus vulputate, maximus nulla sit amet, ultrices dui. Mauris sit amet lobortis orci. Donec semper vestibulum dui, pellentesque imperdiet massa faucibus in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae sapien vestibulum orci tristique porttitor. Vivamus lorem nulla, maximus a posuere sed, blandit eu elit. Maecenas sollicitudin nec ante at rhoncus. Donec non velit dictum, vestibulum turpis in, elementum tortor. Sed bibendum, libero vitae vulputate accumsan, libero sapien finibus justo, quis venenatis orci libero sit amet erat.

Cras vel nulla eu quam facilisis ultricies. Integer non ligula sit amet ex sollicitudin dignissim vitae sit amet augue. In eget fringilla est, sit amet vehicula mi. Mauris ut dapibus tellus. Pellentesque at velit ut lacus semper varius. Pellentesque vitae enim in elit vulputate luctus ac vitae metus. Aliquam vitae diam leo. Nunc dictum lorem in vehicula commodo.

Integer non elit eu ligula consectetur dictum. Praesent non commodo lectus. Morbi condimentum purus arcu, at ullamcorper quam porta at. In sit amet lectus non erat maximus consequat sed in eros. Curabitur in fringilla ante, eget finibus tortor. Suspendisse nec augue neque. Integer pretium ipsum ex, sit amet ultricies sem aliquet ac. Aenean vestibulum arcu nec volutpat pellentesque. Vivamus semper tempus metus, ut laoreet diam finibus eu. Nulla lectus nunc, feugiat in risus eu, tempor porta dui. Nullam rhoncus neque a ipsum pharetra, non porttitor turpis laoreet.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}