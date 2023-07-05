import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mimi-pink': '#FFD6D9',
        'magenta': '#a0025c'
      },
      fontFamily: {
        borna: 'Borna, serif'
      }
    },
  },
  plugins: [],
} satisfies Config

