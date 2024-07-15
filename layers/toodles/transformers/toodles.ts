import { defineTransformer } from '@nuxt/content/transformers'

// RegExes
const PRIORITY_REGEX = new RegExp(/(?<=^\s*(?:[!Xx~-] )?)(\([A-Z]\))\B/gm)
const DATE_REGEX = new RegExp(/(?<=^\s*(?:[!Xx~-] )?(?:\([A-Z]\) )?(?:\d{4}-\d{2}-\d{2} ){0,2})(\d{4}-\d{2}-\d{2})\b/gm)
const PRICE_REGEX = new RegExp(/(?<=^\s*(?:[!Xx~-] )?(?:\([A-Z]\) )?(?:\d{4}-\d{2}-\d{2} ){0,3})(?:[$£€]\d*[.,]?\d{1,2}-)?([$£€]\d*[.,]?\d{1,2})(?= )/gm)

const CONTEXT_REGEX = new RegExp(/\B(\@\w+)/g)
const PROJECT_REGEX = new RegExp(/\B(\+\w+)/g)
const HASHTAG_REGEX = new RegExp(/\B(\#\w+)/g)
const TAG_REGEX = new RegExp(/\b(\w+:[^ ]+)/g) // TODO: Allow additional characters  

const MULTIPLIER_REGEX = new RegExp(/\b(x\d+)$/gm)

const toodles = function(rawContent: String) {
  return rawContent
    .replace(MULTIPLIER_REGEX, "<span class='toodles-multiplier'>$1</span>")
    .replace(TAG_REGEX, "<span class='toodles-tag'>$1</span>")
    .replace(HASHTAG_REGEX, "<span class='toodles-hashtag'>$1</span>")
    .replace(PROJECT_REGEX, "<span class='toodles-project'>$1</span>")
    .replace(CONTEXT_REGEX, "<span class='toodles-context'>$1</span>")
    .replace(PRICE_REGEX, "<span class='toodles-price'>$1</span>")
    .replace(DATE_REGEX, "<span class='toodles-date'>$1</span>")
    .replace(PRIORITY_REGEX, "<span class='toodles-priority'>$1</span>")
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(line => !line.startsWith('~'))
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
