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
        primary : '#202225',
        secondary : '5865f2',
        gray : colors.gray,
      }

    },
  },
  plugins: [],
}

