import { useEffect, useRef, useState } from 'react';
import arrow_down from "../../public/icons/arrow_down.svg";
import dreamComeTrue from "../../public/images/DreamComeTrue.jpg";
import typeWriter2 from "../../public/movies/typewriter2.mp4"

export default function Intro() {

    const introRef = useRef(null);

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
            console.log(entries)
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


    useEffect(() => {
        let path = document.querySelector('path');
        let svgElem = document.querySelector('svg');
        let pathLength = path.getTotalLength();
        let animationOffset = 0.8; // Wartość odzwierciedlająca moment, w którym ma nastąpić spowolnienie animacji (wartość 0.8 oznacza 80% progresu animacji)

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;

        function handleScroll() {
        // Pobierz informacje o wymiarach i położeniu elementu SVG
        var svgRect = svgElem.getBoundingClientRect();
        var svgOffsetTop = svgRect.top;
        var svgHeight = svgRect.height;

        // Oblicz pozycję dolnego brzegu elementu SVG
        var svgOffsetBottom = svgOffsetTop + svgHeight;

        // Sprawdź, czy element SVG jest widoczny na ekranie
        var isSvgVisible = (svgOffsetTop < window.innerHeight) && (svgOffsetBottom > 0);

        if (isSvgVisible) {
            // Oblicz postęp animacji SVG na podstawie przewinięcia strony
            var scrollPercentage = (window.scrollY - svgOffsetTop) / svgHeight;
            scrollPercentage = Math.max(0, Math.min(scrollPercentage, 1));

            // Oblicz postęp animacji uwzględniając spowolnienie
            var animatedScrollPercentage = Math.min(scrollPercentage / animationOffset, 1);

            // Oblicz długość do narysowania
            var drawLength = pathLength * animatedScrollPercentage;

            // Rysuj animację SVG
            path.style.strokeDashoffset = pathLength - drawLength;
        }
        }

        window.addEventListener('scroll', handleScroll);
    })

   /*  useEffect(() => {

        // tutaj mamy szanowną funkcjonalność odpowiedzialną za animację pióra

        let path: null | SVGPathElement | undefined = document.querySelector('path');
        let svgElem = document.querySelector('svg')
       
        let pathLength = path.getTotalLength();


        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        
        path.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll', () => {

            //what % down is it?
            var scrollPrecentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            //length offset the dashes
            var drawLength = pathLength * scrollPrecentage;

            //draw in reverse

            path.style.strokeDashoffset = pathLength - drawLength;

        })


    }); */

    return (
      <section className="w-full bg-lavenda-pink relative scroll-smooth">
        <div className='customContainer flex flex-row justify-around'>
            <div className="text-black min-h-7/8 flex flex-row justify-start items-end w-6/12">
                <div className="text-black flex flex-col justify-center items-start">
                    <div className="bg-lavenda-pink overflow-hidden rounded-full shadow-xl mr-48 ml-auto mb-36">
                        <video src={typeWriter2} autoPlay loop muted className="w-60 h-60 object-cover"></video>
                    </div>
                    <h2 className="text-10xl font-light mb-10">Napisz</h2>
                    <div className="text-black tracking-tighter font-black text-8xl flex flex-row justify-end items-center mt-6">
                        <p className="mt-3 mr-5 mb-12">historię</p>
                        <p className="mb-12">marzeń!</p>
                    </div>   
                </div>
            </div>
            <div className='flex flex-col justify-center items-end w-6/12  text-justify'>
                <p className=' w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat malesuada bibendum. Suspendisse fermentum est ante, quis placerat eros egestas sit amet. Mauris laoreet mi ut neque dignissim, viverra commodo leo gravida.</p>
            </div>
        </div>
        <div ref={introRef} className='inlineContainer'>
            <svg width="1291" height="643" viewBox="0 0 1191 643" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path d="M20 169.5C18 169 18.5 169 18 168.5C17.6 168.1 17.5 167.333 17.5 167C18 166 18 165.5 19.5 165.5C20.7 165.5 21.3333 166.167 21.5 166.5C21.9 167.3 21.6667 168.167 21.5 168.5L23.5 170.5L25.5 172.5L27.5 174.5L28.5 175.5C29 175.5 29 175.5 29 175C29 174.6 28.6667 172.167 28.5 171L28 166L27.5 162C27 160 27 159 25.5 158C24.3 157.2 21.6667 156.667 20.5 156.5C19 156 17 155.5 16 155C15.2 154.6 15 154.167 15 154C16.2 152.8 16.5 151.833 16.5 151.5C16 150 16 150 15 149C14.2 148.2 13.3333 148.333 13 148.5C11.8 148.9 9.83333 150.667 9 151.5C6.6 153.9 4.66667 155.833 4 156.5C2.4 158.1 1.66667 158.833 1.5 159C1 160.5 1 162 1.5 163C2 164 2.5 164.5 4 164.5C5.5 164.5 6 163.5 6.5 163C6.9 162.6 8 165.833 8.5 167.5L10 172.5C11.2 174.5 12.5 175 13 175C16.6 175.4 20.5 175.833 22 176C26 176.4 27.6667 176.167 28 176C29 176.5 32 177 36 182C40 187 43 183 50 182C55.6 181.2 62.3333 181.333 65 181.5C71 182 72.5 181 76 183.5C78.8 185.5 70.8333 185.667 66.5 185.5C66.5 185.5 66.4 185.5 66 185.5C65.6 185.5 65.1667 186.167 65 186.5C66.6 187.7 71.6667 188.333 74 188.5C76 188.5 73.5 189.5 71.5 190C69.5 190.5 68.5 190 67.5 190.5C66.7 190.9 66.1667 191.667 66 192C65.8333 192.333 66 193.2 68 194C70 194.8 71.5 195 72 195C86.8333 196.833 164.992 243.5 174.5 243.5C257.5 243.5 230.5 205 257.5 205C313.9 196.6 298.5 376.5 375.5 243.5C653.5 556 790 -22.5 645 2.50027C600 53 769.5 235 573.5 354.5C638.7 354.5 695.5 258.667 723.5 205C834.7 205 874.833 205 881 205V449H1190V643" stroke="black" strokeWidth="2"/>
            </svg>
        </div>

        <div className="bg-mimi-pink min-h-screen flex flex-col justify-center items-center">
            <div className='flex flex-row justify-between items-center'>
                <div className=''>
                    <p className='whitespace-nowrap font-bold'>A NOVEL BY</p>
                    <p className='font-thin'>Twoje Naziwsko</p>
                </div>
                <div className='text-left'>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter">JAK</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter">PISAĆ</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter">ABY</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter">PORYWAĆ</h3>
                    <h3 className="hideComponent text-7xl mb-12 font-extralight tracking-tighter">TŁUMY?</h3>
                </div>
            </div>
            <div className='hideComponent flex flex-col justify-end items-center'>
                <button onClick={() => toggleHiddenComponentsText('two')}>{isExpanded.two ? 'Ukryj tekst' : 'dowiedz się więcej'}<img className="w-5 h-5 ml-2 p-0 inline" src={arrow_down}/></button>
                {isExpanded.two && (
                    <div className='flex flex-col justify-center items-center bg-white'>
                        <p className="text-lg text-magenta m-10 p-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat malesuada bibendum. Suspendisse fermentum est ante, quis placerat eros egestas sit amet. Mauris laoreet mi ut neque dignissim, viverra commodo leo gravida. Phasellus pellentesque orci non magna lobortis ultrices. Ut vitae nulla in lacus consequat placerat. Donec a ligula imperdiet, tincidunt eros nec, pharetra mauris.</p>
                    </div>
                )}
            </div>
        </div>
      </section>
    );
}



