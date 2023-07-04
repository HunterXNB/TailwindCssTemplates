/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./out/*.{html,js}"],
  theme: {
    extend: {
      colors: {

        primaryCyan: "#2ab2af",
        primaryYellow: "#c0df34",
        secondaryCyan: "#4abebd",
        lightGray: "#e5eff5",
        grayishBlue: "#98a6bd"
      },
      fontFamily: {

        body: ['Karla', "sans-serif"]
      }
    },
  },
  plugins: [],
}

