import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

import faceBookIcon from '../../public/icons/faceBookIcon.svg'
import instagramIcon from '../../public/icons/instagramIcon.svg'
import gmailIcon from '../../public/icons/gmailIcon.svg'
import emailIcon from '../../public/icons/emailIcon.svg'


export default function Example() {


  return (
    <section className="bg-contact-pattern-2 py-16 bg-lavenda-pink dark:bg-lavenda-pink" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-gray-800 dark:text-blue-200">
              Kontakt
            </p>
            <h2
              className="font-heading my-8 font-bold tracking-tight text-gray-900 dark:text-white text-xl sm:text-3xl">
              Wszystko zaczyna się od słów
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-slate-400">Skontaktuj się z ze mną, aby dowiedzieć się, jak mogę pomóc Ci w realizacji Twoich literackich marzeń.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-left text-base text-gray-800 dark:text-slate-400">
                Poniżej znajdziesz źródła w mediach społecznościowych, przez które możesz łatwo nawiązać ze mną kontakt.
                Udostępniam również tradycyjną formę kontaktu za pomocą formularza. Wpisz swój adres e-mail oraz treść, a ja odpowiem.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded  text-gray-50">
                    <img src={emailIcon} className='' />
                  </div>
                  <div className="ml-4 my-4 content-center">
                    <h3 className=" text-lg  leading-6 text-gray-900 dark:text-white">amelka.pudzianowska@wp.pl
                    </h3>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded  text-gray-50">
                    <img src={faceBookIcon} className='' />
                  </div>
                  <div className="ml-4 my-4 content-center">
                    <a href='https://www.facebook.com/amelia.pudzianowska' target='_blank'>
                      <h3 className=" text-lg font-medium leading-6 text-gray-900 dark:text-white">𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸</h3>
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded  text-gray-50">
                    <img src={instagramIcon} className='' />
                  </div>
                  <div className="ml-4 my-4 content-center">
                    <a href='https://www.instagram.com/nizejpodpisana/' target='_blank'>
                      <h3 className=" text-lg font-medium leading-6 text-gray-900 dark:text-white">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h3>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Wypełnij formularz</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Twoje imię" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Twój e-mail" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols={30} rows={5} placeholder="Treść..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-cherry-pink text-gray-800 shadow-md border border-gray-400 px-6 py-3 font-xl rounded-md sm:mb-0">Wyślij</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}