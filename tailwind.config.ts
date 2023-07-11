import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'novela': 'Novela, serif'
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      section: {
        padding: '108px 0px',
      },
      colors: {
        'mimi-pink': '#FFD6D9',
        'magenta': '#a0025c'
      },
      minHeight: {
        '1/2': '50vh',
        '1/4': '25vh',
      },
    },
  },
  plugins: [],
} satisfies Config

