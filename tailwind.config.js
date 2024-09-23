/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(51, 160, 80)', // Setting the primary color
      },
      fontFamily: {
        Sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}