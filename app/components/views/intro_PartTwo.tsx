import { useEffect, useRef, useState } from 'react';
import arrow_down from "../../../public/icons/arrow_down.svg";
import { motion, Variants } from "framer-motion";
import TypewriterEffect from '../features/typeWriter';
import stamp from '../../../public/images/png stamp for insta.png';
import diamond from '../../../public/icons/boxDiamond.svg';
import autorPhoto from '../../../public/images/author_AvatarTwo.png'

const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

export default function Intro_PartTwo() {

    const [isOpen, setIsOpen] = useState(false);

    //const introRef = useRef(null);

    const [isExpanded, setIsExpanded] = useState({
        one: false,
        two: false,
    });

    function toggleHiddenComponentsText(key: string) {
        
        setIsExpanded((prevState) => ({
            ...prevState, 
            [key]: !prevState[key as keyof typeof prevState]
        }));
    }

    useEffect(() => {

        // tutaj mamy szanowną funkcjonalność odpowiedzialną za pokazywanie i znikanie napisów w Intro
        const observer = new IntersectionObserver((entries) => {
            //console.log(entries)
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showHiddenComponent');
                } else {
                    entry.target.classList.remove('showHiddenComponent');
                }
            });
        });

        if (typeof IntersectionObserver !== 'undefined') {
            const hiddenElements = document.querySelectorAll('.hideComponent');
            hiddenElements.forEach((element) => observer.observe(element));
            //return observer.disconnect();
        }
    }, []);

    return (
      <section className="w-full bg-mimi-pink relative xs:pb-32 scroll-smooth z-20">
        <div className="max-w-commonLayout min-h-screen flex flex-col justify-center items-center mx-auto">
            <div className='flex flex-row justify-between items-center w-full xs:flex-col-reverse'>
                <div className='flex flex-col items-center m-auto h-128'>
                    <p className='whitespace-nowrap font-bold'>AUTOR</p>
                    <p className='font-thin text-3xl mb-6'>Amelia Pudzianowska</p>
                    <div className='w-32 h-32 bg-light-pink border rounded-full flex justify-center items-center mb-5 shadow border-transparent'>
                        <img className='w-28 h-28 rounded-full my-5' src={autorPhoto} />
                    </div>
                    <span className='w-72 h-72 text-left whitespace-break-spaces tracking-tight'>
                        Szlifowanie diamentów pod okiem doświadczonego Mentora jest rozwiązaniem, które może otworzyć drzwi do sukcesu. 
                        <TypewriterEffect styles={{  }} text='  Autorski kurs Amelii Pudzianowskiej, doświadczonej twórczyni, pisarki i poetki to nowatorski pomysł na kreatywne pisanie.'/>
                    </span>
                        <a href="/about" className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Więcej</a>
                    {/* <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        className="menu w-72 drop-shadow"
                        >
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex justify-center items-center mb-2 py-5 px-5 w-full shadow rounded-lg cursor-pointer'
                        >
                            <motion.div
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                            >
                            <svg width="15" height="15" viewBox="0 0 20 20">
                                <path d="M0 7 L 20 7 L 10 16" />
                            </svg>
                            </motion.div>
                        </motion.button>
                        <motion.div
                            className='flex flex-col bg-lavenda-pink gap-2'
                            variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                            }
                            }}
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                        >
                            <motion.ul className='bg-lavenda-pink bg-left text-left p-3' variants={itemVariants}>
                                <h1>Dowiedz się więcej:</h1>
                                <li>o autorce</li>
                                <li>o kursie</li>
                            </motion.ul>
                        </motion.div>
                    </motion.nav> */}

                       {/*  <div className='hideComponent flex flex-col justify-end items-center'>
                            <button onClick={() => toggleHiddenComponentsText('two')}>{isExpanded.two ? 'Ukryj tekst' : 'dowiedz się więcej'}<img className="w-5 h-5 ml-2 p-0 inline" src={arrow_down}/></button>
                            {isExpanded.two && (
                                <div className='flex flex-col justify-center items-center bg-white'>
                                    <p className="text-lg text-magenta m-10 p-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat malesuada bibendum. Suspendisse fermentum est ante, quis placerat eros egestas sit amet. Mauris laoreet mi ut neque dignissim, viverra commodo leo gravida. Phasellus pellentesque orci non magna lobortis ultrices. Ut vitae nulla in lacus consequat placerat. Donec a ligula imperdiet, tincidunt eros nec, pharetra mauris.</p>
                                </div>
                            )}
                        </div> */}
                </div>
                <div className='text-left m-auto xs:w-full xs:m-0 xs:flex xs:flex-col'>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter xs:text-5xl xs:max-w-xs xs:mt-12 xs:how">JAK</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter xs:text-5xl xs:max-w-xs xs:toWrite">PISAĆ</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter xs:text-5xl xs:max-w-xs xs:to">ABY</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter xs:text-5xl xs:max-w-xs xs:gather">PORYWAĆ</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter xs:text-5xl xs:max-w-xs xs:crowds xs:mb-24">TŁUMY?</h3>
                </div>
            </div>
        </div>
      </section>
    );
}

