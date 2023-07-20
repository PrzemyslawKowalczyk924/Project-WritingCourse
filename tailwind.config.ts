import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
        'teal': '#008080'
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '7/8': '85vh',
      },
      maxWidth: {
        'commonLayout': '1140px'
      }
    },
  },
  plugins: [],
} satisfies Config

