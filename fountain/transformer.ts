import { defineTransformer } from '@nuxt/content/transformers'

import fountain from './fountain'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.fountain'],
  parse (_id, rawContent: String) {
    return {
      _id,
      body: fountain.parse(rawContent),
    }
  }
})
