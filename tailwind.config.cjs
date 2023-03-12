/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        xing: '#126567',
        linkedin: '#0072b1',
        github: '#171515',
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
