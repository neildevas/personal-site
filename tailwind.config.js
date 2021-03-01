const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '320': '320px',
      },
      colors: {
        'dark-blue': '#004276'
      },
      fontFamily: {
        headline: 'Montserrat, sans-serif',
        body: 'Roboto, sans-serif'
      },
      inset: {
        '-75': '-75px',
        '-25': '-25px',
        '-50': '-50px',
        '-100': '-100px',
        '-200': '-200px',
      },
      height: theme => ({
        '800': '800px',
        '700': '700px',
        '650': '650px',
        '600': '600px',
        '500': '500px',
        '400': '400px',
      }),
      width: theme => ({
        '800': '800px',
        '700': '700px',
        '650': '650px',
        '600': '600px',
        '500': '500px',
        '400': '400px',
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
