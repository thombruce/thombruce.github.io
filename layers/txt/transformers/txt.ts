import { defineTransformer } from '@nuxt/content/transformers'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.txt'],
  parse (_id, rawContent: String) {
    return {
      _id,
      layout: 'txt',
      body: rawContent.trim().split('\n').map(line => line.trim()).sort(),
    }
  }
})
