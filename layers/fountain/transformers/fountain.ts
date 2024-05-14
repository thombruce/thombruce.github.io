import { defineTransformer } from '@nuxt/content/transformers'

import fountain from '@thombruce/fountainjs'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.fountain'],
  parse (_id, rawContent: String) {
    const parsed = fountain.parse(rawContent)

    return {
      _id,
      layout: 'fountain',
      title: parsed.title,
      body: parsed,
    }
  }
})
