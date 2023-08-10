import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    screens: {
      'xs': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
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
      },
      maxWidth: {
        'commonLayout': '1140px'
      },
      backgroundImage: {
        'hero-pattern': 'url("public/images/hero_pinkBackground.png")',    
        'old-paper': 'url("https://images.pexels.com/photos/14129745/pexels-photo-14129745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',    
        'contact-pattern': 'url("public/images/grafika2.png")',   
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

