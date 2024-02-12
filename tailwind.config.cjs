/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '200px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    extend: {
      boxShadow: {
        loginBoxShadow: "0 2px 4px 0 rgb(0 0 0 / 30%)"
      }
    },
  },
  plugins: [],
}
