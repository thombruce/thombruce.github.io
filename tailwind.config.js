/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  presets: [
    require('@thombruce/tnt/tailwind.preset'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {...colors.cyan, ...{
          DEFAULT: colors.cyan['500'],
          hover: colors.cyan['600'],
          light: {
            DEFAULT: colors.cyan['500'],
            hover: colors.cyan['600'],
          },
          dark: {
            DEFAULT: colors.cyan['500'],
            hover: colors.cyan['400'],
          },
        }},
      },
    },
  },
}
