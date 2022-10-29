/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "black": "#181818",
      "white": "#f2f2f2",
      "light-black": "#34363a",
      "brand-color": "#0DCCF2",
      "gray": "rgba(255,255,255,0.2)",
      "transparent": "rgba(0,0,0,0)",
      gold: "#ffb33e"
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
