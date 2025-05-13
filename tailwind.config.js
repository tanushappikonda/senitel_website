/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#FFFFFF",
        "coral-red": "#C62F39",
        "dark-red": "#FF0000",
        "full-website": "#000000",
      },
      backgroundImage: {
        'left-bottom-radial': 'radial-gradient(ellipse at bottom left, #7F7A7A 27%, #191818 88%)',
      },
    },
  },
  plugins: [],
}

