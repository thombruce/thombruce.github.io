// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { createResolver, defineNuxtModule } from '@nuxt/kit'

const FountainJS = defineNuxtModule({
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    nuxt.options.nitro.externals.inline.push(resolve('./transformers'))
    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
      contentContext.transformers.push(resolve('./transformers/fountain.ts'))
    })
  }
})

export default defineNuxtConfig({
  modules: [
    FountainJS,
  ],
  css: ['@thombruce/fountainjs/src/fountain.css'],
})
