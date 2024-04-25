import { defineTransformer } from '@nuxt/content/transformers'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.csv'],
  parse (_id, rawContent: String) {
    return {
      _id,
      layout: 'csv',
      body: rawContent.trim().split('\n').map(line => line.trim()),
    }
  }
})
