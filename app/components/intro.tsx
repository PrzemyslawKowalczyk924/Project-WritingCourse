import { useEffect, useState } from 'react';
import arrow_down from "../../public/icons/arrow_down.svg"

export default function Intro() {
    
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleHiddenComponentsText() {
        setIsExpanded(!isExpanded);
    }
    
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
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
      <section className="">
        <div className="min-h-1/2 container flex flex-col justify-start items-center">
            <h2 className="hideComponent text-3xl mb-12">Napisz historię marzeń!</h2>
            <div className='hideComponent flex flex-col justify-center items-center'>
                <button onClick={toggleHiddenComponentsText}>{isExpanded ? 'Ukryj tekst' : 'rozwiń tekst'}<img className="w-5 h-5 ml-2 p-0 inline" src={arrow_down}/></button>
                {isExpanded && (
                    <div className='container flex flex-col justify-center items-center'>
                        <p className="text-lg">Dodatkowy tekst, który był wcześniej schowany.</p>
                    </div>
                )}
            </div>
        </div>

        <div className="min-h-1/2 container flex flex-col justify-start items-center">
            <h3 className="hideComponent text-2xl mb-12">Jak pisać aby porywać tłumy?</h3>
            <div className='hideComponent flex flex-col justify-center items-center'>
                <button onClick={toggleHiddenComponentsText}>{isExpanded ? 'Ukryj tekst' : 'rozwiń tekst'}<img className="w-5 h-5 ml-2 p-0 inline" src={arrow_down}/></button>
                {isExpanded && (
                    <div className='container flex flex-col justify-center items-center'>
                        <p className="text-lg">Dodatkowy tekst, który był wcześniej schowany.</p>
                    </div>
                )}
            </div>
        </div>
      </section>
    );
}



