import { defineTransformer } from '@nuxt/content/transformers'

const toodles = function(rawContent: String) {
  return rawContent.trim().split('\n').map(line => line.trim())
}

export default defineTransformer({
  name: 'transformer',
  extensions: ['.txt', '.todo', '.shop', '.list'],
  parse (_id, rawContent: String) {
    const parsed = toodles(rawContent)

    return {
      _id,
      layout: 'toodles',
      body: parsed,
    }
  }
})
