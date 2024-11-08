/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        'popone':["Orbitron", "sans-serif"],
        'poptwo':["Chakra Petch", "sans-serif"]
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

