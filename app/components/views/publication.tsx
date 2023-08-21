import { Carousel } from 'flowbite-react';
import fota1 from '../../../public/images/blackTulip1.jpg';
import fota2 from '../../../public/images/blackTulip2.jpg';
import fota3 from '../../../public/images/blackTulip3.jpg';

export default function Publication() {

    return (
        <section className="bg-mimi-pink dark:bg-gray-900 xs:min-h-5/4 sm:min-h-5/4 md:min-h-screen">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-commonLayout xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 h-full xs:flex xs:h-full xs:flex-col-reverse">
                <Carousel indicators={false} className=''>
                    <img
                        alt="..."
                        src={fota1}
                    />
                    <img
                        alt="..."
                        src={fota2}
                    />
                    <img
                        alt="..."
                        src={fota3}
                    />
                    <img
                        alt="..."
                        src={fota1}
                    />
                    <img
                        alt="..."
                        src={fota2}
                    />
                </Carousel>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-6 text-4xl tracking-tighter font-extrabold text-gray-900 dark:text-white">Z nami opublikujesz opowiadanie w eBooku!</h2>
                    <p className="mb-6 text-gray-500 md:text-lg tracking-tight dark:text-gray-400 text-justify">Cieszę się ogromnie, że mogę zaprezentować wam naszą pierwszą antologię z opowiadaniami! Udostępniam ją całkowicie za darmo, aby zachęcić Was do odkrywania mojego kursu i dołączenia do naszej kreatywnej społeczności pisarskiej. Pobierzcie antologię i doświadczcie niesamowitych możliwości, jakie daje nasz kurs! Razem możemy stworzyć coś wyjątkowego!</p>
                    <a href="images/LoremIpsum.pdf" target="_blank" className="bg-cherry-pink m-5 inline-flex shadow items-center text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Czytaj online
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="images/LoremIpsum.pdf" className="bg-cherry-pink m-5 inline-flex items-center text-gray-800 bg-primary-700 shadow hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" download>
                        Pobierz w PDF
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

{/* <embed src="images/LoremIpsum.pdf" type="application/pdf" width="100%" height="600px" /> */ }
{/*   <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
<img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" /> */}