/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "red"
        }
      }
    }
  },
  plugins: [],
}

