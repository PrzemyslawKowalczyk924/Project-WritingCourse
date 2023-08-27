import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    screens: {

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

