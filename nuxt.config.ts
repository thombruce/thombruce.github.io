// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    './layers/csv',
    './layers/toodles',
    './layers/fountain',
    '@thombruce/tnt-content'
  ],
  routeRules: {
    '/discord': { redirect: 'https://discord.gg/SAUagUgTfa' },
    '/github': { redirect: 'https://github.com/thombruce' },
    '/mastodon': { redirect: 'https://mas.to/@thombruce' },
    '/twitch': { redirect: 'https://twitch.tv/thombruce' },
    '/youtube': { redirect: 'https://youtube.com/@thombruce' },
  },
  tailwindcss: {
    cssPath: './assets/css/thombruce.css',
  },
})
