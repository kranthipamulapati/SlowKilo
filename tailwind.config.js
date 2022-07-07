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
        }
      }
    },
  },
  plugins: [],
}
