/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca', 
      // MY PALLETES
      'armyDark': '#94B49F',
      'armyLight': '#CEE5D0',
      'creamy': '#FCF8E8',
      'mocca': '#ECB390',
  },
  },
  plugins: [],
}