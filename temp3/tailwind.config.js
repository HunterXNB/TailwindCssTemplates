/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softOrange: "#e9ab53",
        softRed: "#f15e50",
        offWhite: "#fffdfa",
        grayishBlue: "#c5c6ce",
        darkGrayishBlue: "#5d5f79",
        veryDarkBlue: "#00001a"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]

      },
      backgroundImage: {
        pc: "url('./image-web-3-desktop.jpg')",
        mobile: "url('./dist/image-web-3-mobile.jpg')"
      }
    },
  },
  plugins: [],
}

