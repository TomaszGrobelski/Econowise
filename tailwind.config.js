/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primary":"#6957E9",
      
      "white": "#FFFFFF",
    },
    extend: {
      colors:{
        main: '#6957E9'
      }
    },
  },
  plugins: [],
}