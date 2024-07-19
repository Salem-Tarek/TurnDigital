/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4b6bfb"
        },
        light: {
          DEFAULT: "#f4f4f5",
          darker: "#a4a5ab"
        }
      }
    }
  },
  plugins: [],
}

