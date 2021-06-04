const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: ['hover'],
      placeholderOpacity: {
        '10': '0.1',
        '20': '0.2',
        '100': '1',
       }
    },
    colors: {
      black: colors.black,
      gray: colors.trueGray,
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
