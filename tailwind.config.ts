import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    screens: {

      'lg-max': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md-max': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'xs': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      '2xs': {'max': '424px'},
      // => @media (max-width: 425px) { ... }

      '2sm': {'min' : '425px'},
      // => @media (min-width: 425px) { ... }

      'sm': {'min': '640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'novela': 'Novela, serif'
    },
    extend: {
      inset: {
        '650px': '650px',
      },
      height: {
        '128': '32rem',
        '140': '48rem',
        '170': '70rem',
      },
      fontSize: {
        '10xl': '10rem', 
        '11xl': '12rem',
        '12xl': '14rem'
      },
      colors: {
        'lavenda-pink': '#FFEBEC',
        'mimi-pink': '#FFD6D9',
        'light-pink': '#FFC2C6',
        'cherry-pink': '#FFADB3',
        'magenta': '#a0025c',
        'teal': '#008080',
        'beige': '#D9BA8C',
        'morelowy': '#E9967B',
        'hexowy': '#fe947a'
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '7/8': '85vh',
        '5/4': '125vh',
        '6/4': '150vh',
        '140': '50rem',
      },
      maxWidth: {
        'commonLayout': '1140px'
      },
      backgroundImage: {
        'hero-pattern': 'url("public/images/hero_pinkBackground.png")',    
        'old-paper': 'url("https://images.pexels.com/photos/14129745/pexels-photo-14129745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',    
        'contact-pattern': 'url("public/images/grafika2.png")',   
        'slonecznik-pattern': 'url("public/images/grafika3.png")',   
        'slonecznik2-pattern': 'url("public/images/grafika6.png")',   
        'slonecznik3-pattern': 'url("public/images/grafika7.png")',   
        'slonecznik4-pattern': 'url("public/images/grafika8.png")',   
        'slonecznikAI-pattern': 'url("public/images/grafika9.svg")',   
        'slonecznik10-pattern': 'url("public/images/grafika10.svg")',   
        'slonecznik11-pattern': 'url("public/images/grafika11.svg")',   
        'slonecznik12-pattern': 'url("public/images/grafika12.svg")',   
        'zaslona-pattern': 'url("public/images/zaslona.jpg")',   
        'vanGogh-pattern': 'url("public/images/viewVanGoh.jpg"), url("public/images/vanGogh2.jpg")',   
        'ctaBackground-pattern': 'url("public/images/ctaBackGround.png")',   
        'ctaCourtain1-pattern': 'url("public/images/kurtyna1.jpg")',   
        'ctaCourtain2-pattern': 'url("public/images/kurtyna2.jpg")',   
        'ctaCourtain3-pattern': 'url("public/images/kurtyna3.jpg")',   
        'zaslona2-pattern': 'url("public/images/zaslona2.jpg")',   
        'zaslona3-pattern': 'url("public/images/zaslona3.jpg")',   
        'zaslona4-pattern': 'url("public/images/zaslona4.jpg")',   
        'leonAi-1': 'url("public/images/leonAi-1.jpg")',   
        'leonAi-2': 'url("public/images/leonAi-2.jpg")',    
        'leonAi-3': 'url("public/images/leonAi-3.jpg")',   
        'leonAi-4': 'url("public/images/leonAi-4.jpg")',    
        'leonAi-5': 'url("public/images/leonAi-5.jpg")',    
        'leonAi-6': 'url("public/images/leonAi-6.jpg")',    
        'leonAi-7': 'url("public/images/leonAi-7.jpg")',    
        'leonAi-8': 'url("public/images/leonAi-8.jpg")',    
        'leonAi-9': 'url("public/images/leonAi-9.jpg")',    
        'leonAi-10': 'url("public/images/leonAi-10.jpg")',    
        'leonAi-11': 'url("public/images/leonAi-11.jpg")',    
        'leonAi-12': 'url("public/images/leonAi-12.jpg")',    
        'leonAi-13': 'url("public/images/leonAi-13.jpg")',    
        'leonAi-14': 'url("public/images/leonAi-14.jpg")',    
        'leonAi-15': 'url("public/images/leonAi-15.jpg")',    
        'leonAi-16': 'url("public/images/leonAi-16.jpg")',    
        'leonAi-17': 'url("public/images/leonAi-17.jpg")',    
        'leonAi-18': 'url("public/images/leonAi-18.jpg")',    
        'leonAi-19': 'url("public/images/leonAi-19.jpg")',    
        'leonAi-20': 'url("public/images/leonAi-20.jpg")',    
        'leonAi-21': 'url("public/images/leonAi-21.jpg")',    
        'leonAi-22': 'url("public/images/leonAi-22.jpg")',    
        'leonAi-23': 'url("public/images/leonAi-23.jpg")',    
        'leonAi-24': 'url("public/images/leonAi-24.jpg")',    
        'leonAi-25': 'url("public/images/leonAi-25.jpg")',    
        'leonAi-26': 'url("public/images/leonAi-26.jpg")',    
        'leonAi-27': 'url("public/images/leonAi-27.jpg")',    
        'leonAi-28': 'url("public/images/leonAi-28.jpg")',    
        'leonAi-29': 'url("public/images/leonAi-29.jpg")',    
      },
      backgroundSize: {
        'contain-50': '50% 50%',
      },
      boxShadow: {
        'costum-1': '1px 1px 1px black',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
} satisfies Config

