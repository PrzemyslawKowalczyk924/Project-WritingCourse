import rybacy from '../../public/images/rybacy.svg';
import muza from '../../public/images/rzymianka_black_1.svg';
import kocha from '../../public/images/kocha_1.svg';
import proste from '../../public/images/rynek_1.svg';
import gdzieDiabel from '../../public/images/gdzieDiabel_1.svg';
import pokolenie from '../../public/images/pokoleniePost.jpg';
import gender from '../../public/images/gender.jpg';
import madonna from '../../public/images/madonna.jpg';

export default function Example() {
    return (
        <div className="relative overflow-hidden min-h-screen bg-lavenda-pink top-0 p-10">
            <img src={rybacy} alt="rybacy" className='fixed top-40 left-0 opacity-10'/>
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-20">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="md:text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Troszkę więcej o mnie
                        </h1>
                        <p className="my-10 text-base text-gray-500 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="my-10 text-base text-gray-500 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="my-10 text-base text-gray-500 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        {/* <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-cherry-pink shadow px-8 py-3 text-center font-medium text-gray-800 hover:bg-indigo-700"
                        >
                            Kurs
                        </a> */}
                    </div>
                    <div>
                        <div className="mt-0">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-6xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={kocha}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-center opacity-5 hover:opacity-85"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={proste}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-right opacity-5 hover:opacity-85"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={gdzieDiabel}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-center opacity-5 hover:opacity-85"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={muza}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={pokolenie}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-bottom opacity-5 hover:opacity-85"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={gender}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-right opacity-5 hover:opacity-85"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={madonna}
                                                    alt=""
                                                    className="h-full w-full object-cover cursor-zoom-in object-left opacity-5 hover:opacity-85"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//https://via.placeholder.com/256x192/f4ccccff/434343?text=2
//https://via.placeholder.com/256x341/f4ccccff/434343?text=1