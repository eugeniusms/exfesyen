/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      borderRadius: {
        '4xl': '2rem',
      },
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
      // MY SOLID
      'softRed': '#F47174',
      // MY PALLETES
      'armyDark': '#94B49F',
      'armyLight': '#CEE5D0',
      'creamy': '#FCF8E8',
      'mocca': '#ECB390',
      'latteDark': '#CDC2AE',
      'latteLight': '#ECE5C7',
      'navy': '#354259',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}