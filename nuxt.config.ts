import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/tailwindcss',
  ],
  content: {
    highlight: {
      preload: [
        'css',
        'diff',
        'erb',
        'haml',
        'html',
        'javascript',
        'json',
        'markdown',
        'postcss',
        'pug',
        'python',
        'ruby',
        'rust',
        'sass',
        'scss',
        'shell',
        'sql',
        'toml',
        'typescript',
        'vue',
        'vue-html',
        'xml',
        'yaml',
      ]
    }
  }
})
