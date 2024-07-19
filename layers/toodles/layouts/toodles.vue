<script setup>
const containerClass = (item) => {
  let classes = []
  if (item.indent) classes.push('toodles-indent')
  if (item.state === '!') classes.push('toodles-focus')
  if (['x', 'X'].includes(item.state)) classes.push('toodles-done')
  return classes.join(' ')
}
</script>

<template lang="pug">
.prose.max-w-none
  ContentDoc(#default="{ doc }")
    h1 {{ doc.title }}
    div(
      v-for="item in doc.body"
      :class="containerClass(item)"
    )
      span.not-prose.mr-3
        input(
          :id="item.id"
          type="checkbox"
          :checked="item.state === 'x'"
          disabled
        )
      label(:for="item.id")
        MDC(:value="item.text" tag="span" unwrap="p" class="toodles-mdc")
</template>

<style lang="postcss">
.toodles-indent {
  @apply ml-8;
}

.toodles-focus > label {
  @apply font-bold;
}

.toodles-done > label {
  @apply
    relative
    opacity-70
    /*
      The below styles all contribute to a strikethrough effect
      which will span multiple lines and does not appear to be
      broken or interrupted by discrepancies in font size.
    */
    underline
    decoration-2
    underline-offset-[-0.4rem];
  text-decoration-skip-ink: none;
}

.toodles-mdc span:is(.toodles-priority) + time,
.toodles-mdc time + time,
.toodles-mdc time + span:is(.toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag, .toodles-multiplier),
.toodles-mdc time + :is(strong, em, a, code),
.toodles-mdc :is(strong, em, a, code) + :is(strong, em, a, code),
.toodles-mdc :is(strong, em, a, code) + span:is(.toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag, .toodles-multiplier),
.toodles-mdc span:is(.toodles-priority, .toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag) + :is(strong, em, a, code),
.toodles-mdc span:is(.toodles-priority, .toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag) + span:is(.toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag, .toodles-multiplier) {
  /*
    The MDC component doesn't respect whitespace between HTML or parsed Markdown tags.
    We need to add a little margin to replace the space that's lost.
  */
  @apply ml-0.5;
}

.toodles-priority {
  @apply
    font-black
    text-violet-800
    dark:text-violet-300;
}

label time.toodles-date:first-of-type {
  @apply
    text-cyan-800
    dark:text-cyan-300;
}

label time.toodles-date:nth-of-type(2) {
  @apply
    text-yellow-800
    dark:text-yellow-300;
}

.toodles-done > label time.toodles-date:first-of-type {
  @apply
    text-lime-800
    dark:text-lime-300;
}

.toodles-done > label time.toodles-date:nth-of-type(2) {
  @apply
    text-cyan-800
    dark:text-cyan-300;
}

.toodles-done > label time.toodles-date:nth-of-type(3) {
  @apply
    text-yellow-800
    dark:text-yellow-300;
}

.toodles-price {
  @apply
    text-green-800
    dark:text-green-300;
}

.toodles-context {
  @apply
    font-black
    text-lime-800
    dark:text-lime-300;
}

.toodles-project {
  @apply
    font-black
    text-blue-800
    dark:text-blue-300;
}

.toodles-hashtag {
  @apply
    font-black
    text-orange-800
    dark:text-orange-300;
}

.toodles-tag {
  @apply
    text-purple-800
    dark:text-purple-300;
}

.toodles-multiplier {
  @apply
    text-pink-800
    dark:text-pink-300;
}
</style>