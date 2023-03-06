/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary
        primary: "#424990",
        // dark theme
        "darker-blue": "#191A23",
        "dark-blue": "#1D1E2B",
        // light theme
        "light-gray": "#F1F2F2",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
