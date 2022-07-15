module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryPurpleShade: 'rgb(33,80,214)',
        primaryPurple: 'rgb(62, 104,225)',
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
    plugins: [require('daisyui')],
  },
};
