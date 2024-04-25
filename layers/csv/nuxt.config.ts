// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { createResolver, defineNuxtModule } from '@nuxt/kit'

const CSV = defineNuxtModule({
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    nuxt.options.nitro.externals.inline.push(resolve('./transformers'))
    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
      contentContext.transformers.push(resolve('./transformers/csv.ts'))
    })
  }
})

export default defineNuxtConfig({
  modules: [
    CSV,
  ],
})
