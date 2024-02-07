/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#38bdf8',
        secondary : '#14b8a6',
        gray : colors.gray,
      }

    },
  },
  plugins: [],
}

