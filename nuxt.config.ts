// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    './layers/fountain',
    '@thombruce/tnt-content'
  ]
})