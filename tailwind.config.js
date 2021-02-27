const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    extend: {},
  },
  plugins: [
    require('tailwindcss-multi-column')(),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.boxshadow-3d-right': {
          background: ' #000000',
          border: '.1rem solid #d6f8d6',
          boxShadow:
            '.3rem -.3rem 0 -.1rem #000000, .3rem -.3rem #0bbcd6, .6rem -.6rem 0 -.1rem #000000, .6rem -.6rem #e4572e',
        },
        '.boxshadow-3d-left': {
          background: ' #000000',
          border: '.1rem solid #d6f8d6',
          boxShadow:
            '-.3rem -.3rem 0 -.1rem #000000, -.3rem -.3rem #0bbcd6, -.6rem -.6rem 0 -.1rem #000000, -.6rem -.6rem #e4572e',
        },
        '.boxshadow-3d-collapse': {
          boxShadow:
            '0 0 0 0 #000000, 0 0 0 0 #0bbcd6, 0 0 0 0 #000000, 0 0 0 0 #e4572e !important',
        },
        '.nav-border': {
          boxShadow:
            '0 .3rem #000000, 0 .3rem 0 .1rem #d6f8d6, -.3rem .6rem #342e37, -.3rem .6rem 0 .1rem #0bbcd6, -.6rem .9rem #000000, -.6rem .9rem 0 .1rem #e4572e',
        },
        '.gradient': {
          background: 'rgba(228,87,46,1)',
          background:
            'linear-gradient(315deg, rgba(11,188,214,1) 0%, rgba(0,0,0,1) 50%, rgba(228,87,46,1) 100%) !important',
        },
        '.last': {
          marginRight: '0 !important',
        },
        '.first': {
          marginLeft: '0',
        },
        '.picture-border-1': {
          border: '.5rem solid #d6f8d6',
          boxShadow:
            '-.2rem -.2rem #000000, -.3rem -.3rem #0bbcd6, -.5rem -.5rem #000000, -.6rem -.6rem #0bbcd6, .5rem .5rem #e4572e',
        },
        '.picture-border-2': {
          border: '.5rem solid #d6f8d6',
          boxShadow:
            '.2rem .2rem #000000, .3rem .3rem #0bbcd6, .5rem .5rem #000000, .6rem .6rem #0bbcd6, -.5rem -.5rem #e4572e',
        },
        '.picture-border-sm-1': {
          border: '.3rem solid #d6f8d6',
          boxShadow:
            '.2rem .2rem #000000, .3rem .3rem #0bbcd6, -.2rem -.2rem #000000, -.3rem -.3rem #e4572e',
        },
        '.picture-border-sm-2': {
          border: '.3rem solid #d6f8d6',
          boxShadow:
            '.2rem .2rem #000000, .3rem .3rem #e4572e, -.2rem -.2rem #000000, -.3rem -.3rem #0bbcd6',
        },
        '.textshadow-blue': {
          textShadow: '0 0 .2rem #0bbcd6',
        },
        '.textshadow-red': {
          textShadow: '0 0 .2rem #e4572e',
        },
        '.bg-blurred': {
          backgroundColor: 'rgba(0,0,0, .95)',
        },
        '.border-tl': {
          boxShadow:
            '0 0 0 .3rem #000000, 3rem -1.2rem 0 -.5rem #000000, -3rem 1.2rem 0 -.5rem #000000, -.6rem -.6rem #0bbcd6',
        },
        '.border-tr': {
          boxShadow:
            '0 0 0 .3rem #000000, -3rem -1.2rem 0 -.5rem #000000, 3rem 1.2rem 0 -.5rem #000000, .6rem -.6rem #0bbcd6',
        },
        '.border-corners': {
          boxShadow:
            '0 0 0 .3rem #000000, 3rem -1.2rem 0 -.5rem #000000, -3rem 1.2rem 0 -.5rem #000000, -.6rem -.6rem #0bbcd6, .6rem .6rem #e4572e',
        },
        '.gradient-bg': {
          background: '#000000',
          background:
            'linear-gradient(315deg, rgba(11,188,214,1) 5%, rgba(228,87,46,1) 95%)',
        },
        '.gradient-bg-2': {
          background: '#000000',
          background:
            'linear-gradient(225deg, rgba(228,87,46,1) 5%, rgba(11,188,214,1) 95%)',
        },
        '.title-bg': {
          background: 'rgb(11,188,214',
          background:
            'linear-gradient(135deg, rgba(228,87,46,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(11,188,214,1) 100%)',
          boxShadow:
            '0 0 0 .3rem #000000, -.6rem -.6rem #0bbcd6, .6rem .6rem #e4572e',
        },
        '.code-bg': {
          boxShadow:
            '0 0 0 .3rem #000000, -.6rem -.6rem #0bbcd6, .6rem .6rem #e4572e',
        },
        '.top-divider': {
          boxShadow:
            '0 0 0 .3rem #000000, -3rem 5rem #000000, -.6rem -.6rem #0bbcd6',
        },
        '.timeline-left': {
          borderBottom: '.2rem solid #0bbcd6',
          borderLeft: '.2rem solid #0bbcd6',
        },
        '.timeline-right': {
          borderBottom: '.2rem solid #e4572e',
          borderRight: '.2rem solid #e4572e',
        },
        '.timeline-top': {
          borderTop: '.2rem solid #0bbcd6',
        },
        '.timeline-sq-blue': {
          marginTop: '.3rem',
          marginLeft: '-1.8rem',
          boxShadow:
            '-.3rem .3rem #000000, -.5rem .5rem #0bbcd6, -.3rem -.3rem #000000, -.5rem -.5rem #0bbcd6',
        },
        '.timeline-sq-blue-hover': {
          boxShadow:
            '.3rem -.3rem #000000, .5rem -.5rem #0bbcd6, .3rem .3rem #000000, .5rem .5rem #0bbcd6',
        },
        '.timeline-sq-red': {
          marginTop: '.3rem',
          marginRight: '-1.8rem',
          boxShadow:
            '.3rem -.3rem #000000, .5rem -.5rem #e4572e, .3rem .3rem #000000, .5rem .5rem #e4572e',
        },
        '.timeline-sq-red-hover': {
          boxShadow:
            '-.3rem .3rem #000000, -.5rem .5rem #e4572e, -.3rem -.3rem #000000, -.5rem -.5rem #e4572e',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'group-hover'])
    }),
  ],
}
