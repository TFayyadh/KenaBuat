/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: {
      'uncheck': "url('/img/stop_467153.png')",
      'checked': "url('/img/checked.png')",
    }},
  },
  plugins: [],
}

