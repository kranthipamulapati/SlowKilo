/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        white : "#ffffff",
        blue  : {
          medium: "#005c98"
        },
        balck : {
          medium : "#005c98",
          faded : "#00000059"
        },
        gray : {
          base : "#616161",
          background : "#fafafa",
          primary : "#dbdbdb"
        },
        red : {
          primary : "#ed4956"
        }
      }
    },
  },
  plugins: [],
}
