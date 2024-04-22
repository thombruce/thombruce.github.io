// https://nuxt.com/docs/api/configuration/nuxt-config

import FountainJS from './fountain/module.mjs'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-lodash",
    "@nuxtjs/tailwindcss",
    FountainJS,
    '@nuxt/content',
  ],
  // Lodash
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  // Tailwind CSS
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  // Nuxt Content
  content: {
    documentDriven: true
  },
})