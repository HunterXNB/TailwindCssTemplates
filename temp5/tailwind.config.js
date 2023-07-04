/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        moderateViolete: "#7541c8",
        veryDarkGrayishBlue: "#48556a",
        veryDarkBlackishBlue: "#19212e",
        lightGray: "#cfcfcf",
        lightGrayishBlue: "#ecf2f8"

      },
      fontFamily: {
        barlow: ["'Barlow Semi Condensed'", "sans-serif"]
      },
      fontSize: {
        custom: "13px"
      }
    },
  },
  plugins: [],
}