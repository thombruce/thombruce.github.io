// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@thombruce/tnt'
  ],
  app: {
    head: {
      script: [
        process.env.NODE_ENV === 'production' ?
          { async: true, src: 'https://umami.thombruce.com/script.js', 'data-website-id': '3904dd47-6c53-4623-9ac3-c03233a88f9b' } :
          undefined
      ]
    }
  }
})
