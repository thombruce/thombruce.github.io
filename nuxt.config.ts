// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    './layers/csv',
    './layers/txt',
    './layers/fountain',
    '@thombruce/tnt-content'
  ],
  routeRules: {
    '/mastodon': { redirect: 'https://mas.to/@thombruce' },
  },
})
