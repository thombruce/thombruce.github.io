// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  image: {
    // Options
  },
  content: {
    documentDriven: true,
  }
})
