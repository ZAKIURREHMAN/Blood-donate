/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       babes:"Bebas Neue",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}