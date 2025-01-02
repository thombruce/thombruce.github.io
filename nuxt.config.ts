// https://nuxt.com/docs/api/configuration/nuxt-config

import { readFileSync } from 'node:fs'

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    './layers/csv',
    './layers/toodles',
    './layers/fountain',
    '@thombruce/tnt-content'
  ],
  site: {
    url: 'https://www.thombruce.com',
    name: 'Thom Bruce',
  },
  // nitro: { static: true },
  routeRules: {
    // '/__og-image__/**': { prerender: true },
    '/discord': { redirect: 'https://discord.gg/SAUagUgTfa' },
    '/github': { redirect: 'https://github.com/thombruce' },
    '/mastodon': { redirect: 'https://mas.to/@thombruce' },
    '/twitch': { redirect: 'https://twitch.tv/thombruce' },
    '/youtube': { redirect: 'https://youtube.com/@thombruce' },
  },
  content: {
    highlight: {
      langs: [
        // Read more about Shiki languages: https://shiki.style/guide/load-lang
        JSON.parse(
          readFileSync('./shiki/languages/toodles.tmLanguage.json', 'utf-8'),
        ),
        JSON.parse(
          readFileSync('./shiki/languages/todotxt.tmLanguage.json', 'utf-8'),
        ),
      ],
    },
  },
  tailwindcss: {
    cssPath: './assets/css/thombruce.css',
  },
})
