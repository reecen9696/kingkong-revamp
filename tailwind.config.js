/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgrey: "#F4F7FB",
        darkgrey: "#2D2D2D",
        green: "#C6F806",
        yellow: "#FFD32C",
        blue: "#240CF2",
        backgroundwhite: "#FFFFFF",
      },
      fontFamily: {
        prompt: ['"Prompt"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
