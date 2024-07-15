import { defineTransformer } from '@nuxt/content/transformers'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.txt', '.todo', '.shop', '.list'],
  parse (_id, rawContent: String) {
    return {
      _id,
      layout: 'toodles',
      body: rawContent.trim().split('\n').map(line => line.trim()),
    }
  }
})
