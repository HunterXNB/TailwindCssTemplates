/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#4f7df3",
        paleBlue: "#c2d3ff",
        lightRed: "#ff5263",
        neutralGray: "#969696",
        darkBlue: "#151f29"

      },
      fontFamily: {
        body: ['Libre Franklin', "sans-serif"]
      }

    },
  },
  plugins: [],
}

