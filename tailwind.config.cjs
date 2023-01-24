/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  
  darkMode : "class", //dark mode media is device preparence and class is menual
  theme: {
    extend: {
      colors : {
        darkColor : "rgb(8, 1, 10)"
      },
      fontFamily : {
        "Sofia"  : ['Sofia Sans','sans-serif'],
        "mukta" : ['Mukta', "sans-serif"],
        'Satisfy' :['Satisfy', 'cursive']
      },
      screens : {
        "xs" : "300px"
      }
    },
  },
  plugins: [],
}