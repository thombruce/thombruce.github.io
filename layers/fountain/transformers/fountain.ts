import { defineTransformer } from '@nuxt/content/transformers'

import fountain from '@thombruce/fountainjs'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.fountain'],
  parse (_id, rawContent: String) {
    return {
      _id,
      layout: 'fountain',
      body: fountain.parse(rawContent),
    }
  }
})
