module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '540px',
      md: '740px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primaryPurpleShade: 'rgb(73,86,255)',
        primaryPurple: 'rgb(92,104,255)',
        primaryPurpleTint: 'rgb(238, 240, 254)',
        primaryPurpleTint_two: 'rgb(197,210,246)',

        lightestGray: 'rgb(245, 245, 245)',
        lighterGray: 'rgb(122, 122, 122)',

        tonedBlack: 'rgb(18, 18, 18)',

        darkerGray: 'rgb()',
        primaryRed: 'rgb()',
        primaryRedDark: 'rgb()',
      },

      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
    },
    variants: {
      extend: {
        display: ['group-focus'],
      },
    },

    plugins: [require('daisyui')],
  },
};
