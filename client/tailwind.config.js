/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato : " 'Lato', sans-serif",
      },
      colors: {
        tealCustom: '#23988C', // your custom color name and hex value
      },
    },
  },
  plugins: [  require('daisyui'),],
}

