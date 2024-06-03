/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Ubuntu:["Ubuntu",'sans-serif'],
        Poetsen:["Poetsen one",'sans-serif']
      }
    },
  },
  plugins: [],
}
