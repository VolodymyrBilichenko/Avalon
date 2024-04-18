/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        normalidad: ['normalidad-wide', 'fallbackFont', 'sans-serif'],
      },
      colors: {
        blue: {
          '500': '#0A4A7F',
        }
      }
    },
  },
  plugins: [],
}
