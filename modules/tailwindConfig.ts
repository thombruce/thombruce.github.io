import { defineNuxtModule } from '@nuxt/kit'

const colors = require('tailwindcss/colors')

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      Object.assign(tailwindConfig.theme.extend.colors, {
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
      })
    })
  }
})
