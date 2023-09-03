
export default function AskMore() {

    return (

        <section className="text-gray-600 body-font bg-mimi-pink z-30 relative">
            <div className="max-w-commonLayout px-5 py-24 mx-auto z-30">
                <h1 className="sm:text-3xl md:text-4xl font-medium title-font text-center text-gray-900 mb-20 tracking-tight">Masz więcej pytań?</h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 xs:w-3/4 md:w-1/3 flex md:flex-col md:items-center">
                        <div className="w-12 h-12 xs:mx-10 inline-flex items-center justify-center rounded-full bg-lavenda-pink text-gray-800 mb-4 flex-shrink-0 md:mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div className="flex-grow pl-6 md:p-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Telefon</h2>
                            <p className="leading-relaxed text-base mb-10">532 543 989</p>
                            <a href="pricing" className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Zadzwoń</a>
                        </div>
                    </div>
                    <div className="p-4 xs:w-3/4 md:w-1/3 flex md:flex-col md:items-center">
                        <div className="w-12 h-12 xs:mx-10 inline-flex items-center justify-center rounded-full bg-lavenda-pink text-gray-800 mb-4 flex-shrink-0 md:mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className="flex-grow pl-6 md:p-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">E-mail</h2>
                            <p className="leading-relaxed text-base mb-10">amelia.pudzianowska@wp.pl</p>
                            <a href="contact" className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Napisz
                            </a>
                        </div>
                    </div>
                    <div className="p-4 xs:w-3/4 md:w-1/3 flex md:flex-col md:items-center">
                        <div className="w-12 h-12 xs:mx-10 inline-flex items-center justify-center rounded-full bg-lavenda-pink text-gray-800 mb-4 flex-shrink-0 md:mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                        <div className="flex-grow pl-6 md:p-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">FAQ </h2>
                            <p className="leading-relaxed text-base mb-10">Najczęściej zadawane pytania</p>
                            <a href="pricing" className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sprawdź
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
